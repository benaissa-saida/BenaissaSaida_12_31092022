import { NavLink } from "react-router-dom";
import headerLinks from "../datas/Navs/header";
import "../styles/nav.css";

function Nav() {
  return (
    <nav className="Ss-navbar">
      <ul>
        {headerLinks.map((link) => (
          <li key={link.title}>
            <NavLink to={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
