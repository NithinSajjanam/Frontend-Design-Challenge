import AppLayout from "../components/layout/AppLayout";

const notifications = [
  {
    id: 1,
    message: "Scan completed successfully.",
    time: "10 mins ago"
  },
  {
    id: 2,
    message: "New critical vulnerability detected.",
    time: "1 hour ago"
  }
];

export default function Notifications() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

      <div className="space-y-4">
        {notifications.map(note => (
          <div
            key={note.id}
            className="bg-white dark:bg-darkSurface p-4 rounded-lg flex justify-between items-center"
          >
            <span className="text-gray-700 dark:text-gray-300">{note.message}</span>
            <span className="text-sm text-gray-500">
              {note.time}
            </span>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

