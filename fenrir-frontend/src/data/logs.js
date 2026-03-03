export const activityLogs = [
  {
    id: 1,
    timestamp: "2024-01-19T08:00:15Z",
    level: "info",
    message: "Scan initiated for target: https://api.example.com"
  },
  {
    id: 2,
    timestamp: "2024-01-19T08:00:45Z",
    level: "info",
    message: "Starting reconnaissance phase"
  },
  {
    id: 3,
    timestamp: "2024-01-19T08:01:20Z",
    level: "info",
    message: "Port scan completed: 45 ports discovered"
  },
  {
    id: 4,
    timestamp: "2024-01-19T08:02:10Z",
    level: "warning",
    message: "Rate limit detected on /api/v1/users endpoint"
  },
  {
    id: 5,
    timestamp: "2024-01-19T08:03:05Z",
    level: "info",
    message: "Service fingerprinting: identified nginx 1.21.0"
  },
  {
    id: 6,
    timestamp: "2024-01-19T08:05:30Z",
    level: "info",
    message: "Vulnerability scanning started"
  },
  {
    id: 7,
    timestamp: "2024-01-19T08:07:15Z",
    level: "critical",
    message: "SQL Injection vulnerability detected in /api/v1/search"
  },
  {
    id: 8,
    timestamp: "2024-01-19T08:10:00Z",
    level: "high",
    message: "Cross-Site Scripting (XSS) found in /api/v1/feedback"
  },
  {
    id: 9,
    timestamp: "2024-01-19T08:12:45Z",
    level: "info",
    message: "Authentication bypass check completed"
  },
  {
    id: 10,
    timestamp: "2024-01-19T08:15:20Z",
    level: "medium",
    message: "Information disclosure: Server version exposed in headers"
  }
];

export const verificationLogs = [
  {
    id: 1,
    timestamp: "2024-01-19T08:16:00Z",
    message: "Verifying SQL Injection vulnerability",
    status: "pending"
  },
  {
    id: 2,
    timestamp: "2024-01-19T08:16:30Z",
    message: "Sending payload: ' OR '1'='1",
    status: "testing"
  },
  {
    id: 3,
    timestamp: "2024-01-19T08:16:45Z",
    message: "Database error detected: MySQL syntax error",
    status: "confirmed"
  },
  {
    id: 4,
    timestamp: "2024-01-19T08:17:00Z",
    message: "Verifying XSS vulnerability",
    status: "pending"
  },
  {
    id: 5,
    timestamp: "2024-01-19T08:17:30Z",
    message: "Sending payload: <script>alert('XSS')</script>",
    status: "testing"
  },
  {
    id: 6,
    timestamp: "2024-01-19T08:17:45Z",
    message: "Payload executed in response",
    status: "confirmed"
  }
];

