import { InputWrapper, LabelWrapper } from "./InputStyles";

interface InputProps {
  type?: string;
  name: string;
  label: string;
  min?: string;
}

export default function Input({ name, label, type, min }: InputProps) {
  return (
    <>
      <LabelWrapper className={`${name}-label`} htmlFor={name}>
        {label}
      </LabelWrapper>
      <InputWrapper
        className={`${name}-input`}
        title={name}
        name={name}
        type={type && type}
        required
        aria-required="true"
        min={min}
      />
    </>
  );
}
