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

export default AverageSessionsTooltip;
