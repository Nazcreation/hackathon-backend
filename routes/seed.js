const express = require("express");
const router = express.Router();
const HijabStyle = require("../models/Hijab");

router.post("/", async (req, res) => {
  try {
    await HijabStyle.deleteMany({}); // optional: clear existing

    const hijabs = [
      { name: "Elegant Pink", description: "Soft pink hijab", image: "http://localhost:5000/uploads/elegant-pink.jpg", reviews: [] },
      { name: "Classic Black", description: "Simple black hijab", image: "https://via.placeholder.com/300", reviews: [] },
      { name: "Turquoise Wrap", description: "Bright turquoise style", image: "https://via.placeholder.com/300", reviews: [] },
      { name: "Maroon Scarf", description: "Elegant maroon color", image: "https://via.placeholder.com/300", reviews: [] },
      { name: "Golden Silk", description: "Shiny golden hijab", image: "https://via.placeholder.com/300", reviews: [] },
      { name: "Casual Gray", description: "Everyday gray style", image: "https://via.placeholder.com/300", reviews: [] },
    ];

    const created = await HijabStyle.insertMany(hijabs);
    res.json({ message: "6 hijabs seeded successfully!", hijabs: created });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
