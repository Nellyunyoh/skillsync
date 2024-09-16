// import React from 'react'
// import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import Button from "../../Components/ui/Button";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Html and Css",
      id: "IT147",
      description: "Youtube course",
      assigned: "Jason Jordan",
      date: "10-07-2024",
    },

    {
      name: "Html and Css",
      id: "IT147",
      description: "Youtube course",
      assigned: "Jason Jordan",
      date: "10-07-2024",
    },

    {
      name: "Html and Css",
      id: "IT147",
      description: "Youtube course",
      assigned: "Jason Jordan",
      date: "10-07-2024",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTasks, setNewTasks] = useState({
    name: "",
    id: "",
    description: "",
    assigned: "",
    date: "",
  });

  // Adding a new mentor
  const handleAddMentor = () => {
    if (
      newTasks.name &&
      newTasks.id &&
      newTasks.description &&
      newTasks.assigned &&
      newTasks.date
    ) {
      setTasks([...tasks, newTasks]);
      setShowModal(false);
      setNewTasks({ name: "", email: "", id: "", phone: "", intern: "" });
    } else {
      alert("Please fill all fields before adding!");
    }
  };

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
          <h2>Tasks List</h2>
          <Button label={"+ Add Tasks"} onClick={() => setShowModal(true)} />
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
              {tasks.map((mentor, index) => (
                <tr key={index}>
                  <td>{tasks.name}</td>
                  <td>{tasks.id}</td>
                  <td>{tasks.description}</td>
                  <td>{tasks.assigned}</td>
                  <td>{tasks.date}</td>
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
                <h3>Add Tasks</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={newTasks.name}
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Id"
                  value={newTasks.id}
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, id: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newTasks.description}
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, description: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Assigned To"
                  value={newTasks.assigned}
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, assigned: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Date"
                  value={newTasks.intern}
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, date: e.target.value })
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

export default Tasks;
