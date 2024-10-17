import "./Balance.css";

export default function Balance({ amount }: { amount: number }) {
  return (
    <div
      className="balance"
      title="account balance"
      style={amount > -1 ? { color: "green" } : { color: "red" }}
    >
      {amount}$
    </div>
  );
}
