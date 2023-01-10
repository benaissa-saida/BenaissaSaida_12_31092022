import PropTypes from "prop-types";

function ActivityTooltip({ active, payload }) {
  return (
    active &&
    payload && (
      <div className="Ss-tooltip-container">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    )
  );
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default ActivityTooltip;
