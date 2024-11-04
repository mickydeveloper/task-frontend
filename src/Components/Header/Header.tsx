import Navbar from "../Navbar/Navbar";
import logo from "../../icons/logo.svg";
import { AppHeader, AppLogo } from "./HeaderStyles";

export default function Header() {
  return (
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <Navbar />
    </AppHeader>
  );
}
