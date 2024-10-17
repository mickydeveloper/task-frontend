import { Transaction } from "../transaction";
import "./List.css";
import ListItem from "./ListItem/ListItem";

export default function List({
  transactions,
}: {
  transactions: Array<Transaction>;
}) {
  const renderTransactions = () => {
    return transactions.map((transaction) => {
      return <ListItem transaction={transaction} />;
    });
  };

  return <ul className="list-transactions">{renderTransactions()}</ul>;
}
