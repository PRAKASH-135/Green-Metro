const Reward = require("../models/Reward");
const User = require("../models/User");

exports.claimReward = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔥 Minimum 100 points required
   if (user.walletBalance < 100) {
  const pointsNeeded = 100 - user.walletBalance;

  return res.status(400).json({
    message: "Minimum 100 points required to claim reward.",
    currentPoints: user.walletBalance,
    pointsNeeded: pointsNeeded
  });
}

    // 🔥 Deduct 100 points
    user.walletBalance -= 100;
    await user.save();

    // 🔥 Create reward record
    const reward = await Reward.create({
      user: user._id,
      points: 100,
      description: "Green Metro Reward - Redeemed"
    });

    res.json({
      message: "Reward claimed successfully!",
      remainingBalance: user.walletBalance,
      reward
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};