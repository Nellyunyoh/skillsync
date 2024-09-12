// import React from 'react'
import Sidebar from '../../Components/Screens/Sidebar'
import Navbar from '../../Components/Screens/Navbar';
import '../css/Tasks.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export const Tasks = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className='main-content'>
            <Navbar />
            <h1>Task List</h1> 
        <button id="openModalBtn" className="Add">
          + Add Task
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Fill in the form</h2>
            <form id="user-form" className="form">
              <div>
                <label htmlFor="name">TaskName:</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="id">Task ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="assigned">Assigned To</label>
                <input
                  type="text"
                  id="assigned"
                  name="assigned"
                  className="input-control"
                  required
                />
              </div>


              <button type="submit" id="saveBtn" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <table id="userTable">
          <thead>
            <tr>
              <th>TaskName</th>
              <th>Task ID</th>
              <th>Description</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Login Screen</td>
              <td>114</td>
              <td>Build a login page</td>
              <td>Joseph Prince</td>             
              <td>
                <MdEdit className="editBtn" />
                <MdDelete className="deleteBtn" />
              </td>
            </tr>

            <tr>
              <td>Intern screen</td>
              <td>184</td>
              <td>Develop the intern screen</td>
              <td>Mary Peace</td>
              <td>
                <MdEdit className="editBtn" />
                <MdDelete className="deleteBtn" />
              </td>
            </tr>

            <td>Mentors Screen</td>
            <td>240</td>
            <td>Build the mentor screen</td>
            <td>Eddy Michael</td>
            <td>
              <MdEdit className="editBtn" />
              <MdDelete className="deleteBtn" />
            </td>

            <tr></tr>
          </tbody>
        </table>


        </div>


    </div>
  )
}

export default Tasks;