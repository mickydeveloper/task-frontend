import { useState } from "react";
import { Transaction } from "../../transaction";
import "./ListItem.css";

export default function ListItem({
  transaction,
  removeTransaction,
}: {
  transaction: Transaction;
  removeTransaction: (id: number) => void;
}) {
  const { id, amount, beneficiary, account, address, date, description } =
    transaction;
  const [visibility, setVisibility] = useState(true);

  const removeAnimate = (id: number) => {
    setVisibility(false);
    const timeoutId = setTimeout(() => {
      removeTransaction(id);
      clearTimeout(timeoutId);
    }, 600);
  };

  return (
    <li
      className={`item-transaction ${visibility ? "" : "deleted"}`}
      key={id + account}
    >
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
        {amount}$
      </div>
      <button
        className="delete"
        title="delete"
        onClick={() => removeAnimate(id)}
      >
        x
      </button>
    </li>
  );
}
