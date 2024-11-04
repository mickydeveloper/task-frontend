import { Transaction } from "../transaction";
import ListItem from "./ListItem/ListItem";
import { ListWrapper } from "./ListStyles";

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
    <ListWrapper id={isFiltering ? "isFiltering" : ""}>
      {renderTransactions()}
    </ListWrapper>
  );
}
