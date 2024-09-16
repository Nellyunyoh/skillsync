// import React from 'react'
// import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import Button from "../../Components/ui/Button";

const Interns = () => {
  const [interns, setInterns] = useState([
    {
      name: "Joseph Johnson",
      email: "josephjohnson@gmail.com",
      id: "MMS145",
      phone: "+237 654894694",
      intern: "Mary Mag",
    },
    {
      name: "John Nasty",
      email: "johnnasty@gmail.com",
      id: "MMS149",
      phone: "+237 654678975",
      intern: "Martha Peace",
    },
    {
      name: "Claire Anna",
      email: "claireanna@gmail.com",
      id: "MMS246",
      phone: "+237 659087654",
      intern: "Alfred Serge",
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
      setInterns([...interns, newMentor]);
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
          <h2>Intern List</h2>
          <Button label="+ Add Intern" onClick={() => setShowModal(true)} />

          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>User ID</th>
                <th>Phone Number</th>
                <th>Intern</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((mentor, index) => (
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
                <h3>Add Mentor</h3>
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
                  placeholder="Email"
                  value={newMentor.email}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="User ID"
                  value={newMentor.id}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, id: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={newMentor.phone}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Intern"
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

export default Interns;
