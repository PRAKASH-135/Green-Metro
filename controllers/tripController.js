const Trip = require("../models/Trip");
const User = require("../models/User");
const haversine = require("../services/distanceService");
const { calculateCarbonSaved } = require("../services/carbonService");
const { REWARD_PER_KG } = require("../utils/constants");
const stationData = require("../data/stations.json");

const crypto = require("crypto");
const fs = require("fs");
const Tesseract = require("tesseract.js");

exports.logTrip = async (req, res) => {
  try {
    const { startStation, endStation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Ticket image required" });
    }

    // ✅ Validate station names
    const start = stationData.find(
      s => s.name.toLowerCase() === startStation.toLowerCase()
    );

    const end = stationData.find(
      s => s.name.toLowerCase() === endStation.toLowerCase()
    );

    if (!start || !end) {
      return res.status(404).json({ message: "Invalid station name" });
    }

    // 🔥 STEP 1 — Generate SHA256 hash
    const fileBuffer = fs.readFileSync(req.file.path);
    const ticketHash = crypto
      .createHash("sha256")
      .update(fileBuffer)
      .digest("hex");

    const existingHash = await Trip.findOne({ ticketHash });
    if (existingHash) {
      return res.status(400).json({
        message: "This ticket image has already been used."
      });
    }

    // 🔥 STEP 2 — OCR text extraction
    const result = await Tesseract.recognize(req.file.path, "eng");
    const text = result.data.text.toLowerCase();

    console.log("OCR TEXT:", text);

    // 🔥 STEP 3 — Extract ticket number using regex
    const ticketMatch = text.match(/ticket\s*no[:\s]*([0-9]+)/i);

    if (!ticketMatch) {
      return res.status(400).json({
        message: "Ticket number not detected. Upload valid metro ticket."
      });
    }

    const ticketNumber = ticketMatch[1];

    const existingTicketNumber = await Trip.findOne({ ticketNumber });
    if (existingTicketNumber) {
      return res.status(400).json({
        message: "This ticket number has already been used."
      });
    }

    // 🔥 STEP 4 — Validate ticket content
    if (
      !text.includes("metro") ||
      !text.includes(startStation.toLowerCase()) ||
      !text.includes(endStation.toLowerCase())
    ) {
      return res.status(400).json({
        message: "Uploaded image does not appear to be valid metro ticket."
      });
    }

    // 🔥 STEP 5 — Calculate distance & reward
    const distance = haversine(
      start.latitude,
      start.longitude,
      end.latitude,
      end.longitude
    );

    const carbonSaved = calculateCarbonSaved(distance);
    const reward = carbonSaved * REWARD_PER_KG;

    // 🔥 STEP 6 — Save Trip
    const trip = await Trip.create({
      user: req.user,
      startStation,
      endStation,
      distance,
      carbonSaved,
      rewardEarned: reward,
      ticketImage: req.file.path,
      ticketHash,
      ticketNumber
    });

    await User.findByIdAndUpdate(req.user, {
      $inc: { walletBalance: reward }
    });

    res.json({
      message: "Trip logged successfully",
      trip
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};