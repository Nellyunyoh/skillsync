// import React from 'react'
// import React, { useState } from 'react';
import "../css/Mentors.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import Button from "../../Components/ui/Button";

const Mentors = () => {
  const [mentors, setMentors] = useState([
    {
      name: "Html and Css",
      email: "147",
      id: "Html and Css course",
      phone: "Mary Peace",
      intern: "16-09-2024",
    },
    {
      name: "React js",
      email: "346",
      id: "React JS course",
      phone: "John Joseph",
      intern: "10-09-2023",
    },
    {
      name: "Javascript ",
      email: "267",
      id: "Javascript DOM",
      phone: "Alfred Junior",
      intern: "11-08-2024",
    },
  ]);

  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [newMentor, setNewMentor] = useState({
    name: "",
    email: "",
    id: "",
    phone: "",
    intern: "",
  });

  // Adding a new mentor
  const handleAddMentor = () => {
    if (
      newMentor.name &&
      newMentor.email &&
      newMentor.id &&
      newMentor.phone &&
      newMentor.intern
    ) {
      setMentors([...mentors, newMentor]);
      setShowModal(false);
      setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" });
    } else {
      alert("Please fill all fields before adding!");
    }
  };

  // Close modal if clicked outside modal content
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
    }
  };

  return (
    <div className="console">
      <Sidebar />
      <div className="object">
        <Navbar />
        <div className="mentor-list">
          <h2>Task List</h2>
          <Button label={"+ Add Task"} onClick={() => setShowModal(true)} variant="primary" />

          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Description</th>
                <th>Assigned to</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((mentor, index) => (
                <tr key={index}>
                  <td>{mentor.name}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.id}</td>
                  <td>{mentor.phone}</td>
                  <td>{mentor.intern}</td>
                  <td>
                    <FaEdit
                      className="edit-icon"
                      onClick={() => alert("Edit functionality coming soon!")}
                    />
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => alert("Delete functionality coming soon!")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content">
                <h3>Add Task</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={newMentor.name}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="ID"
                  value={newMentor.email}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newMentor.id}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, id: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Assigned To"
                  value={newMentor.phone}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Date"
                  value={newMentor.intern}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, intern: e.target.value })
                  }
                />
                <div className="modal-buttons">
                  <button onClick={handleAddMentor}>Add</button>
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
