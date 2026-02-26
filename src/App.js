// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!amount) {
      setConverted("");
      return;
    }

    const numericAmount = Number(amount);
    if (Number.isNaN(numericAmount)) return;

    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${numericAmount}&from=${fromCur}&to=${toCur}`,
      );
      const data = await res.json();
      setConverted(data.rates[toCur]);
      setIsLoading(false);
    }

    if (fromCur === toCur) {
      setConverted(numericAmount);
      return;
    }

    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div className="converter">
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{isLoading ? "Converting…" : `${converted} ${toCur}`}</p>
    </div>
  );
}
