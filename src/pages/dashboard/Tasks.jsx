import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../Components/ui/Button";
import DashboardLayouts from "../../layouts/DashboardLayouts";

const Mentors = () => {
  const [mentors, setMentors] = useState([
    {
      id: "114",
      name: "Html and Css",
      description: "Login form with html and css",
      assigned: "Peace Bright",
      status: "New",
    },
    {
      id: "189",
      name: "Javascript",
      description: "Form Validation",
      assigned: "+237 654678975",
      status: "Martha Peace",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      id: "",
      name: "",
      description: "",
      assigned: "",
      status: "",
    },
  });


  const onSubmit = (data) => {
    if (isEditing) {
      const updatedMentors = [...mentors];
      updatedMentors[editIndex] = data;
      setMentors(updatedMentors);
      setIsEditing(false);
    } else {
      setMentors([...mentors, data]);
    }

    setShowModal(false);
    reset(); 
  };

  const handleEditMentor = (index) => {
    const mentor = mentors[index];
    setEditIndex(index);
    setIsEditing(true);
    setShowModal(true);
    
   
    setValue("name", mentor.id);
    setValue("email", mentor.name);
    setValue("id", mentor.description);
    setValue("phone", mentor.assigned);
    setValue("intern", mentor.status);
  };

  const handleDeleteMentor = (index) => {
    const updatedMentors = mentors.filter((_, i) => i !== index);
    setMentors(updatedMentors);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
      setIsEditing(false);
      reset();
    }
  };

  return (
    <DashboardLayouts>
      <div className="mentor-list">
        <h2>Task List</h2>
        <Button
          variant="primary"
          label={"+ Add Task"}
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            reset(); 
          }}
        />

        <table className="custom-table">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => (
              <tr key={index}>
                <td>{mentor.id}</td>
                <td>{mentor.name}</td>
                <td>{mentor.description}</td>
                <td>{mentor.assigned}</td>
                <td>{mentor.status}</td>
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Task Id"
                  {...register("name", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Assigned To"
                  {...register("assigned", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Status"
                  {...register("status", { required: true })}
                />
                <div className="modal-buttons">
                  <button type="submit">
                    {isEditing ? "Update" : "Add"}
                  </button>
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
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayouts>
  );
};

export default Mentors;
