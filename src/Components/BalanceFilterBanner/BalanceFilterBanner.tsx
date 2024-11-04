import Balance from "./Balance/Balance";
import { BalanceFilterBannerWrapper } from "./BalanceFilterBannerStyles";
import Filter from "./Filter/Filter";

export default function BalanceFilterBanner({
  amount,
  filterTransactions,
}: {
  amount: number;
  filterTransactions: (searchString: string) => void;
}) {
  return (
    <BalanceFilterBannerWrapper title="Balance Filter Banner">
      <Balance amount={amount} />
      <Filter filterTransactions={filterTransactions} />
    </BalanceFilterBannerWrapper>
  );
}
