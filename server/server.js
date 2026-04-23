// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/transactions", require("./routes/transactions"));

app.listen(5000, () => console.log("Server running"));
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();