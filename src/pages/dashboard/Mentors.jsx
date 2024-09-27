import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../Components/ui/Button";
import DashboardLayouts from "../../layouts/DashboardLayouts";

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

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      id: "",
      phone: "",
      intern: "",
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
    
   
    setValue("name", mentor.name);
    setValue("email", mentor.email);
    setValue("id", mentor.id);
    setValue("phone", mentor.phone);
    setValue("intern", mentor.intern);
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
        <h2>Mentor List</h2>
        <Button
          variant="primary"
          label={"+ Add Mentor"}
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
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

              <form onSubmit={handleSubmit(onSubmit)}>
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
