// components/TransactionForm.js
import { useState } from "react";
import { addTransaction } from "../services/api";

export default function TransactionForm({ onTransactionAdded }) {
  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Validation
      if (!form.amount || !form.category) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      if (isNaN(form.amount) || form.amount <= 0) {
        setError("Please enter a valid amount");
        setLoading(false);
        return;
      }

      await addTransaction({
        type: form.type,
        amount: parseFloat(form.amount),
        category: form.category.trim(),
      });

      setSuccess(true);
      setForm({
        type: "expense",
        amount: "",
        category: "",
      });

      // Call parent callback to refresh
      if (onTransactionAdded) {
        setTimeout(() => {
          onTransactionAdded();
          setSuccess(false);
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message" style={{ marginBottom: "15px", width: "100%" }}>{error}</div>}
      {success && <div className="success-message" style={{ marginBottom: "15px", width: "100%", color: "#28a745" }}>✓ Transaction added!</div>}

      <div className="form-group">
        <label>Type</label>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="form-group">
        <label>Amount (₹)</label>
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          value={form.amount}
          onChange={handleChange}
          step="0.01"
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="e.g., Food, Groceries"
          value={form.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Transaction"}
        </button>
      </div>
    </form>
  );
}