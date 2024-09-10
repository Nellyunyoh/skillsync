// import React from 'react'
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "./Mentors.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const Interns = () => {
  // Modal open/close functionality
//   const modal = document.getElementById("myModal");
//   const openModalBtn = document.getElementById("openModalBtn");
//   const closeBtn = document.getElementsByClassName("close")[0];

//   openModalBtn.onclick = function () {
//     modal.style.display = "block";
//   };

//   closeBtn.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };

//   // Form handling and table actions
//   const userForm = document.getElementById("user-form");
//   const userTable = document.querySelector("#userTable tbody");

//   let currentRow = null;

//   userForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const userID = document.getElementById("userID").value;
//     const phone = document.getElementById("phone").value;
//     const intern = document.getElementById("intern").value;

//     if (currentRow) {
//       updateRow(currentRow, name, email, userID, phone, intern);
//       currentRow = null;
//     } else {
//       addRow(name, email, userID, phone, intern);
//     }

//     modal.style.display = "none";
//     userForm.reset();
//   });

//   function addRow(name, email, userID, phone, intern) {
//     const newRow = userTable.insertRow();
//     newRow.innerHTML = `
//         <td>${name}</td>
//         <td>${email}</td>
//         <td>${userID}</td>
//         <td>${phone}</td>
//         <td>${intern}</td>
//         <td>
//            <MdEdit  />
//               <MdDelete />
//         </td>
//     `;

//     newRow.querySelector(".editBtn").addEventListener("click", function () {
//       currentRow = newRow;
//       document.getElementById("name").value = name;
//       document.getElementById("email").value = email;
//       document.getElementById("userID").value = userID;
//       document.getElementById("phone").value = phone;
//       document.getElementById("intern").value = intern;
//       modal.style.display = "block";
//     });

//     newRow.querySelector(".deleteBtn").addEventListener("click", function () {
//       userTable.deleteRow(newRow.rowIndex - 1);
//     });
//   }

//   function updateRow(row, name, email, userID, phone, intern) {
//     row.cells[0].innerText = name;
//     row.cells[1].innerText = email;
//     row.cells[2].innerText = userID;
//     row.cells[3].innerText = phone;
//     row.cells[4].innerText = intern;
//   }

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1>Intern List</h1>
        <button id="openModalBtn" className="Add">
          + Add Intern
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Fill in the form</h2>
            <form id="user-form" className="form">
              <div>
                <label htmlFor="name">Name:</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="userID">User ID:</label>
                <input
                  type="text"
                  id="userID"
                  name="userID"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-control"
                  required
                />
              </div>

              <div>
                <label htmlFor="intern">Intern:</label>
                <input
                  type="text"
                  id="intern"
                  name="intern"
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
              <th>Name</th>
              <th>Email</th>
              <th>User ID</th>
              <th>Phone Number</th>
              <th>Mentor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joseph Johnson</td>
              <td>josephjohnson@gmail.com</td>
              <td>MMS145</td>
              <td>+237 654894694</td>
              <td>Mary Mag</td>
              <td>
                <MdEdit className="editBtn" />
                <MdDelete className="deleteBtn" />
              </td>
            </tr>

            <tr>
              <td>John Nasty</td>
              <td>johnnasty@gmail.com</td>
              <td>MMS149</td>
              <td>+237 654678975</td>
              <td>Martha Peace</td>
              <td>
                <MdEdit className="editBtn" />
                <MdDelete className="deleteBtn" />
              </td>
            </tr>

            <td>Claire Anna</td>
            <td>claireanna@gmail.com</td>
            <td>MMS246</td>
            <td>+237 659087654</td>
            <td>Alfred Serge</td>
            <td>
              <MdEdit className="editBtn" />
              <MdDelete className="deleteBtn" />
            </td>

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Interns;
