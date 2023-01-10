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
import "../../styles/keyData.css";

function KeyData({ user }) {
  const endpoint = user;
  const { data } = useBackendApi(endpoint, "key-data");
  console.log(data);
  //   if (error) {
  //     throw new Response("Not Found", { status: 404 });
  //   }
  return <div className="Ss-key-data">KeyData</div>;
}

KeyData.propTypes = {
  user: PropTypes.string.isRequired,
};

export default KeyData;
