import  { useState } from 'react';
import '../css/Attendance.css';

const Attendance = () => {
  const [records, setRecords] = useState({});
  const [currentWeek, setCurrentWeek] = useState(0); 

  
  const getWeekDates = (weekOffset = 0) => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7));
    const weekDates = [];

    for (let i = 0; i < 5; i++) { 
      const currentDate = new Date(firstDayOfWeek);
      currentDate.setDate(firstDayOfWeek.getDate() + i);
      weekDates.push({
        day: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
        date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }
    return weekDates;
  };

  const handleStatusClick = (date, status) => {
    setRecords(prevRecords => ({
      ...prevRecords,
      [date]: status
    }));
  };

  const attendanceData = getWeekDates(currentWeek);

  return (
    <div className="attendance-container">
      <h1 className="title">ATTENDANCE</h1>
      <div className="week-navigation">
        <button onClick={() => setCurrentWeek(currentWeek - 1)} className="nav-btn">Previous Week</button>
        <button onClick={() => setCurrentWeek(currentWeek + 1)} className="nav-btn">Next Week</button>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Record</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}, {item.date}</td>
              <td>
                <button
                  className="present-btn"
                  onClick={() => handleStatusClick(item.date, 'Present')}
                >
                  P
                </button>
                <button
                  className="absent-btn"
                  onClick={() => handleStatusClick(item.date, 'Absent')}
                >
                  A
                </button>
              </td>
              <td>{records[item.date] ? records[item.date] : 'No Record'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;