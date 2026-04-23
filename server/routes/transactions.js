// routes/transactions.js
const router = require("express").Router();
const Transaction = require("../models/Transaction");

// Add transaction
router.post("/", async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
});

// Get all
router.get("/", async (req, res) => {
  const data = await Transaction.find();
  res.json(data);
});

module.exports = router;