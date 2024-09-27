import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../../Components/ui/Button";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useForm } from "react-hook-form"; // Import useForm from React Hook Form

import "../css/Interns.css";
import DashboardLayouts from "../../layouts/DashboardLayouts";

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

  const [showModal, setShowModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const navigate = useNavigate(); 

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const handleAddMentor = (data) => {
    if (editingIndex !== null) {
      const updatedInterns = [...interns];
      updatedInterns[editingIndex] = data;
      setInterns(updatedInterns);
      setEditingIndex(null);
    } else {
      setInterns([...interns, data]);
    }
    setShowModal(false);
    reset();
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

  const handleDelete = (index) => {
    const updatedInterns = interns.filter((_, i) => i !== index);
    setInterns(updatedInterns);
  };

  const handleMore = (index) => {
    setSelectedIntern(interns[index]);
    setShowMoreModal(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setShowMoreModal(false);
    }
  };

  const goToEvaluation = () => {
    navigate("/evaluation");
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
          }}
        />

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
                      message: "Entered value does not match email format"
                    }
                  })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <input
                  type="text"
                  placeholder="User ID"
                  {...register("id", { required: "ID is required" })}
                />
                {errors.id && <p className="error">{errors.id.message}</p>}

                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && <p className="error">{errors.phone.message}</p>}

                <input
                  type="text"
                  placeholder="Mentor"
                  {...register("intern", { required: "Mentor name is required" })}
                />
                {errors.intern && <p className="error">{errors.intern.message}</p>}

                <div className="modal-buttons">
                  <button type="submit">
                    {editingIndex !== null ? "Update" : "Add"}
                  </button>
                  <button type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

       
        {showMoreModal && selectedIntern && (
          <div className="modal-contain" onClick={closeModal}>
            <div className="modal-container">
              <h3>More Options for {selectedIntern.name}</h3>
              <div className="modal-button">
                <button className="display" onClick={goToEvaluation}>
                  <FaSheetPlastic className="con" /> Evaluation form
                </button>

                <button className="display" onClick={goToAttendance}>
                  <FaExclamationCircle className="con" /> Attendance
                </button>
                <button className="display" onClick={goToAttestation}>
                  <HiClipboardDocumentList className="con" /> Attestation of
                  Internship
                </button>
              </div>
              <Button
                label="close"
                onClick={() => setShowMoreModal(false)}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayouts>
  );
};

export default Interns;
