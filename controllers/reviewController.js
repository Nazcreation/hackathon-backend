const Review = require("../models/review");
const HijabStyle = require("../models/Hijab");

exports.addReview = async (req, res) => {
  const { text, rating } = req.body;
  try {
    const hijab = await HijabStyle.findById(req.params.hijabId);
    if (!hijab) return res.status(404).json({ msg: "Hijab not found" });

    const review = new Review({
      user: req.user.id,
      hijabStyle: req.params.hijabId,
      text,
      rating,
    });
    await review.save();

    hijab.reviews.push(review._id);
    await hijab.save();

    res.json(review);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
