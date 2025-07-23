require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const testRoute = require("./routes/test");
app.use("/api/test", testRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
