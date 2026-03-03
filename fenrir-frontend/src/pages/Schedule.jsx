import AppLayout from "../components/layout/AppLayout";

const scheduled = [
  {
    id: 1,
    name: "Weekly Web App Scan",
    frequency: "Weekly",
    nextRun: "March 10, 2026"
  },
  {
    id: 2,
    name: "IoT Devices Scan",
    frequency: "Monthly",
    nextRun: "April 1, 2026"
  }
];

export default function Schedule() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-semibold mb-6">Schedule</h1>

      <div className="space-y-4">
        {scheduled.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm"
          >
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Frequency: {item.frequency}
            </p>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              Next Run: {item.nextRun}
            </p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

