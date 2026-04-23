// components/TransactionForm.js
import { useState } from "react";
import { addTransaction } from "../services/api";

export default function TransactionForm() {
  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(form);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setForm({...form, type: e.target.value})}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setForm({...form, amount: e.target.value})}
      />

      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setForm({...form, category: e.target.value})}
      />

      <button>Add</button>
    </form>
  );
}