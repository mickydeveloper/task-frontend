import Balance from "./Balance/Balance";
import { BalanceFilterBannerWrapper } from "./BalanceFilterBannerStyles";
import Filter from "./Filter/Filter";

interface BalanceFilterBannerProps {
  amount: number;
  filterTransactions: (searchString: string) => void;
}

export default function BalanceFilterBanner({
  amount,
  filterTransactions,
}: BalanceFilterBannerProps) {
  return (
    <BalanceFilterBannerWrapper title="Balance Filter Banner">
      <Balance amount={amount} />
      <Filter filterTransactions={filterTransactions} />
    </BalanceFilterBannerWrapper>
  );
}
