const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startStation: String,
  endStation: String,
  distance: Number,
  carbonSaved: Number,
  rewardEarned: Number,
  ticketImage: String,

  // 🔥 Prevent exact duplicate image
  ticketHash: {
    type: String,
    unique: true
  },

  // 🔥 Prevent same ticket number reuse
  ticketNumber: {
    type: String,
    unique: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);