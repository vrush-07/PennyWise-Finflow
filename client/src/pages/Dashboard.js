import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  return (
    <div>
      <h1>Finance Tracker</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
} 