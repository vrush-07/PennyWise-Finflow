// components/TransactionList.js
import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";

export default function TransactionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransactions().then(res => setData(res.data));
  }, []);

  return (
    <div>
      {data.map((t) => (
        <div key={t._id}>
          {t.type} - ₹{t.amount} ({t.category})
        </div>
      ))}
    </div>
  );
}