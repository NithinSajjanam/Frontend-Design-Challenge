import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AppLayout from "../components/layout/AppLayout";

export default function Settings() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <AppLayout>
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="bg-white dark:bg-darkSurface p-6 rounded-xl space-y-6">
        
        <div>
          <h2 className="font-semibold mb-2 text-lg">Appearance</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Current mode: {theme === 'dark' ? 'Dark' : 'Light'}
          </p>
          <button
            onClick={toggleTheme}
            className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Toggle Theme
          </button>
        </div>

        <div>
          <h2 className="font-semibold mb-2 text-lg">Profile</h2>
          <input
            className="input w-full md:w-1/2"
            placeholder="Full Name"
          />
          <input
            className="input w-full md:w-1/2"
            placeholder="Email"
          />
          <button className="btn-primary w-auto px-6">
            Save Changes
          </button>
        </div>

      </div>
    </AppLayout>
  );
}

