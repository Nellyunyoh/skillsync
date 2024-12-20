import Sidebar from "../../Components/partials/Sidebar";
import Navbar from "../../Components/partials/Navbar";
import "../css/Projects.css";
import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "../../Components/ui/Button";


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
    progress: 2,
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

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

  const openDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteProject = () => {
    const updatedProjects = projects.filter((_, i) => i !== deleteIndex);
    setProjects(updatedProjects);
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteIndex(null);
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

          <Button
          variant="default"
          label={"Filter"}
         
          
        />

          

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
                  required
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={newProject.date}
                  onChange={handleChange}
                  required
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
                  <option value="Pending">In review</option>
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
                <div className="modal-buttons">
              
                <button
                  className=""
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>

                <button
                  onClick={isEditing ? saveEdit : addProject}
                  className=""
                >
                  {isEditing ? "Save Changes" : "Save "}
                </button>
                </div>
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Are you sure you want to delete this project?</h2>
                <button
                  onClick={confirmDeleteProject}
                  className="primary-button"
                >
                  Confirm
                </button>
                <button onClick={cancelDelete} className="danger-button">
                  Cancel
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

                  <div className="fad">
                    <FaRegEdit
                      onClick={() => startEdit(index)}
                      className="fa"
                    />

                    <MdDelete
                      onClick={() => openDeleteModal(index)}
                      className="md"
                    />
                  </div>
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
