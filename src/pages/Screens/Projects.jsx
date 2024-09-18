import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import "../css/Projects.css";
import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";

const initialProjects = [
  {
    name: "Intern System",
    date: "05 August 2024",
    status: "In Progress",
    progress: 60,
    color: "#00D8FF",
  },
  {
    name: "Task System",
    date: "22 August 2024",
    status: "New",
    progress: 10,
    color: "#FF4D4D",
  },
  {
    name: "Portfolio Site",
    date: "08 July 2024",
    status: "Pending",
    progress: 80,
    color: "#0000FF",
  },
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    name: "",
    date: "",
    status: "",
    progress: 0,
    color: "#00D8FF",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Handle form input for adding a new project
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  
  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      name: "",
      date: "",
      status: "",
      progress: 0,
      color: "#00D8FF",
    });
    setIsModalOpen(false); 
  };

  // Start editing a project
  const startEdit = (index) => {
    setIsEditing(true);
    setCurrentProjectIndex(index);
    setNewProject(projects[index]);
    setIsModalOpen(true);
  };

  
  const saveEdit = () => {
    const updatedProjects = [...projects];
    updatedProjects[currentProjectIndex] = newProject;
    setProjects(updatedProjects);
    setIsEditing(false);
    setNewProject({
      name: "",
      date: "",
      status: "",
      progress: 0,
      color: "#00D8FF",
    });
    setIsModalOpen(false); 
  };

  
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="projects-container">
      
      <Sidebar />

    
      <div className="content-area">
        <Navbar />
        <div className="project-content">
          <h1>Projects</h1>
          <p>
            Welcome to the projects page. Here you can add, view, and edit
            projects.
          </p>

          
          <button
            className="add-project-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Project
          </button>

        
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>{isEditing ? "Edit Project" : "Add New Project"}</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  value={newProject.name}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={newProject.date}
                  onChange={handleChange}
                />
                <select
                  name="status"
                  value={newProject.status}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
                <input
                  type="number"
                  name="progress"
                  placeholder="Progress (%)"
                  value={newProject.progress}
                  onChange={handleChange}
                  min="0"
                  max="100"
                />
                <button
                  onClick={isEditing ? saveEdit : addProject}
                  className="save-modal"
                >
                  {isEditing ? "Save Changes" : "Add Project"}
                </button>
                <button
                  className="close-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.name}</h3>
                <div className="date-status">
                  <span className="date">
                    {" "}
                    <FaCalendarDays />
                    {project.date}
                  </span>
                  <span
                    className={`status ${project.status
                      .replace(" ", "-")
                      .toLowerCase()}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor: project.color,
                    }}
                  ></div>
                </div>
                <div className="progress-info">
                  <span>{project.progress}%</span>
                  <button onClick={() => startEdit(index)}>Edit</button>
                  <button
                    onClick={() => deleteProject(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
