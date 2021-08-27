const QualitieBadge = ({ quality }) => {
  const { name, color } = quality;
  return <span className={`badge bg-${color} m-1`}>{name}</span>;
};

export default QualitieBadge;
