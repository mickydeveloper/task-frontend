import { ToasterWrapper } from "./ToasterStyles";

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
    <ToasterWrapper title="toaster" $display={display} $success={success}>
      {message}
    </ToasterWrapper>
  );
}
