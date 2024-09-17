import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import Button from "../../Components/ui/Button";
import { MdOutlineMoreHoriz } from "react-icons/md";
import '../css/Interns.css'

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
  ]);

  const [showModal, setShowModal] = useState(false); // Modal for add/edit intern
  const [showMoreModal, setShowMoreModal] = useState(false); // Modal for more options
  const [newMentor, setNewMentor] = useState({
    name: "",
    email: "",
    id: "",
    phone: "",
    intern: "",
  });
  const [selectedIntern, setSelectedIntern] = useState(null); // Selected intern for more options
  const [editingIndex, setEditingIndex] = useState(null); // Index of the intern being edited

  // Adding a new intern or updating an existing one
  const handleAddMentor = () => {
    if (
      newMentor.name &&
      newMentor.email &&
      newMentor.id &&
      newMentor.phone &&
      newMentor.intern
    ) {
      if (editingIndex !== null) {
        // Update existing intern
        const updatedInterns = [...interns];
        updatedInterns[editingIndex] = newMentor;
        setInterns(updatedInterns);
        setEditingIndex(null);
      } else {
        // Add new intern
        setInterns([...interns, newMentor]);
      }
      setShowModal(false);
      setNewMentor({ name: "", email: "", id: "", phone: "", intern: "" });
    } else {
      alert("Please fill all fields before adding!");
    }
  };

  // Edit mentor function
  const handleEdit = (index) => {
    setNewMentor(interns[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  // Delete intern function
  const handleDelete = (index) => {
    const updatedInterns = interns.filter((_, i) => i !== index);
    setInterns(updatedInterns);
  };

  // Handle More icon click
  const handleMore = (index) => {
    setSelectedIntern(interns[index]);
    setShowMoreModal(true);
  };

  // Close modals
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setShowMoreModal(false);
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
                <th>Mentor</th>
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
                      onClick={() => handleEdit(index)}
                    />
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => handleDelete(index)}
                    />
                    <MdOutlineMoreHoriz
                      className="more-icon"
                      onClick={() => handleMore(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add/Edit Intern Modal */}
          {showModal && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content">
                <h3>{editingIndex !== null ? "Edit Intern" : "Add Intern"}</h3>
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
                  placeholder="Mentor"
                  value={newMentor.intern}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, intern: e.target.value })
                  }
                />
                <div className="modal-buttons">
                  <button onClick={handleAddMentor}>
                    {editingIndex !== null ? "Update" : "Add"}
                  </button>
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {/* More Options Modal */}
          {showMoreModal && selectedIntern && (
            <div className="modal-contain" onClick={closeModal}>
              <div className="modal-container">
                <h3>More Options for {selectedIntern.name}</h3>
                <div className="modal-buttons">
                  <button onClick={() => alert(`Evaluate ${selectedIntern.name}`)} >
                    Evaluation
                  </button>
                  <button onClick={() => alert(`View attendance of ${selectedIntern.name}`)} >
                    Attendance 
                  </button>
                  <button onClick={() => alert(`View project of ${selectedIntern.name}`)} >
                    Projects
                  </button>
                  
                </div>
                <Button label="close" onClick={() => setShowMoreModal(false)}></Button>
                {/* <Button label="Close" onClick={() => setShowModal(false)} /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interns;
