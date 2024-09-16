// import React from 'react'
import Sidebar from '../../Components/Screens/Sidebar';
import Navbar from "../../Components/Screens/Navbar";
// import Usermanagement from '../../Components/Screens/Usermanagement';
import "././../css/Admin.css";
import { FaUserCircle } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export const Admin = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="card-container">
          <h3 className="main-title">Today Insights</h3>
          <div className="card-wrapper">
            <div className="info-card">
              <div className="card-header">
                <div className="number">
                  <FaUserCircle className="icon" />
                  <span className="title"> Total Number of Mentors</span>
                  <span className="card-detail">20</span>
                </div>
              </div>
            </div>

            <div className="info-card tranquil-blue">
              <div className="card-header">
                <div className="number">
                  <FaTasks className="icon" />
                  <span className="title"> Total Number of Tasks</span>
                </div>
              </div>
              <span className="card-detail">100</span>
            </div>

            <div className="info-card fresh-mint">
              <div className="card-header">
                <div className="number">
                  <MdPeopleAlt className="icon" />
                  <span className="title"> Total Number of Interns </span>
                </div>
              </div>
              <span className="card-details">50</span>
            </div>
          </div>
        </div>
        <section className="table-section1">
        {/* <div className="table-header">
          <button className="download">Download</button>
          <button className="filter">Filter</button>
        </div> */}
        <table>
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
              <td> <FaEdit className="edit-icon" /></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Catalina Paw</td>
              <td>Javascript</td>
              <td>Jack Paul</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Anita Bih</td>
              <td>Python</td>
              <td>Peter King</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Julia Samantha</td>
              <td>React JS</td>
              <td>Joe Rena</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Anita Ole</td>
              <td>React Native</td>
              <td>Anabel Bella</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Ada Ole</td>
              <td>C/C++</td>
              <td>Antoinette Bella</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
            <tr>
              <td>2023-05-01</td>
              <td>Alissa Ole</td>
              <td>Angular JS</td>
              <td>Aneto Bella</td>
              <td><FaEdit className="edit-icon"/></td>
            </tr>
          </tbody>
        </table>
      </section>
      </div>

     
    </div>
  );
};


export default Admin;
