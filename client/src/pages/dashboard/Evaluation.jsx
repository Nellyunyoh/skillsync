import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../css/Evaluations.css";
import maviance from "../../assets/images/image 21 copy.png";
import { useLocation } from "react-router-dom";

const Evaluation = () => {
  const location = useLocation();
  const internData = location.state?.intern;
  const [formData, setFormData] = useState({
    supervisorName: internData?.intern || "",
    jobTitle: "",
    organizationName: "",
    phoneNumber: "",

    studentName: internData?.name || "",
    startingDate: "",
    completionDate: "",
    ratings: {
      onTime: "",
      professionalBehavior: "",
      assignments: "",
      oralCommunication: "",
      writtenCommunication: "",
      computerSkills: "",
      teamwork: "",
      adaptability: "",
      decisionMaking: "",
      reliability: "",
      attentionToDetails: "",
    },
    comments: {
      performanceBenefits: "",
      skillDevelopment: "",
      strengths: "",
      areasToImprove: "",
      overallExperience: "",
    },
    internshipExperience: {
      suggestions: "",
      futureRecommendations: "",
      otherComments: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [mainField, subField] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [mainField]: {
          ...prevState[mainField],
          [subField]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDownloadPDF = () => {
    const saveButton = document.querySelector(".save-btn");
    if (saveButton) {
      saveButton.style.display = "none";
    }

    const input = document.querySelector(".evaluation-form");

    input.style.overflow = "visible";

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("evaluation-form.pdf");

      if (saveButton) {
        saveButton.style.display = "block";
      }

      input.style.overflow = "auto";
    });
  };

  return (
    <div className="evaluation-form">
      <img src={maviance} alt="Maviance"></img>
      <h3>INTERNSHIP EVALUATION FORM</h3>

      <p>
        This evaluation is designed primarily to provide feedback on job
        performance and related issues to assist the student. This form is to be
        completed and submitted at the end of the semester.
      </p>

    <div className="information">
    <div className="form-section">
        <h3>Supervisor Information*</h3>
        <table className="evaluation-table">
          <tbody>
            <tr>
              <td>
                <label>Supervisor Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="supervisorName"
                  value={formData.supervisorName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number</label>
              </td>
              <td>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email Address</label>
              </td>
              <td>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="form-section">
        <h3>Intern Information*</h3>
        <table className="evaluation-table">
          <tbody>
            <tr>
              <td>
                <label>Intern Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="internName"
                  value={formData.internName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Start Date</label>
              </td>
              <td>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>End Date</label>
              </td>
              <td>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
      <div className="form-section">
        <h3 required >Core skills and competencies*</h3>
        <p>
          Please rate this intern on the following items by checking the
          appropriate rating.
        </p>
        <table className="evaluation-table">
          <thead>
            <tr>
              <th>Evaluation Criteria</th>
              <th>Excellent</th>
              <th>Very Good</th>
              <th>Satisfactory</th>
              <th>Needs Improvement</th>
              <th>Unsatisfactory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Punctuality</td>
              <td>
                <input
                  type="radio"
                  name="ratings.onTime"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.onTime"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.onTime"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.onTime"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.onTime"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Professionalism</td>
              <td>
                <input
                  type="radio"
                  name="ratings.professional"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.professional"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.professional"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.professional"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.professional"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Proficiency</td>
              <td>
                <input
                  type="radio"
                  name="ratings.assignments"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.assignments"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.assignments"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.assignments"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.assignments"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

   

            <tr>
              <td>Team work</td>
              <td>
                <input
                  type="radio"
                  name="ratings.work"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.work"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.work"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.work"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.work"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Attention to accuracy and details</td>
              <td>
                <input
                  type="radio"
                  name="ratings.accuracy"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.accuracy"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.accuracy"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.accuracy"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.accuracy"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Quality of work</td>
              <td>
                <input
                  type="radio"
                  name="ratings.quality"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.quality"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.quality"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.quality"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.quality"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Reliability and dependability</td>
              <td>
                <input
                  type="radio"
                  name="ratings.Reliability"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.Reliability"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.Reliability"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.Reliability"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.Reliability"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Strategic thinking</td>
              <td>
                <input
                  type="radio"
                  name="ratings.critical"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.critical"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.critical"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.critical"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.critical"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>

  

            <tr>
              <td>Decision making</td>
              <td>
                <input
                  type="radio"
                  name="ratings.setting"
                  value="Excellent"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.setting"
                  value="Very Good"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.setting"
                  value="Satisfactory"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.setting"
                  value="Needs Improvement"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="ratings.setting"
                  value="Unsatisfactory"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="form-section">
        <h3>COMMENTS</h3>
        <div className="long">
          
          <input
            name="comments.performanceBenefits"
            placeholder="Describe the ways in which the intern’s performance benefited your organization."
            value={formData.comments.performanceBenefits}
            onChange={handleChange}
            className="long-text"
          />

         
          <input
            name="comments.skills"
            placeholder="What development have you observed in the student’s skills, knowledge, personal and/or professional performance?"
            value={formData.comments.skills}
            onChange={handleChange}
            className="long-text"
          />

         
          <input
            name="comments.performanceBenefits"
            placeholder="What do you consider to be the intern’s strengths?"
            value={formData.comments.strengths}
            onChange={handleChange}
            className="long-text"
          />

          
          <input
            name="comments.performanceBenefits"
            placeholder="In what areas does the intern need to improve?"
            value={formData.comments.improve}
            onChange={handleChange}
            className="long-text"
          />

         
          <input
            name="comments.performanceBenefits"
            placeholder="Overall, how do you rate your experience with this intern ?"
            value={formData.comments.rate}
            onChange={handleChange}
            className="long-text"
          />
        </div>
      </div>

     

     

      

      <button className="save-btn" onClick={handleDownloadPDF}>
        Save as PDF
      </button>
    </div>
  );
};

export default Evaluation;
