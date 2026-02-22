const User = require("../models/User");

exports.getWallet = async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ balance: user.walletBalance });
};