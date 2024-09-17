import "../css/mentors.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import Button from "../../Components/ui/Button";

const Mentors = () => {
  const [mentors, setMentors] = useState([
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
  ]);

  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [newMentor, setNewMentor] = useState({
    name: "",
    email: "",
    id: "",
    phone: "",
    intern: "",
  });

  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editIndex, setEditIndex] = useState(null); // Track the index of mentor being edited

  // Add or Edit mentor
  const handleAddMentor = () => {
    if (
      newMentor.name &&
      newMentor.email &&
      newMentor.id &&
      newMentor.phone &&
      newMentor.intern
    ) {
      if (isEditing) {
        // Editing mentor
        const updatedMentors = [...mentors];
        updatedMentors[editIndex] = newMentor;
        setMentors(updatedMentors);
        setIsEditing(false); // Reset to add mode
      } else {
        // Adding a new mentor
        setMentors([...mentors, newMentor]);
      }

      setShowModal(false);
      setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" });
    } else {
      alert("Please fill all fields before submitting!");
    }
  };

  // Edit mentor handler
  const handleEditMentor = (index) => {
    setNewMentor(mentors[index]); // Pre-fill the form with mentor data
    setEditIndex(index); // Set the index of the mentor being edited
    setIsEditing(true); // Switch to edit mode
    setShowModal(true); // Show the modal
  };

  // Delete mentor
  const handleDeleteMentor = (index) => {
    const updatedMentors = mentors.filter((_, i) => i !== index);
    setMentors(updatedMentors);
  };

  // Close modal if clicked outside modal content
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setIsEditing(false); // Reset editing state
      setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" });
    }
  };

  return (
    <div className="console">
      <Sidebar />
      <div className="object">
        <Navbar />
        <div className="mentor-list">
          <h2>Mentor List</h2>
          <Button
            label={"+ Add Mentor"}
            onClick={() => {
              setShowModal(true);
              setIsEditing(false); // Ensure modal is for adding
              setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" }); // Reset form
            }}
            variant="primary"
          />

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
                      onClick={() => handleEditMentor(index)}
                    />
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => handleDeleteMentor(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content">
                <h3>{isEditing ? "Edit Mentor" : "Add Mentor"}</h3>
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
                  <button onClick={handleAddMentor}>
                    {isEditing ? "Update" : "Add"}
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setIsEditing(false);
                      setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" });
                    }}
                  >
                    Cancel
                  </button>
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
