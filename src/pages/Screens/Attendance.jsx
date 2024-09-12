import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import "../css/Attendance.css";

export const Attendance = () => {
  function markAttendance(button, status) {
    const statusCell = button.parentElement.querySelector(".status"); // Get the status span

    // Update the status and color based on attendance
    if (status === "Present") {
      statusCell.innerHTML = "Present";
      statusCell.className = "status present";
    } else {
      statusCell.innerHTML = "Absent";
      statusCell.className = "status absent";
    }
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="contain">
          <h1>Student Attendance System</h1>
          <table id="attendanceTable">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Attendance</th>
              </tr>
              {/* <button onClick={(e) => markAttendance(e.target, 'Present')}>Mark Present</button> */}
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>IMS103</td>
                <td className="status-cell">
                  <button
                    className="present-btn"
                    onClick={(e) => markAttendance(e.target, "Present")}
                  >
                    P
                  </button>
                  <button
                    className="absent-btn"
                    onClick={(e) => markAttendance(e.target, "Absent")}
                  >
                    A
                  </button>
                  <span className="status"></span>
                </td>
              </tr>

              <tr>
                <td>Mary Anne</td>
                <td>IMS245</td>
                <td className="status-cell">
                  <button
                    className="present-btn"
                    onClick={(e) => markAttendance(e.target, "Present")}
                  >
                    P
                  </button>
                  <button
                    className="absent-btn"
                    onClick={(e) => markAttendance(e.target, "Absent")}
                  >
                    A
                  </button>
                  <span className="status"></span>
                </td>
              </tr>

              <tr>
                <td>Jane Smith</td>
                <td>IMS149</td>
                <td className="status-cell">
                  <button
                    className="present-btn"
                    onClick={(e) => markAttendance(e.target, "Present")}
                  >
                    P
                  </button>
                  <button
                    className="absent-btn"
                    onClick={(e) => markAttendance(e.target, "Absent")}
                  >
                    A
                  </button>
                  <span className="status"></span>
                </td>
              </tr>
              {/* <!-- Add more students here --> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
