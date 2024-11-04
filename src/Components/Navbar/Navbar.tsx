import { Navigation, StyledLink } from "./NavabarStyles";

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <Navigation role="navigation" aria-label="Main Navigation">
        <li>
          <StyledLink to="/">Main</StyledLink>
        </li>
        <li>
          <StyledLink to="info">Info</StyledLink>
        </li>
      </Navigation>
    </nav>
  );
}
