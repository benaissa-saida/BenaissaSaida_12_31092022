import Header from "../components/Header";
import Main from "../components/Main";
import AsideNav from "../components/AsideNav";
import "../styles/dashboard.css";
import { useBackendApi } from "../services/api/useBackendApi";

function Dashboard() {
  const { data, isLoading, error } = useBackendApi("user/18");
  // if (error) {
  //   return (
  //     <div>
  //       Error {data} {isLoading}
  //     </div>
  //   );
  // }
  console.log("dash", data, isLoading, error);
  return (
    <div className="Ss-container">
      <div>ici {data}</div>
      <Header />
      <Main />
      <AsideNav />
    </div>
  );
}

export default Dashboard;
