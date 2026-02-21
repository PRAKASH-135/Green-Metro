const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  points: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Reward", rewardSchema);