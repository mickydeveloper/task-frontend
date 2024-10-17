import { Transaction } from "../../transaction";
import "./ListItem.css";

export default function ListItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { id, amount, beneficiary, account, address, date, description } =
    transaction;
  console.log(id);

  return (
    <li className="item-transaction">
      <div className="transaction-information" title="transaction-information">
        <h5 className="beneficiary" title="beneficiary name">
          {beneficiary}
        </h5>
        <span className="account-number" title="account number">
          {account}
        </span>
        <span className="address" title="beneficiary address">
          {address}
        </span>
        <span className="description" title="transaction description">
          {description}
        </span>
        <span className="date" title="transaction date">
          {new Date(date).toUTCString()}
        </span>
      </div>
      <div
        className="amount"
        title="amount"
        style={amount > -1 ? { color: "green" } : { color: "red" }}
      >
        {amount}
      </div>
    </li>
  );
}