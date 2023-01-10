import Header from "./Header";
import AsideNav from "./AsideNav";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <div className="Ss-container">
      <Header />
      {children}
      <AsideNav />
    </div>
  );
}

export default Layout;
