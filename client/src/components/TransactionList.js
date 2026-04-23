export default function TransactionList({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#999" }}>
        <p>No transactions yet. Add one to get started!</p>
      </div>
    );
  }

  // Sort transactions by date (newest first)
  const sortedData = [...data].sort((a, b) => {
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  return (
    <div>
      {sortedData.map((t) => (
        <div key={t._id} className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-category">📌 {t.category || "Uncategorized"}</div>
            <div className="transaction-date">
              {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : "No date"}
            </div>
          </div>
          <div className={`transaction-amount ${t.type}`}>
            {t.type === "income" ? "+" : "-"} ₹{t.amount}
          </div>
        </div>
      ))}
    </div>
  );
}