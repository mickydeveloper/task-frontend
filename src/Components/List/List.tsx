import { Transaction } from "../transaction";
import ListItem from "./ListItem/ListItem";
import { ListWrapper } from "./ListStyles";

interface ListProps {
  transactions: Array<Transaction>;
  removeTransaction: (id: number) => void;
  isFiltering: boolean;
}

export default function List({
  transactions,
  removeTransaction,
  isFiltering,
}: ListProps) {
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
