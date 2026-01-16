import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ApplicationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // To show loading state
  const [formData, setFormData] = useState({ name: '', role: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = 'YOUR_SERVICE_ID'; // Replace with yours
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with yours
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with yours

    const templateParams = {
      from_name: formData.name,
      job_role: formData.role,
      message: formData.message,
      to_email: 'sbsomnath007@gmail.com',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert('Application Sent to Somnath!');
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
    <div style={{ padding: '20px' }}>
      {/* The main button on your page */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}
      >
        Apply for a Role
      </button>

      {/* The Popout (Modal) */}
      {isOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>Submit Application</h3>
            <form onSubmit={sendEmail}>
              <input 
                name="name" 
                placeholder="Full Name" 
                required 
                onChange={handleChange} 
                style={inputStyle} 
              />
              <input 
                name="role" 
                placeholder="Role (e.g. Developer)" 
                required 
                onChange={handleChange} 
                style={inputStyle} 
              />
              <textarea 
                name="message" 
                placeholder="Why should we hire you?" 
                required 
                onChange={handleChange} 
                style={{ ...inputStyle, height: '100px' }} 
              />
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={isSending} style={submitBtnStyle}>
                  {isSending ? 'Sending...' : 'Send Details'}
                </button>
                <button type="button" onClick={() => setIsOpen(false)} style={cancelBtnStyle}>
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
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const modalStyle = {
  background: 'white', padding: '30px', borderRadius: '12px', width: '350px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
};
const inputStyle = { width: '100%', marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' };
const submitBtnStyle = { flex: 1, padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const cancelBtnStyle = { flex: 1, padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default ApplicationModal;


