import { BalanceWrapper } from "./BalanceStyles";

interface BalanceProps {
  amount: number;
}

export default function Balance({ amount }: BalanceProps) {
  return (
    <BalanceWrapper title="account balance" $positive={amount > -1}>
      {amount}$
    </BalanceWrapper>
  );
}
