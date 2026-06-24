import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-desc">
              I'm currently seeking a 6-month industrial training placement (3 Aug 2026 – 15 Jan 2027). 
              If you have an opportunity that matches my skills in Data Analytics or Software Engineering, 
              I'd love to hear from you!
            </p>
            
            <div className="info-items">
              <div className="info-item card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>iikraqizhar13@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>017-2728387</p>
                </div>
              </div>
              
              <div className="info-item card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kluang, Johor, Malaysia</p>
                </div>
              </div>

              <div className="info-item card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.3 5.3 0 0 0 19 4.5a5.3 5.3 0 0 0-.1-3.5s-1.4-.4-4.5 2.5a14.2 14.2 0 0 0-8 0C3.3 1 1.9 1.4 1.9 1.4A5.3 5.3 0 0 0 1.8 4.9a5.3 5.3 0 0 0-1.5 3.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 5.8 18v4"></path></svg>
                </div>
                <div>
                  <h4>GitHub</h4>
                  <p><a href="https://github.com/ikraq" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>github.com/ikraq</a></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@company.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="Internship Opportunity">Internship Opportunity</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Mohamad, we have an internship opening..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSuccess ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSuccess ? (
                  'Message Sent!'
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
