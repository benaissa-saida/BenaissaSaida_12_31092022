import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import "../../styles/todayScore.css";

function TodayScorechart({ data }) {
  const score = [
    { value: data, fill: "#FF0000" },
    { value: 1 - data, fill: "transparent" },
  ];
  return (
    <div className="Ss-today-score">
      <h2 className="Ss-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={[{ name: "circle", value: 100 }]}
            dataKey="value"
            outerRadius={70}
            fill="#fff"
          />
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            strokeOpacity={0}
            cornerRadius={10}
          >
            {score.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={entry.fill} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="Ss-score-label">
        <span>
          {score[0].value * 100}% <br />
        </span>
        de votre
        <br /> objectif
      </p>
    </div>
  );
}

TodayScorechart.propTypes = {
  data: PropTypes.number.isRequired,
};

export default TodayScorechart;
