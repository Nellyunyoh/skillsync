import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../Components/ui/Button";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import { API_ENDPOINTS, getData } from "../../config/apiConfig";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [setDeleteIndex] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      id: "",
      phone: "",
      intern: "",
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/mentors")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  const generateId = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900);
    return `MMS${randomNumber}`;
  };


  const getMentors = async () => {
    try {
      const mentors = await getData(API_ENDPOINTS.mentors);
      console.log("Mentors:", mentors);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  getMentors();

  const handleEditMentor = (index) => {
    const mentor = mentors[index];
    setEditIndex(index);
    setIsEditing(true);
    setShowModal(true);

    setValue("name", mentor.name);
    setValue("email", mentor.email);
    setValue("id", mentor.id);
    setValue("phone", mentor.phone);
    setValue("intern", mentor.intern);
  };

  const handleDeleteMentor = async (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  // const confirmDeleteMentor = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3000/mentors/${mentors[deleteIndex].id}`);
  //     const updatedMentors = mentors.filter((_, i) => i !== deleteIndex);
  //     setMentors(updatedMentors);
  //     setShowDeleteModal(false);
  //     setDeleteIndex(null);
  //   } catch (error) {
  //     console.error("Error deleting mentor:", error);
  //   }
  // };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setIsEditing(false);
      setShowDeleteModal(false);
      reset();
    }
  };

  return (
    <DashboardLayouts>
      <div className="mentor-list">
        <h2>Mentor List</h2>
        <Button
          variant="primary"
          label={"+ Add Mentor"}
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            reset();
            setValue("id", generateId());
          }}
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

              <form onSubmit={handleSubmit()}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <input
                  type="text"
                  placeholder="User ID"
                  {...register("id", { required: true })}
                  readOnly
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Intern"
                  {...register("intern", { required: true })}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setIsEditing(false);
                      reset();
                    }}
                  >
                    Cancel
                  </button>

                  <button type="submit">{isEditing ? "Update" : "Save"}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <h3>Are you sure you want to delete this mentor?</h3>
              <div className="modal-buttons">
                <button onClick>Confirm</button>
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

export default Mentors;
