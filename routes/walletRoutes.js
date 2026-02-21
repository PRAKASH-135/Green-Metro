const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getWallet } = require("../controllers/walletController");

// Get Wallet Balance
router.get("/", auth, getWallet);

module.exports = router;