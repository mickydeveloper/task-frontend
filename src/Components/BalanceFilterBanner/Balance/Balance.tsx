import { BalanceWrapper } from "./BalanceStyles";

export default function Balance({ amount }: { amount: number }) {
  return (
    <BalanceWrapper title="account balance" $positive={amount > -1}>
      {amount}$
    </BalanceWrapper>
  );
}
