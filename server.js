const express = require("express");
const connectDB = require("./config");
const cors = require("cors");
require("dotenv").config();
const seedRoutes = require("./routes/seed");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // if using local images

app.use("/api/auth", require("./routes/auth"));
app.use("/api/hijab", require("./routes/hijab"));
app.use("/api/reviews", require("./routes/review"));
app.use("/api/seed", seedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
