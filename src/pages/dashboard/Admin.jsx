// import React from 'react'
import { FaEdit, FaTasks, FaUserCircle } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import "././../css/Admin.css";

export const Admin = () => {
  return (
    <DashboardLayouts>
      <div>
        <div className="card-container">
          <h3 className="main-title">Today Insights</h3>
          <div className="card-wrapper">
          <div className="info-card">
              <div className="card-header">
                <div className="number">
                  <FaUserCircle className="icon-card" />
                  <span className="title"> Total Number of Mentors</span>
                </div>
              </div>
              <span className="card-detail">100</span>
            </div>

            <div className="info-cards">
              <div className="card-header">
                <div className="number">
                  <FaTasks className="icon-cards" />
                  <span className="title"> Total Number of Tasks</span>
                </div>
              </div>
              <span className="card-detail">100</span>
            </div>

            <div className="infos-card">
              <div className="card-header">
                <div className="number">
                  <MdPeopleAlt className="iconic" />
                  <span className="title"> Total Number of Interns </span>
                </div>
              </div>
              <span className="card-detail">50</span>
            </div>
          </div>
        </div>
        <section className="table-section1">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Mentor</th>
                <th>Task</th>
                <th>Intern</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-05-01</td>
                <td>Joseph Johnson</td>
                <td>HTML/CSS Course</td>
                <td>Nelly Love</td>
                <td>
                  {" "}
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Catalina Paw</td>
                <td>Javascript</td>
                <td>Jack Paul</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Anita Bih</td>
                <td>Python</td>
                <td>Peter King</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Julia Samantha</td>
                <td>React JS</td>
                <td>Joe Rena</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Anita Ole</td>
                <td>React Native</td>
                <td>Anabel Bella</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Ada Ole</td>
                <td>C/C++</td>
                <td>Antoinette Bella</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
              <tr>
                <td>2023-05-01</td>
                <td>Alissa Ole</td>
                <td>Angular JS</td>
                <td>Aneto Bella</td>
                <td>
                  <FaEdit className="edit-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </DashboardLayouts>
  );
};

export default Admin;
