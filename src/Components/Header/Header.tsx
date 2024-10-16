import Navbar from "../Navbar/Navbar";
import "./Header.css";
import logo from "../../icons/logo.svg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <Navbar />
    </header>
  );
}
