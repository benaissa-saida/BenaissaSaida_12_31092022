import { Link } from "react-router-dom";
import Nav from "./Nav";
import headerLogo from "../assets/headerLogo.svg";
import "../styles/header.css";

function Header() {
  return (
    <div className="Ss-header">
      <Link to="/" title="Home" className="Ss-header-link">
        <img className="Ss-logo" src={headerLogo} alt="logo-SportSee-red" />
      </Link>
      <Nav />
    </div>
  );
}

export default Header;
