import { Transaction } from "../transaction";
import Input from "./Input/Input";
import { SubmitWrapper, TransactionFormWrapper } from "./TransactionFormStyles";

export default function TransactionFrom({
  createTransaction,
}: {
  createTransaction: (transaction: Transaction) => void;
}) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsValuesArray = e.target as unknown as Array<HTMLInputElement>;
    createTransaction({
      id: new Date().getTime(),
      date: new Date().toISOString(),
      amount: +inputsValuesArray[0].value,
      account: inputsValuesArray[1].value,
      beneficiary: inputsValuesArray[2].value,
      address: inputsValuesArray[3].value,
      description: inputsValuesArray[4].value,
    });
  };
  return (
    <TransactionFormWrapper title="Transaction Form" onSubmit={onSubmit}>
      <Input name="amount" label="Amount" type="number" min="0" />
      <Input name="account" label="Account Number" type="number" min="0" />
      <Input name="beneficiary" label="Beneficiary" />
      <Input name="address" label="Address" />
      <Input name="description" label="Description" />
      <SubmitWrapper type="submit" value="Create" role="button" />
    </TransactionFormWrapper>
  );
}
