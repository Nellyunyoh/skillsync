/* eslint-disable no-undef */
// import React from 'react'
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import "../css/Evaluation.css";
import Button from "../../Components/ui/Button";

import { useState } from "react";

export const Evaluation = () => {
  const [formData, setFormData] = useState({
    name: "",
    problemSolving: "Excellent",
    programmingSkills: "Excellent",
    debugging: "Excellent",
    codeQuality: "Excellent",
    timeManagement: "Excellent",
    teamwork: "Excellent",
    innovation: "Excellent",
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({
      name: "",
      problemSolving: "Excellent",
      programmingSkills: "Excellent",
      debugging: "Excellent",
      codeQuality: "Excellent",
      timeManagement: "Excellent",
      teamwork: "Excellent",
      innovation: "Excellent",
    });
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content">
          <div className="form-container">
            <h2>Tech Intern Evaluation Form</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="holder">
                Student Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="problemSolving" className="holder">
                Problem Solving:
              </label>
              <select
                id="problemSolving"
                name="problemSolving"
                value={formData.problemSolving}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="programmingSkills" className="holder">
                Programming Skills:
              </label>
              <select
                id="programmingSkills"
                name="programmingSkills"
                value={formData.programmingSkills}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="debugging" className="holder">
                Debugging:
              </label>
              <select
                id="debugging"
                name="debugging"
                value={formData.debugging}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="codeQuality" className="holder">
                Code Quality:
              </label>
              <select
                id="codeQuality"
                name="codeQuality"
                value={formData.codeQuality}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="timeManagement" className="holder">
                Time Management:
              </label>
              <select
                id="timeManagement"
                name="timeManagement"
                value={formData.timeManagement}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="teamwork" className="holder">
                Teamwork:
              </label>
              <select
                id="teamwork"
                name="teamwork"
                value={formData.teamwork}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <label htmlFor="innovation" className="holder">
                Innovation:
              </label>
              <select
                id="innovation"
                name="innovation"
                value={formData.innovation}
                onChange={handleChange}
                required
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Satisfactory">Satisfactory</option>
                <option value="Poor">Poor</option>
              </select>

              <Button label={"Submit"} variant="primary" />
            </form>
          </div>

          <div className="table-section1">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Problem Solving</th>
                  <th>Programming Skills</th>
                  <th>Debugging</th>
                  <th>Code Quality</th>
                  <th>Time Management</th>
                  <th>Teamwork</th>
                  <th>Innovation</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={index}>
                    <td>{submission.name}</td>
                    <td>{submission.problemSolving}</td>
                    <td>{submission.programmingSkills}</td>
                    <td>{submission.debugging}</td>
                    <td>{submission.codeQuality}</td>
                    <td>{submission.timeManagement}</td>
                    <td>{submission.teamwork}</td>
                    <td>{submission.innovation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
