import PropTypes from "prop-types";
import PerformanceChart from "./charts/Performance";
import ActivityChart from "./charts/Activity";
import TodayScorechart from "./charts/TodayScore";
import KeyData from "./charts/KeyData";
import AverageSessionsChart from "./charts/AverageSessions";
import { useBackendApi } from "../services/api/useBackendApi";
import "../styles/main.css";
// import { useBackendApi } from "../services/api/useMockedBackendApi";

function Main({ user }) {
  const endpoint = user;
  const { data, isLoading, error } = useBackendApi(endpoint, "firstName");
  if (error) {
    throw new Response("Not Found", { status: 404 });
  }
  return (
    <div id="main">
      <div className="Ss-main-container">
        <div className="Ss-user-infos">
          <h1>
            Bonjour{" "}
            <span className="Ss-user-first-name">{!isLoading && data}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="Ss-charts">
          <ActivityChart user={user} />
          <AverageSessionsChart user={user} />
          <PerformanceChart user={user} />
          <TodayScorechart user={user} />
          <KeyData user={user} />
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Main;
