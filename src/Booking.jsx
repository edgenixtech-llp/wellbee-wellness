import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      // For demo purposes, fake a successful response if backend is not running
      setTimeout(() => {
        setStatus('success');
        setResponseMsg(`Thank you ${formData.name}, we'll confirm shortly! (Demo Mode)`);
        setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="booking" className="booking">
      <div className="container booking-container">
        <div className="booking-form-wrapper reveal fade-right">
          <div className="section-header align-left">
            <h2 className="section-title">Book a Consultation</h2>
            <p className="section-subtitle">Take the first step towards your ultimate wellness goals.</p>
          </div>

          {status === 'success' ? (
            <div className="success-message">
              <div className="checkmark-circle">
                <div className="checkmark draw"></div>
              </div>
              <h3>Request Received!</h3>
              <p>{responseMsg}</p>
              <button className="btn btn-outline mt-4" onClick={() => setStatus('idle')} style={{color: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled>Select Service</option>
                    <option value="Dental Care">Dental Care</option>
                    <option value="Skincare Therapy">Skincare Therapy</option>
                    <option value="Fat Loss Program">Fat Loss Program</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any specific concerns or requests?" rows="4"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? <span className="spinner"></span> : 'Submit Request'}
              </button>
              {status === 'error' && <p className="error-text">{responseMsg}</p>}
            </form>
          )}
        </div>

        <div className="booking-map reveal fade-left">
          <div className="map-placeholder image-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-74.005941!3d40.712784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <strong>📍 Location:</strong> 123 Wellness Blvd, Serenity City, NY 10001
            </div>
            <div className="info-item">
              <strong>📞 Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="info-item">
              <strong>✉️ Email:</strong> hello@wellbeewellness.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
