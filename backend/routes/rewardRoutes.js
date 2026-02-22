const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { claimReward } = require("../controllers/rewardController");

router.post("/claim", auth, claimReward);

module.exports = router;