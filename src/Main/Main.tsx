import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import List from "../Components/List/List";
import { Transaction } from "../Components/transaction";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export default function Main() {
  const [transactions, setTranactions] = useState<Array<Transaction>>([]);

  const getTransactions = async () => {
    const response = await client.get("/transactions");
    setTranactions(response.data);
  };

  const removeTransaction = (id: number) => {
    client
      .delete(`/transactions/${id}`)
      .then(() => {
        const newArray = [...transactions];
        newArray.splice(
          newArray.map((transaction) => transaction.id).indexOf(id),
          1
        );
        setTranactions(newArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <main className="main" role="main">
      <aside>balance</aside>
      <section>form</section>
      <List transactions={transactions} removeTransaction={removeTransaction} />
    </main>
  );
}
