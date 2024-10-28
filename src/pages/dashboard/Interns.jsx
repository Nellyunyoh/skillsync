import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/ui/Button";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import "../css/Interns.css";
import DashboardLayouts from "../../layouts/DashboardLayouts";

import { API_ENDPOINTS, getData }    from "../../config/apiConfig.js";

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

  const generateId = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900);
    return `IMS${randomNumber}`;
  };

  const getInterns = async () => {
    try {
      const interns = await getData(API_ENDPOINTS.interns);
      console.log('Interns:', interns);
    } catch (error) {
      console.error('Error fetching interns:', error);
    }
  };
  
  getInterns();
  

  // const handleAddMentor = async (data) => {
  //   if (editingIndex !== null) {
  //     try {
  //       const response = await axios.put(`http://localhost:3000/interns/${data.id}`, data);
  //       const updatedInterns = [...interns];
  //       updatedInterns[editingIndex] = response.data; 
  //       setInterns(updatedInterns);
  //       setEditingIndex(null);
  //     } catch (error) {
  //       console.error("Error updating intern:", error);
  //     }
  //   } else {
  //     handleAddMentor(data);
  //   }
  //   setShowModal(false);
  //   reset();
  // };
  
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

  // const handleDelete = async (index) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/interns/${interns[index].id}`); 
  //     const updatedInterns = interns.filter((_, i) => i !== index); 
  //     setInterns(updatedInterns);
  //   } catch (error) {
  //     console.error("Error deleting intern:", error);
  //   }
  //   setShowDeleteModal(false);
  // };
  
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

  const goToEvaluation = (intern) => {
    navigate("/evaluation", { state: { intern } });
  };

  const goToAttestation = () => {
    navigate("/attestation");
  };

  const goToAttendance = () => {
    navigate("/attendance");
  };

  return (
    <DashboardLayouts>
      <div className="mentor-list">
        <h2>Intern List</h2>
        <Button
          variant="primary"
          label={"+ Add Intern"}
          onClick={() => {
            setShowModal(true);
            reset();
            setValue("id", generateId());
          }}
        />

        <Button variant="default" label={"Filter"} />

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
                  <FaEdit
                    className="edit-icon"
                    onClick={() => handleEdit(index)}
                  />
                  <FaTrashAlt
                    className="delete-icon"
                    onClick={() =>(index)}
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
              <form onSubmit={handleSubmit()}>
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
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}

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
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}

                <input
                  type="text"
                  placeholder="Mentor"
                  {...register("intern", {
                    required: "Mentor name is required",
                  })}
                />
                {errors.intern && (
                  <p className="error">{errors.intern.message}</p>
                )}

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
                  <button
                    className=""
                    onClick={() => goToEvaluation(selectedIntern)}
                  >
                    <div className="fish">
                      {" "}
                      <FaSheetPlastic className="con" />
                    </div>{" "}
                    Evaluation
                  </button>

                  <button className="" onClick={goToAttendance}>
                    <div className="fish">
                      <FaExclamationCircle className="con" />{" "}
                    </div>
                    Attendance
                  </button>

                  <button className="" onClick={goToAttestation}>
                    <div className="fish">
                      {" "}
                      <HiClipboardDocumentList className="con" />
                    </div>{" "}
                    Attestation
                  </button>
                </div>
              </div>
              <Button
                variant="danger"
                label="Cancel"
                onClick={() => setShowMoreModal(false)}
              ></Button>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <h3>Are you sure you want to delete this intern?</h3>
              <div className="modal-buttons">
                <button
                  onClick={() => {
                    const updatedInterns = interns.filter(
                      (_, i) => i !== deleteIndex
                    );
                    setInterns(updatedInterns);
                    setShowDeleteModal(false);
                    setDeleteIndex(null);
                  }}
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteIndex(null);
                  }}
                >
                  Cancel
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
