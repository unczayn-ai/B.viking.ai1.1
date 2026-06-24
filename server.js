const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const goalRoutes = require("./routes/goals");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/goals", goalRoutes)

app.get("/", (req, res) => {
    res.json({
        message: "VIKING.AI Backend Online 🚀"
    });
});

app.use("/uploads", express.static("uplaods"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 