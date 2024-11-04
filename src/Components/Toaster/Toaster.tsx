import { ToasterWrapper } from "./ToasterStyles";

interface ToasterProps {
  message: string;
  success: boolean;
  display: boolean | null;
}

export default function Toaster({ message, success, display }: ToasterProps) {
  return (
    <ToasterWrapper title="toaster" $display={display} $success={success}>
      {message}
    </ToasterWrapper>
  );
}
