import PropTypes from "prop-types";
import PerformanceChart from "./charts/Performance";
import ActivityChart from "./charts/Activity";
import TodayScorechart from "./charts/TodayScore";
import KeyData from "./charts/KeyData";
import AverageSessionsChart from "./charts/AverageSessions";
import { useBackendApi } from "../services/api/useBackendApi";
import "../styles/main.css";
import { useEffect, useState } from "react";

function Main({ user }) {
  const endpoint = user;
  const { data, isLoading } = useBackendApi(endpoint, "userInfos");
  const [todayScore, setTodayScore] = useState(0);
  const [keyData, setKeyData] = useState({
    calorieCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
    proteinCount: 0,
  });
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setFirstName(data.userInfos.firstName);
      setTodayScore(data.score || data.todayScore);
      setKeyData(data.keyData);
      document.title = `SportSee | ${firstName}`;
    }
  }, [data, isLoading, firstName]);
  return (
    <div id="main">
      <div className="Ss-main-container">
        <div className="Ss-user-infos">
          <h1>
            Bonjour <span className="Ss-user-first-name">{firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="Ss-charts">
          <div className="Ss-main-charts">
            <ActivityChart user={user} />
            <div className="Ss-performances-charts">
              <AverageSessionsChart user={user} />
              <PerformanceChart user={user} />
              <TodayScorechart data={todayScore} />
            </div>
          </div>
          <KeyData data={keyData} />
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Main;
