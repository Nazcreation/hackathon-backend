const HijabStyle = require("../models/Hijab");
const Review = require("../models/review");

exports.getAllHijabs = async (req, res) => {
  try {
    const hijabs = await HijabStyle.find().populate({
      path: "reviews",
      populate: { path: "user", select: "name" },
    });
    res.json(hijabs);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getHijabById = async (req, res) => {
  try {
    const hijab = await HijabStyle.findById(req.params.id).populate({
      path: "reviews",
      populate: { path: "user", select: "name" },
    });
    if (!hijab) return res.status(404).json({ msg: "Hijab not found" });
    res.json(hijab);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
