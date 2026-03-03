import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import CircularProgress from "../components/ui/CircularProgress";
import SeverityBadge from "../components/ui/SeverityBadge";
import StatusChip from "../components/ui/StatusChip";
import scans from "../data/scans";
import { activityLogs, verificationLogs } from "../data/logs";
import findings from "../data/findings";

export default function ScanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activity");
  
  const scan = scans.find(s => s.id === parseInt(id)) || scans[0];

  const steps = [
    { name: "Reconnaissance", status: "completed" },
    { name: "Port Scan", status: "completed" },
    { name: "Service Detection", status: "completed" },
    { name: "Vulnerability Scan", status: scan.status === "Running" ? "running" : "completed" },
    { name: "Verification", status: scan.status === "Running" ? "pending" : "completed" },
    { name: "Reporting", status: scan.status === "Completed" ? "completed" : "pending" }
  ];

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit' 
    });
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-darkSurfaceHover transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{scan.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{scan.target}</p>
          </div>
          <StatusChip status={scan.status} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress & Steps */}
          <div className="space-y-6">
            {/* Circular Progress */}
            <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Scan Progress</h2>
              <div className="flex justify-center">
                <CircularProgress percent={scan.progress} />
              </div>
            </div>

            {/* Step Tracker */}
            <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Scan Steps</h2>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-green-500' :
                      step.status === 'running' ? 'bg-blue-500 animate-pulse' :
                      'bg-gray-300 dark:bg-gray-700'
                    }`}>
                      {step.status === 'completed' ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : step.status === 'running' ? (
                        <svg className="w-4 h-4 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      ) : (
                        <span className="text-white text-xs">{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-sm ${
                      step.status === 'completed' || step.status === 'running'
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details, Logs, Findings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metadata Row */}
            <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Scan Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                  <p className="font-medium text-gray-900 dark:text-white">{scan.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Target</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm truncate">{scan.target}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Started</p>
                  <p className="font-medium text-gray-900 dark:text-white">{scan.startTime ? new Date(scan.startTime).toLocaleDateString() : 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {scan.startTime && scan.endTime 
                      ? Math.round((new Date(scan.endTime) - new Date(scan.startTime)) / 60000) + ' min'
                      : scan.status === 'Running' ? 'In progress...' : 'N/A'}
                  </p>
                </div>
              </div>
              
              {/* Vulnerabilities Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Vulnerabilities Found</p>
                <div className="flex gap-3 flex-wrap">
                  <SeverityBadge type="Critical" value={scan.critical} />
                  <SeverityBadge type="High" value={scan.high} />
                  <SeverityBadge type="Medium" value={scan.medium} />
                  <SeverityBadge type="Low" value={scan.low} />
                </div>
              </div>
            </div>

            {/* Console Tabs */}
            <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "activity"
                      ? "border-accent text-accent"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  Activity Log
                </button>
                <button
                  onClick={() => setActiveTab("verification")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "verification"
                      ? "border-accent text-accent"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  Verification Loops
                </button>
                <button
                  onClick={() => setActiveTab("findings")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "findings"
                      ? "border-accent text-accent"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  Findings ({findings.length})
                </button>
              </div>

              <div className="p-4 max-h-96 overflow-y-auto font-mono text-sm">
                {activeTab === "activity" && (
                  <div className="space-y-2">
                    {activityLogs.map((log) => (
                      <div key={log.id} className="flex gap-3">
                        <span className="text-gray-400 shrink-0">[{formatTimestamp(log.timestamp)}]</span>
                        <span className={`uppercase text-xs font-bold ${getLogLevelColor(log.level)}`}>
                          {log.level}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{log.message}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "verification" && (
                  <div className="space-y-2">
                    {verificationLogs.map((log) => (
                      <div key={log.id} className="flex gap-3 items-center">
                        <span className="text-gray-400 shrink-0">[{formatTimestamp(log.timestamp)}]</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          log.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          log.status === 'testing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {log.status}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{log.message}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "findings" && (
                  <div className="space-y-4">
                    {findings.map((finding) => (
                      <div key={finding.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <SeverityBadge type={finding.severity} value={0} showCount={false} />
                              {finding.cve && (
                                <span className="text-xs font-mono text-gray-500">{finding.cve}</span>
                              )}
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{finding.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{finding.description}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 font-mono">{finding.location}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{finding.cvss}</div>
                            <div className="text-xs text-gray-500">CVSS</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${scan.status === 'Running' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {scan.status === 'Running' ? 'Scan in progress...' : 'Scan completed'}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {scan.status === 'Running' ? (
                <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-darkSurfaceHover rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Pause Scan
                </button>
              ) : (
                <button className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:opacity-90 transition-colors">
                  View Report
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

