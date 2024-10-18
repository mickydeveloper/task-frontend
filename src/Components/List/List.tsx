import { Transaction } from "../transaction";
import "./List.css";
import ListItem from "./ListItem/ListItem";

export default function List({
  transactions,
  removeTransaction,
  isFiltering,
}: {
  transactions: Array<Transaction>;
  removeTransaction: (id: number) => void;
  isFiltering: boolean;
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

  return (
    <ul className="list-transactions" id={isFiltering ? "isFiltering" : ""}>
      {renderTransactions()}
    </ul>
  );
}
