import { budgets } from "./budgets";

export function getAlerts(transactions) {
  const totals = {};

  // 1. Calculate spending per category
  transactions.forEach((t) => {
    if (t.type === "expense") {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }
  });

  // 2. Compare with budget
  const alerts = [];

  Object.keys(totals).forEach((category) => {
    if (totals[category] > (budgets[category] || Infinity)) {
      alerts.push(
        `⚠️ You exceeded ${category} budget by ₹${
          totals[category] - budgets[category]
        }`
      );
    }
  });

  return alerts;
}