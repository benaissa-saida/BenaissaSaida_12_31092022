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
import "../../styles/performance.css";

function PerformanceChart({ user }) {
  const endpoint = `${user}/performance`;
  const { data } = useBackendApi(endpoint, "performance");
  console.log(data);
  //   if (error) {
  //     throw new Response("Not Found", { status: 404 });
  //   }
  return <div className="Ss-performance">Performance</div>;
}

PerformanceChart.propTypes = {
  user: PropTypes.string.isRequired,
};

export default PerformanceChart;
