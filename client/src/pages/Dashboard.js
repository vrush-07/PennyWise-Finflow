import React, { useState, useEffect } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlyChart from "../components/MonthlyChart";
import API from "../services/api";
import { getAlerts } from "../utils/getAlerts";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError("");
      const res = await API.get("/transactions");
      setTransactions(res.data || []);

      // Generate alerts
      const alertData = getAlerts(res.data || []);
      setAlerts(alertData);
    } catch (err) {
      setError("Failed to load transactions. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTransactionAdded = () => {
    fetchData();
  };

  return (
    <div className="dashboard">
      <h1>💰 Finance Tracker Dashboard</h1>

      {error && <div className="error-message" style={{ marginBottom: "20px" }}>{error}</div>}

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="chart-container">
            <h2>Monthly Overview</h2>
            <MonthlyChart data={transactions} />
          </div>

          <div className="form-container card">
            <h2>Add Transaction</h2>
            <TransactionForm onTransactionAdded={handleTransactionAdded} />
          </div>

          <div className="transaction-list">
            <h2>Recent Transactions</h2>
            <TransactionList data={transactions} />
          </div>

          {/* Alert Section */}
          {alerts.length > 0 && (
            <div className="alerts">
              <h3>⚠️ Budget Alerts</h3>
              {alerts.map((a, i) => (
                <div key={i} className="alert-item">
                  {a}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}