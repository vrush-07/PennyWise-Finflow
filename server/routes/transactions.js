// routes/transactions.js
const router = require("express").Router();
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");

// Add transaction (protected)
router.post("/", auth, async (req, res) => {
  try {
    const { type, amount, category, description } = req.body;

    // Validation
    if (!type || !amount || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const transaction = new Transaction({
      userId: req.user.id,
      type,
      amount: parseFloat(amount),
      category,
      description,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// Get all user transactions (protected)
router.get("/", auth, async (req, res) => {
  try {
    const data = await Transaction.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

module.exports = router;