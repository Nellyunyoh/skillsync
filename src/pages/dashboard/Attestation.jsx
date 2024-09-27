import  { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import '../css/Attestation.css';
import mav from '../../assets/images/mav.png'

const Attestation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [ceo, setCeo] = useState('');
  const [programManager, setProgramManager] = useState('');
  const certificateRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
  });

  return (
    <div className="main-container">
      <div className="input-section">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Supervisor:
          <input type="text" value={ceo} onChange={(e) => setCeo(e.target.value)} />
        </label>
        <label>
         Manager :
          <input type="text" value={programManager} onChange={(e) => setProgramManager(e.target.value)} />
        </label>
        <button onClick={handlePrint}>Save as PDF</button>
      </div>

   
      <div className="certificate-container" ref={certificateRef}>
        <div className="certificate-header">
          <img src={mav} alt="mav" />
          <h1>CERTIFICATE OF ATTESTATION</h1>
          <p>This is to certify that </p>
        </div>
        <div className="certificate-body">
          <h2>{name || 'Your Name'}</h2>
          <p>
            For outstanding completion of the compulsory internship program
            at MAVIANCE PLC  from {date || 'Date'}.
            During this period has demonstrated exceptional commitment, professionalism, and the ability to apply the skills and knowledge acquired throughout the internship. Their contributions have been invaluable, and they have fulfilled all the requirements of the internship program.
We hereby acknowledge their successful completion of the internship and wish them the best in their future endeavors.
          </p>
        </div>
        <div className="certificate-footer">
          <div className="signature">
            <p>{ceo || 'John Joseph'}</p>
            <span>SUPERVISOR</span>
          </div>
          <div className="signature">
            <p>{programManager || 'Jerry Johnny'}</p>
            <span>MANAGER</span>
          </div>
        </div>
        <div className="certificate-ribbon"></div>
      </div>
    </div>
  );
};

export default Attestation;
