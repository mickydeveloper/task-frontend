import { Transaction } from "../../transaction";
import "./ListItem.css";

export default function ListItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  return <li className="item-transaction">item 1</li>;
}
