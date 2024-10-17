import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import List from "../Components/List/List";
import { Transaction } from "../Components/transaction";
import BalanceFilterBanner from "../Components/BalanceFilterBanner/BalanceFilterBanner";
import TransactionForm from "../Components/TransactionForm/TransactionForm";
import Toaster from "../Components/Toaster/Toaster";
import Pagination from "../Components/Pagination/Pagination";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export default function Main() {
  const [transactions, setTranactions] = useState<Array<Transaction>>([]);
  const [filteredTransactions, setFilteredTranactions] = useState<
    Array<Transaction>
  >([]);
  const [creationSuccess, setCreationSuccess] = useState<boolean | null>(null);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const pageSize = 20;

  const tosterSuccess = (value: boolean) => {
    setCreationSuccess(value);
    const timeoutId = setTimeout(() => {
      setCreationSuccess(null);
      clearTimeout(timeoutId);
    }, 500);
  };

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
        setFilteredTranactions(newArray.slice(0, pageSize));
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
        setFilteredTranactions(newArray.slice(0, pageSize));
        tosterSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        tosterSuccess(false);
      });
  };

  const filterTransactions = (searchString: string) => {
    const newArray = [...transactions];
    setIsFiltering(searchString !== "");
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
      {!isFiltering && (
        <Pagination
          pageSize={pageSize}
          transactions={transactions}
          setFilteredTransactions={setFilteredTranactions}
        />
      )}
      <Toaster
        message={
          creationSuccess
            ? "Created succefully"
            : "Failed to create transaction"
        }
        success={creationSuccess !== null && creationSuccess}
        display={creationSuccess}
      />
    </main>
  );
}
