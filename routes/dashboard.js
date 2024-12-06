const express = require("express");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.get("/", protect, (req, res) => {
    res.json({ message: "Welcome to the dashboard!", user: req.user });
});

module.exports = router;
