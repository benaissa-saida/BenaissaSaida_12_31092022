import PropTypes from "prop-types";

function AverageSessionsTooltip({ active, payload }) {
  return (
    active &&
    payload && (
      <div className="Ss-average-sessions-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  );
}

AverageSessionsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default AverageSessionsTooltip;
