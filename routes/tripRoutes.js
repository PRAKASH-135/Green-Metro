const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { logTrip } = require("../controllers/tripController");

// Log Trip (Protected + Ticket Upload)
router.post("/log", auth, upload.single("ticket"), logTrip);

module.exports = router;