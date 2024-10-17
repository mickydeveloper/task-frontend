import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import List from "../Components/List/List";
import { Transaction } from "../Components/transaction";
import BalanceFilterBanner from "../Components/BalanceFilterBanner/BalanceFilterBanner";
import TransactionForm from "../Components/TransactionForm/TransactionForm";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export default function Main() {
  const [transactions, setTranactions] = useState<Array<Transaction>>([]);
  const [filteredTransactions, setFilteredTranactions] = useState<
    Array<Transaction>
  >([]);

  const getTransactions = async () => {
    const response = await client.get("/transactions");
    setTranactions(response.data);
    setFilteredTranactions(response.data);
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
        setFilteredTranactions(newArray);
      })
      .catch((err) => console.log(err));
  };

  const createTransaction = (transaction: Transaction) => {
    client
      .post(`/transactions`, transaction)
      .then(() => {
        const newArray = [...transactions];
        newArray.unshift(transaction);
        setTranactions(newArray);
        setFilteredTranactions(newArray);
      })
      .catch((err) => console.log(err));
  };

  const filterTransactions = (searchString: string) => {
    const newArray = [...transactions];
    setFilteredTranactions(
      newArray.filter((transaction) =>
        transaction.beneficiary
          .toLowerCase()
          .includes(searchString.toLowerCase())
      )
    );
  };

  const calculateBalance = (): number => {
    const newArray = [...filteredTransactions];
    return (
      newArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount * 100,
        0
      ) / 100
    );
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <main className="main" role="main">
      <BalanceFilterBanner
        amount={calculateBalance()}
        filterTransactions={filterTransactions}
      />
      <TransactionForm createTransaction={createTransaction} />
      <List
        transactions={filteredTransactions}
        removeTransaction={removeTransaction}
      />
    </main>
  );
}
