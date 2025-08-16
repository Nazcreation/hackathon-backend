const mongoose = require("mongoose");

const HijabSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("HijabStyle", HijabSchema);
