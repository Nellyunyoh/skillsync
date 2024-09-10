// import React from 'react'
import Sidebar from "../Components/sidebar";
import Navbar from "../components/Navbar";
import './Projects.css'
export const Projects = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="header">
          <h1>Projects</h1>
          <p>
            Welcome to the projects page, here you can see 2 examples of
            projects, you can add as many projects as you like and there are
            many settings for each project (project date, links, tasks, files,
            comments...). If you have ideas for new features for this, please
            let us know.
          </p>
        </div>

        <div className="search-sort">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="sort-options">
            <button className="sort-btn">Sort By Date</button>
            <button className="sort-btn">Sort By Status</button>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Projects;
