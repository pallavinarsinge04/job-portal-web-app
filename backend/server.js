const express = require("express");
const cors = require("cors");
require("dotenv").config();
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/applications", applicationRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Job Portal API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});