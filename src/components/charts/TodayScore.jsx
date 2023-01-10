import PropTypes from "prop-types";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import { useBackendApi } from "../../services/api/useBackendApi";
import "../../styles/todayScore.css";

function TodayScorechart({ user }) {
  const endpoint = user;
  const { data } = useBackendApi(endpoint, "today-score");
  console.log(data);
  //   if (error) {
  //     throw new Response("Not Found", { status: 404 });
  //   }
  return <div className="Ss-today-score">todayScorechart</div>;
}

TodayScorechart.propTypes = {
  user: PropTypes.string.isRequired,
};

export default TodayScorechart;
