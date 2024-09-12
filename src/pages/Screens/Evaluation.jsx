// import React from 'react'
import Sidebar from "../../Components/Screens/Sidebar";
import Navbar from "../../Components/Screens/Navbar";
import '../css/Evaluation.css';

export const Evaluation = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="container">
          <h1>Intern Evaluation Form</h1>
          <form id="evaluationForm">
            <fieldset>
              <legend>Intern Information</legend>
              <label htmlFor="internName">Intern Name:</label>
              <input type="text" id="internName" name="internName" required />
              <br />

              <label htmlFor="internID">Intern ID:</label>
              <input type="text" id="internID" name="internID" required />
              <br />

              <label htmlFor="supervisorName">Supervisor Name:</label>
              <input
                type="text"
                id="supervisorName"
                name="supervisorName"
                required
              />
              <br />
            </fieldset>

            <fieldset>
              <legend>Evaluation Criteria</legend>

              {/* <!-- Job Performance --> */}
              <label htmlFor="jobPerformance">Job Performance:</label>
              <select id="jobPerformance" name="jobPerformance" required>
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Work Ethic and Professionalism --> */}
              <label htmlFor="workEthic">Work Ethic and Professionalism:</label>
              <select id="workEthic" name="workEthic" required>
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Communication Skills --> */}
              <label htmlFor="communicationSkills">Communication Skills:</label>
              <select
                id="communicationSkills"
                name="communicationSkills"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Interpersonal Skills --> */}
              <label htmlFor="interpersonalSkills">Interpersonal Skills:</label>
              <select
                id="interpersonalSkills"
                name="interpersonalSkills"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Learning and Development --> */}
              <label htmlFor="learningDevelopment">
                Learning and Development:
              </label>
              <select
                id="learningDevelopment"
                name="learningDevelopment"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Time Management --> */}
              <label htmlFor="timeManagement">Time Management:</label>
              <select id="timeManagement" name="timeManagement" required>
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Cultural Fit --> */}
              <label htmlFor="culturalFit">Outfit:</label>
              <select id="culturalFit" name="culturalFit" required>
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Creativity and Innovation --> */}
              <label htmlFor="creativityInnovation">
                Creativity and Innovation:
              </label>
              <select
                id="creativityInnovation"
                name="creativityInnovation"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Leadership Potential --> */}
              <label htmlFor="leadershipPotential">Leadership Potential:</label>
              <select
                id="leadershipPotential"
                name="leadershipPotential"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />

              {/* <!-- Overall Contribution --> */}
              <label htmlFor="overallContribution">Overall Contribution:</label>
              <select
                id="overallContribution"
                name="overallContribution"
                required
              >
                <option value="">--Select--</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Satisfactory</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <br />
            </fieldset>

            {/* <!-- Additional Comments --> */}
            <fieldset>
              <legend>Additional Comments</legend>
              <label htmlFor="comments">Comments:</label>
              <textarea id="comments" name="comments"></textarea>
            </fieldset>

            <button type="submit">Submit Evaluation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
