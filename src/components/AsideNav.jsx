import { NavLink } from "react-router-dom";
import asideIcons from "../datas/Navs/aside";
import "../styles/asideNav.css";
import Icon from "./Icon";

function AsideNav() {
  return (
    <div className="Ss-aside-container">
      <nav className="Ss-asideNav">
        <ul>
          {asideIcons.map((icon) => (
            <li key={icon.title}>
              <NavLink to="/user/12">
                <Icon src={icon.src} alt={icon.title} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p className="ss-copyright-txt">Copyright, SportSee 2021</p>
    </div>
  );
}

export default AsideNav;
