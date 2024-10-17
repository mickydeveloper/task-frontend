import "./Toaster.css";

export default function Toaster({
  message,
  success,
  display,
}: {
  message: string;
  success: boolean;
  display: boolean | null;
}) {
  return (
    <div
      className="toaster"
      title="toaster"
      style={{
        background: success ? "green" : "red",
        display: display ? "block" : "none",
      }}
    >
      {message}
    </div>
  );
}
