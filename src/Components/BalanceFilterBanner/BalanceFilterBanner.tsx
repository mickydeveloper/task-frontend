import Balance from "./Balance/Balance";
import "./BalanceFilterBanner.css";
import Filter from "./Filter/Filter";

export default function BalanceFilterBanner({
  amount,
  filterTransactions,
}: {
  amount: number;
  filterTransactions: (searchString: string) => void;
}) {
  return (
    <aside className="balance-filter-banner" title="Balance Filter Banner">
      <Balance amount={amount} />
      <Filter filterTransactions={filterTransactions} />
    </aside>
  );
}
