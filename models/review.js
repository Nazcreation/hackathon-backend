const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hijab: { type: mongoose.Schema.Types.ObjectId, ref: "HijabStyle" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", ReviewSchema);
