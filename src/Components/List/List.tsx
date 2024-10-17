import { Transaction } from "../transaction";
import "./List.css";
import ListItem from "./ListItem/ListItem";

export default function List({
  transactions,
}: {
  transactions: Array<Transaction>;
}) {
  return (
    <ul className="list-transactions">
      <ListItem transaction={transactions[0]} />
    </ul>
  );
}
