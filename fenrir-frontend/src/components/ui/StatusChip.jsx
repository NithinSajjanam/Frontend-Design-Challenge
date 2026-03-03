export default function StatusChip({ status }) {
  const statusConfig = {
    Completed: { bg: "bg-green-100", text: "text-green-800", dot: "bg-green-500" },
    Running: { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" },
    Queued: { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" },
    Failed: { bg: "bg-red-100", text: "text-red-800", dot: "bg-red-500" },
    Paused: { bg: "bg-yellow-100", text: "text-yellow-800", dot: "bg-yellow-500" }
  };

  const config = statusConfig[status] || statusConfig.Queued;

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <span className={`w-2 h-2 rounded-full ${config.dot} ${status === 'Running' ? 'animate-pulse' : ''}`}></span>
      {status}
    </span>
  );
}

