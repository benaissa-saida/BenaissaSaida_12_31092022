import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useBackendApi } from "../../services/api/useBackendApi";
import "../../styles/performance.css";

function PerformanceChart({ user }) {
  const endpoint = `${user}/performance`;
  const { data, isLoading, error } = useBackendApi(endpoint, "performance");
  const ACTIVITY_BY_KIND = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];
  let activities = [];

  if (isLoading || error) {
    for (let activity of ACTIVITY_BY_KIND) {
      activities.push({
        value: 0,
        kind: activity,
      });
    }
  } else {
    activities = data;
  }

  return (
    <div className="Ss-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={activities}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
          // outerRadius="75%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={window.innerWidth > 1340 ? { fontSize: 10 } : { fontSize: 8 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  user: PropTypes.string.isRequired,
};

export default PerformanceChart;
