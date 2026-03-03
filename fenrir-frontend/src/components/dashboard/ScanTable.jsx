import { useNavigate } from "react-router-dom";
import scans from "../../data/scans";
import SeverityBadge from "../ui/SeverityBadge";
import StatusChip from "../ui/StatusChip";

export default function ScanTable() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Scan Name</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Type</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Progress</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Vulnerabilities</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Last Scan</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => navigate(`/scan/${scan.id}`)}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-darkSurfaceHover cursor-pointer transition-colors"
            >
              <td className="py-4 px-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{scan.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{scan.target}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{scan.type}</td>
              <td className="py-4 px-4">
                <StatusChip status={scan.status} />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full" 
                      style={{ width: `${scan.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{scan.progress}%</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex gap-1 flex-wrap">
                  {scan.critical > 0 && <SeverityBadge type="Critical" value={scan.critical} />}
                  {scan.high > 0 && <SeverityBadge type="High" value={scan.high} />}
                  {scan.medium > 0 && <SeverityBadge type="Medium" value={scan.medium} />}
                  {scan.low > 0 && <SeverityBadge type="Low" value={scan.low} />}
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

