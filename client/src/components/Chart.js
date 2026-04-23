// components/Chart.js
import { Pie } from "react-chartjs-2";

export default function Chart({ transactions }) {
  const categories = {};
  
  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = 
        (categories[t.category] || 0) + t.amount;
    }
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
      },
    ],
  };

  return <Pie data={data} />;
}