import "./Input.css";

export default function Input({
  name,
  label,
  type,
  min,
}: {
  type?: string;
  name: string;
  label: string;
  min?: string;
}) {
  return (
    <>
      <label className={`${name}-label`} htmlFor={name}>
        {label}
      </label>
      <input
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
