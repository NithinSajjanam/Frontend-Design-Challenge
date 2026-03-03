import AppLayout from "../components/layout/AppLayout";
import ScanTable from "../components/dashboard/ScanTable";

export default function Scans() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Scans</h1>
        <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
          New Scan
        </button>
      </div>

      <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm">
        <ScanTable />
      </div>
    </AppLayout>
  );
}

