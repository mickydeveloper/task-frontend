import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="info">Info</Link>
        </li>
      </ul>
    </nav>
  );
}