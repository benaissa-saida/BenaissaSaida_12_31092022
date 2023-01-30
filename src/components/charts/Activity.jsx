import PropTypes from "prop-types";
import ActivityTooltip from "./tooltips/Activity";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useBackendApi } from "../../services/api/useBackendApi";
import "../../styles/activity.css";

function ActivityChart({ user }) {
  const endpoint = `${user}/activity`;
  const { data, error } = useBackendApi(endpoint, "activity");
  if (error) {
    throw new Response("Not Found", { status: 404 });
  }
  return (
    <div className="Ss-activity">
      <div className="Ss-activity-container">
        <div className="Ss-activity-header">
          <h2 className="Ss-activity-title">Activité quotidienne</h2>
          <div className="Ss-activity-legend">
            <div className="Ss-activity-legend-info">
              <span className="Ss-activity-legend-icon" />
              <p className="Ss-activity-legend-text"> Poids (kg)</p>
            </div>
            <div className="Ss-activity-legend-info">
              <span className="Ss-activity-legend-icon bi-color" />
              <p className="Ss-activity-legend-text">
                {" "}
                Calories brûlées (kCal)
              </p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={data}
            margin={{ right: 50, bottom: 32, left: 50 }}
            barGap={8}
            barCategoryGap="35%"
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="1"
              stroke="#dedede"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              padding={{ left: -30, right: -30 }}
              tick={{ fontSize: 14, stroke: "#9B9EAC" }}
              dy={16}
            />
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              type="number"
              domain={["dataMin - 2", "dataMax + 1"]}
              tickCount="3"
              axisLine={false}
              orientation="right"
              tickLine={false}
              tick={{ fontSize: 14, stroke: "#9B9EAC" }}
              dx={30}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              type="number"
              domain={["dataMin - 20", "dataMax + 10"]}
              // domain={[0, "dataMax + 50"]}
              hide={true}
            />
            <Tooltip
              content={<ActivityTooltip />}
              cursor={{
                fill: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              maxBarSize={8}
              fill="#282D30"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              maxBarSize={8}
              fill="#E60000"
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

ActivityChart.propTypes = {
  user: PropTypes.string.isRequired,
};

export default ActivityChart;
