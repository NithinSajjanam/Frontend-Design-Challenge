export default function SeverityBadge({ type, value, showCount = true }) {
  const colors = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500"
  };

  return (
    <span className={`${colors[type] || 'bg-gray-500'} text-white px-2 py-1 rounded-full text-xs font-medium`}>
      {showCount && value > 0 ? `${value} ${type}` : type}
    </span>
  );
}

