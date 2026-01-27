import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import './EmailSend.css'

const ApplicationModal = (props) => {
  const {classname,role}=props
 
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // To show loading state
  const [formData, setFormData] = useState({ name: '', role: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = ''; // Replace with yours
    const templateId = ''; // Replace with yours
    const publicKey = ''; // Replace with yours

    const templateParams = {
      from_name: formData.name,
      job_role: formData.role,
      message: formData.message,
      to_email: formData.email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert('Application Sent to Team symbotz!');
        setIsOpen(false);
        setFormData({ name: '', role: '', message: '' }); // Clear form
      })
      .catch((err) => {
        alert('Error sending email. Check console.');
        console.error(err);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div >
      {/* The main button on your page */}
      <div
        onClick={() => setIsOpen(true)}
        className={classname}
      >
        Apply
      </div>

      {/* The Popout (Modal) */}
      {isOpen && (
        <div className="overlayStyle">
          <div className="modalStyle">
            <h3>Submit Application</h3>
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input 
                id="name"
                name="name" 
                placeholder="Full Name" 
                required 
                onChange={handleChange} 
                className="inputStyle" 
              />
              {role ==="none" && <><label htmlFor="role">Designation</label>
              {/* <input 
                id="role"
                name="role" 
                placeholder="Role (e.g. Developer)" 
                required 
                onChange={handleChange} 
                className="inputStyle"  
              /> */}
              <select id="role" name="role" className="inputStyle" value={formData.role}onChange={handleChange}>
                <option value="" disabled hidden>Select an option</option>
                <option value="SEO">SEO</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Social Media Handler">Social Media Handler</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
              </> }
              {role !=="none" && <><label htmlFor="role">Designation</label>
              <input 
                id="role"
                name="role"
                value={role} readonly
                placeholder="Role (e.g. Developer)" 
                required 
                onChange={handleChange} 
                className="inputStyle"  
              />
              </> }
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email"
                name="email" 
                placeholder="Email" 
                required 
                onChange={handleChange} 
                className="inputStyle"
              />
              <label htmlFor="msg">Why should we hire you?</label>
              <textarea 
                id="msg"
                name="message" 
                placeholder="Enter your answer" 
                required 
                onChange={handleChange} 
                className="inputStyle"
              />
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={isSending} className="submitBtnStyle">
                  {isSending ? 'Sending...' : 'Send Details'}
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="cancelBtnStyle">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Styles ---
// const overlayStyle = {
//   position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//   backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center'
// };
// const modalStyle = {
//   background: 'white', padding: '30px', borderRadius: '12px', width: '350px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
// };
// const inputStyle = { width: '100%', marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' };
// const submitBtnStyle = { flex: 1, padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
// const cancelBtnStyle = { flex: 1, padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default ApplicationModal;


