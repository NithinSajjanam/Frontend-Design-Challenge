import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

const projects = [
  { id: 1, name: "Project X", owner: "Nammagiri", scans: 100 },
  { id: 2, name: "Internal Infra", owner: "Admin", scans: 42 }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Owner: {project.owner}
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Total Scans: {project.scans}
            </p>
            <button 
              onClick={() => navigate('/scans')}
              className="mt-4 bg-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition"
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

