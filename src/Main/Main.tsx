import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import List from "../Components/List/List";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export default function Main() {
  const [transactions, setTranactions] = useState([]);

  const getTransactions = async () => {
    const response = await client.get("/transactions");
    console.log(response.data, transactions);
    setTranactions(response.data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <main className="main" role="main">
      <aside>balance</aside>
      <section>form</section>
      <List transactions={transactions} />
    </main>
  );
}
