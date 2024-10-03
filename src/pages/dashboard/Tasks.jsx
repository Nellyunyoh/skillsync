import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../Components/ui/Button";
import DashboardLayouts from "../../layouts/DashboardLayouts";

const Mentors = () => {
  const [mentors, setMentors] = useState([
    {
      id: "TMS114",
      name: "Html and Css",
      description: "Login form with html and css",
      assigned: "Peace Bright",
      status: "New",
    },
    {
      id: "TMS189",
      name: "Javascript",
      description: "Form Validation",
      assigned: "Ella Joy",
      status: "New",
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

  const generateTaskId = () => {
    const randomId = Math.floor(100 + Math.random() * 900);
    return `TMS${randomId}`;
  };

  const onSubmit = (data) => {
    if (isEditing) {
      const updatedMentors = [...mentors];
      updatedMentors[editIndex] = data;
      setMentors(updatedMentors);
      setIsEditing(false);
    } else {
      const newTask = { ...data, id: generateTaskId() };
      setMentors([...mentors, newTask]);
    }

    setShowModal(false);
    reset();
  };

  const handleEditMentor = (index) => {
    const mentor = mentors[index];
    setEditIndex(index);
    setIsEditing(true);
    setShowModal(true);

    setValue("id", mentor.id);
    setValue("name", mentor.name);
    setValue("description", mentor.description);
    setValue("assigned", mentor.assigned);
    setValue("status", mentor.status);
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
              <h3>{isEditing ? "Edit Task" : "Add Task"}</h3>

              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <button type="submit">{isEditing ? "Update" : "Add"}</button>
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
