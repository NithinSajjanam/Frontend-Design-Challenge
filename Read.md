Fenrir Security – Frontend Design Challenge

Hi,

This repository contains my submission for the Frontend Design Challenge for Fenrir Security Private Limited.

The goal was to recreate three product screens from the provided design reference and turn them into a fully interactive React application with dark and light theme support.

🚀 Live Demo

Live Deployment URL:
<Add your Vercel or Netlify link here>

GitHub Repository:
<Add your GitHub repo link here>

Loom Walkthrough (under 8 minutes):
<Add Loom link here>

🛠 Tech Stack

React (Vite)

React Router DOM

Tailwind CSS

Context API (for theme handling)

Local mock JSON data (no backend)

I chose Vite because it’s fast and simple to set up. Tailwind helped me match spacing and colors precisely according to the design reference.

📂 Implemented Screens
1. Login Page

Split layout

Gradient left section with product info

Form card on right

Social login buttons (UI only)

Terms checkbox

On submit → navigates to Dashboard

Fully supports dark and light mode

2. Dashboard (Scan List Overview)

Sidebar navigation

Severity counters (Critical, High, Medium, Low)

Scan table with:

Scan name

Type

Status chip

Progress

Vulnerability counts

Last scan time

Search input (filters scans)

New Scan button (mock interaction)

Clicking a scan row opens the Scan Detail screen

3. Active Scan Detail

Circular progress indicator

Step tracker (Spidering → Reporting)

Metadata section

Live console with tabs:

Activity Log

Verification Loops

Finding log panel with severity badges

Bottom status bar with agent stats

All logs and findings are populated using mock data and structured to feel realistic.

🎨 Theme System (Dark / Light Mode)

Global theme toggle using React Context

Dark mode is not just inverted colors

Separate background, surface, border and text colors for both modes

Changes apply instantly across all screens

🔁 Interactivity

Navigation between all screens

Table row click → opens scan detail

Tabs switch content properly

Buttons respond with UI state change

Search filters scan list

Theme toggle works globally

Responsive sidebar on smaller screens

📱 Responsiveness

Desktop: 1280px and above

Mobile: ~375px

Sidebar collapses on smaller screens.
Tables are scrollable horizontally when needed.

I tested layout on both desktop and mobile widths to ensure spacing stays consistent.

📊 Mock Data

All data is stored locally inside /src/data/.

There is no backend integration as per the instructions.

Mock data includes:

Scan entries

Console logs

Vulnerability findings

Notification items

Project list

📦 How to Run Locally
npm install
npm run dev

Build for production:

npm run build
🧠 Approach

Before writing code, I carefully studied the design reference to understand spacing, hierarchy, and layout consistency.

I focused on:

Reusable components (badges, chips, buttons)

Clean layout structure

Maintaining visual consistency between screens

Keeping components modular and readable

I avoided using any dashboard templates and built everything from scratch.

⚠️ Known Limitations

No real authentication (mock login only)

Some animations are minimal

No real API integration

These were outside the scope of the task but could easily be added in a production scenario.

📌 Final Notes

This was a really interesting challenge and I enjoyed recreating a professional B2B SaaS interface from a static reference.

If anything needs clarification, I’m happy to explain further in the Loom video or in discussion.

Thank you for the opportunity.

—
Nityanandh