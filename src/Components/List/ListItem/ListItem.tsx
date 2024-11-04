import { useState } from "react";
import { Transaction } from "../../transaction";
import {
  AccountNumberWrapper,
  AddressWrapper,
  AmountWrapper,
  BeneficiaryWrapper,
  DateWrapper,
  DeleteWrapper,
  DescriptionWrapper,
  InformationWrapper,
  ItemWrapper,
} from "./ListItemStyles";

interface ListItemProps {
  transaction: Transaction;
  removeTransaction: (id: number) => void;
}

export default function ListItem({
  transaction,
  removeTransaction,
}: ListItemProps) {
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
    <ItemWrapper
      className={`${visibility ? "" : "deleted"}`}
      key={id + account}
    >
      <InformationWrapper title="transaction-information">
        <BeneficiaryWrapper title="beneficiary name">
          {beneficiary}
        </BeneficiaryWrapper>
        <AccountNumberWrapper title="account number">
          {account}
        </AccountNumberWrapper>
        <AddressWrapper title="beneficiary address">{address}</AddressWrapper>
        <DescriptionWrapper title="transaction description">
          {description}
        </DescriptionWrapper>
        <DateWrapper title="transaction date">
          {new Date(date).toUTCString()}
        </DateWrapper>
      </InformationWrapper>
      <AmountWrapper title="amount" $positive={amount > -1}>
        {amount}$
      </AmountWrapper>
      <DeleteWrapper title="delete" onClick={() => removeAnimate(id)}>
        x
      </DeleteWrapper>
    </ItemWrapper>
  );
}
