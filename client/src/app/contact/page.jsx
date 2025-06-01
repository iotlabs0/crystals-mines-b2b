"use client";  // <-- Add this line at the very top!
import { useState } from 'react';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., send data to API
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {submitted ? (
        <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Your Name" 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="your.email@example.com" 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            placeholder="Write your message here..." 
            rows="5"
          />

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}
