import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/ui/Button";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import axios from "axios"; 
import "../css/Interns.css";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import { API_ENDPOINTS, getData } from "../../config/apiConfig.js";

const Interns = () => {
  const [interns, setInterns] = useState([
    {
      name: "Joseph Johnson",
      email: "josephjohnson@gmail.com",
      id: "IMS145",
      phone: "654894694",
      intern: "Mary Mag",
    },
    {
      name: "John Nasty",
      email: "johnnasty@gmail.com",
      id: "IMS149",
      phone: "654678975",
      intern: "Martha Peace",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const generateId = () => `IMS${Math.floor(100 + Math.random() * 900)}`;

  const getInterns = async () => {
    try {
      const internsData = await getData(API_ENDPOINTS.interns);
      console.log("Interns:", internsData);
    } catch (error) {
      console.error("Error fetching interns:", error);
    }
  };

  getInterns();

  const handleAddMentor = async (data) => {
    try {
      if (editingIndex !== null) {
        const response = await axios.put(
          `http://localhost:3000/interns/${data.id}`,
          data
        );
        const updatedInterns = [...interns];
        updatedInterns[editingIndex] = response.data;
        setInterns(updatedInterns);
        setEditingIndex(null);
      } else {
        const newIntern = { ...data, id: generateId() };
        const response = await axios.post("http://localhost:3000/interns", newIntern);
        setInterns((prev) => [...prev, response.data]);
      }
      setShowModal(false);
      reset();
    } catch (error) {
      console.error("Error saving intern:", error);
    }
  };

  const handleEdit = (index) => {
    const intern = interns[index];
    setValue("name", intern.name);
    setValue("email", intern.email);
    setValue("id", intern.id);
    setValue("phone", intern.phone);
    setValue("intern", intern.intern);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:3000/interns/${interns[index].id}`);
      setInterns(interns.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting intern:", error);
    }
    setShowDeleteModal(false);
  };

  const handleMore = (index) => {
    setSelectedIntern(interns[index]);
    setShowMoreModal(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setShowMoreModal(false);
      setShowDeleteModal(false);
    }
  };

  const goToEvaluation = (intern) => navigate("/evaluation", { state: { intern } });
  const goToAttestation = () => navigate("/attestation");
  const goToAttendance = () => navigate("/attendance");

  return (
    <DashboardLayouts>
      <div className="mentor-list">
        <h2>Intern List</h2>
        <Button
          variant="primary"
          label="+ Add Intern"
          onClick={() => {
            setShowModal(true);
            reset();
            setValue("id", generateId());
          }}
        />
        <Button variant="default" label="Filter" />

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
            {interns.map((intern, index) => (
              <tr key={index}>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.id}</td>
                <td>{intern.phone}</td>
                <td>{intern.intern}</td>
                <td>
                  <FaEdit className="edit-icon" onClick={() => handleEdit(index)} />
                  <FaTrashAlt className="delete-icon" onClick={() => {
                      setDeleteIndex(index);
                      setShowDeleteModal(true);
                    }}
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

        {showModal && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <h3>{editingIndex !== null ? "Edit Intern" : "Add Intern"}</h3>
              <form onSubmit={handleSubmit(handleAddMentor)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <input
                  type="text"
                  placeholder="User ID"
                  {...register("id", { required: "ID is required" })}
                  readOnly
                />
                {errors.id && <p className="error">{errors.id.message}</p>}

                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && <p className="error">{errors.phone.message}</p>}

                <input
                  type="text"
                  placeholder="Mentor"
                  {...register("intern", { required: "Mentor name is required" })}
                />
                {errors.intern && <p className="error">{errors.intern.message}</p>}

                <div className="modal-buttons">
                  <button type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit">
                    {editingIndex !== null ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showMoreModal && selectedIntern && (
          <div className="modal-contain" onClick={closeModal}>
            <div className="modal-container">
              <h3>Select Action for {selectedIntern.name}</h3>
              <p>Please choose an action to perform for this intern</p>
              <div className="modal-button">
                <div className="jelly">
                  <button onClick={() => goToEvaluation(selectedIntern)}>
                    <FaSheetPlastic className="con" /> Evaluation
                  </button>
                  <button onClick={goToAttendance}>
                    <FaExclamationCircle className="con" /> Attendance
                  </button>
                  <button onClick={goToAttestation}>
                    <HiClipboardDocumentList className="con" /> Attestation
                  </button>
                </div>
              </div>
              <Button variant="danger" label="Cancel" onClick={() => setShowMoreModal(false)} />
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete this intern?</p>
              <div className="modal-buttons">
                <button type="button" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
                <button type="button" onClick={() => handleDelete(deleteIndex)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayouts>
  );
};

export default Interns;
