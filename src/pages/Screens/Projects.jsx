import Sidebar from '../../Components/Screens/Sidebar'
import Navbar from '../../Components/Screens/Navbar'
// import '../css/Projects.css'

 
const ProjectCard = ({ title, date, status, progress, color }) => {
  return (

    <div className="project-card">
      <h3>{title}</h3>
      <div className="project-date">
        <i className="fa fa-calendar" aria-hidden="true"></i> {date}
      </div>
      <div className={`status ${status.toLowerCase().replace(' ', '-')}`}>
        {status}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%`, backgroundColor: color }}></div>
      </div>
      <p className="progress-percentage">{progress}%</p>
      <a href="#" className="view-link">View</a>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    { title: 'Intern System', date: '05 August 2024', status: 'In Progress', progress: 60, color: '#00c8e8' },
    { title: 'Task System', date: '22 August 2024', status: 'New', progress: 10, color: '#ff4d4d' },
    { title: 'Portfolio Site', date: '08 July 2024', status: 'Pending', progress: 80, color: '#0000ff' },
    { title: 'Quiz App', date: '01 July 2024', status: 'Pending', progress: 40, color: '#ff9900' },
    { title: 'Todo List', date: '17 August 2024', status: 'In Progress', progress: 60, color: '#00c8e8' },
    { title: 'Calculator Project', date: '10 July 2024', status: 'Completed', progress: 99, color: '#800080' },
  ];

  return (
    <div className='sector'>
<Sidebar />
<div>
<Navbar />

    <div className="projects-page">
      <h1>Projects</h1>
      <p className="description">
        Welcome to the projects page, here you can see examples of projects. You can add as many projects as you like and there are many settings for each project (project date, links, tasks, files, comments...).
      </p>
      <div className="search-and-sort">
        <input type="text" className="search" placeholder="Search..." />
        {/* <button className="sort-btn">Sort By Date</button>
        <button className="sort-btn">Sort By Status</button> */}
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProjectsPage;
