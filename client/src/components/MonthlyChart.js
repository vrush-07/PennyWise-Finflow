import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MonthlyChart({ data = [] }) {
  const monthlyData = {
    income: Array(12).fill(0),
    expense: Array(12).fill(0),
  };

  data.forEach((t) => {
    const date = new Date(t.createdAt || t.date);
    const month = date.getMonth();

    if (t.type === "income") {
      monthlyData.income[month] += parseFloat(t.amount);
    } else if (t.type === "expense") {
      monthlyData.expense[month] += parseFloat(t.amount);
    }
  });

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: monthlyData.income,
        backgroundColor: "#28a745",
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Expenses",
        data: monthlyData.expense,
        backgroundColor: "#dc3545",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount (₹)",
        },
      },
    },
  };

  return data.length === 0 ? (
    <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
      <p>No data to display. Add some transactions to see the chart.</p>
    </div>
  ) : (
    <Bar data={chartData} options={options} />
  );
}