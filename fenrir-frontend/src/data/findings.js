export default [
  {
    id: 1,
    title: "SQL Injection",
    severity: "Critical",
    cve: "CVE-2024-1234",
    description: "The /api/v1/search endpoint is vulnerable to SQL injection attacks. User input is not properly sanitized before being used in database queries.",
    location: "https://api.example.com/api/v1/search?q=test",
    status: "Open",
    discoveredAt: "2024-01-19T08:07:15Z",
    cvss: 9.8
  },
  {
    id: 2,
    title: "Cross-Site Scripting (XSS)",
    severity: "High",
    cve: "CVE-2024-2345",
    description: "Reflected XSS vulnerability in the feedback form. User input is echoed back without proper sanitization.",
    location: "https://api.example.com/api/v1/feedback",
    status: "Open",
    discoveredAt: "2024-01-19T08:10:00Z",
    cvss: 7.2
  },
  {
    id: 3,
    title: "Insecure Direct Object Reference",
    severity: "High",
    cve: null,
    description: "The API allows users to access unauthorized resources by modifying object IDs in API requests.",
    location: "https://api.example.com/api/v1/users/1234",
    status: "Open",
    discoveredAt: "2024-01-19T08:11:30Z",
    cvss: 6.5
  },
  {
    id: 4,
    title: "Information Disclosure",
    severity: "Medium",
    cve: null,
    description: "Server version and technology stack information is exposed in HTTP response headers.",
    location: "All endpoints",
    status: "Open",
    discoveredAt: "2024-01-19T08:15:20Z",
    cvss: 4.3
  },
  {
    id: 5,
    title: "Missing Security Headers",
    severity: "Medium",
    cve: null,
    description: "Missing X-Content-Type-Options, X-Frame-Options, and Content-Security-Policy headers.",
    location: "https://api.example.com/",
    status: "Open",
    discoveredAt: "2024-01-19T08:16:00Z",
    cvss: 5.3
  },
  {
    id: 6,
    title: "Rate Limiting Not Enforced",
    severity: "Low",
    cve: null,
    description: "API endpoints do not implement proper rate limiting, allowing potential brute force attacks.",
    location: "https://api.example.com/api/v1/auth",
    status: "Open",
    discoveredAt: "2024-01-19T08:18:00Z",
    cvss: 3.1
  }
];

