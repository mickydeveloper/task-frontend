import { Transaction } from "../transaction";
import "./List.css";
import ListItem from "./ListItem/ListItem";

export default function List({
  transactions,
  removeTransaction,
}: {
  transactions: Array<Transaction>;
  removeTransaction: (id: number) => void;
}) {
  const renderTransactions = () => {
    return transactions.map((transaction) => {
      return (
        <ListItem
          key={transaction.id + transaction.account}
          transaction={transaction}
          removeTransaction={removeTransaction}
        />
      );
    });
  };

  return <ul className="list-transactions">{renderTransactions()}</ul>;
}
