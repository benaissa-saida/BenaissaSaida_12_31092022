import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useBackendApi } from "../../services/api/useBackendApi";
import "../../styles/averageSessions.css";
import AverageSessionsTooltip from "./tooltips/AverageSessions";

function AverageSessionsChart({ user }) {
  const endpoint = `${user}/average-sessions`;
  const { data } = useBackendApi(endpoint, "average-sessions");
  return (
    <div className="Ss-average-sessions">
      <h2 className="Ss-average-sessions-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            type="category"
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.7)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Tooltip
            content={<AverageSessionsTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
          <Line
            type="monotone"
            padding={{ left: 10 }}
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2, strokeWidth: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsChart.propTypes = {
  user: PropTypes.string.isRequired,
};

export default AverageSessionsChart;
