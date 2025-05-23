import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const SERVICE_ID = 'service_6jz7f9v';
const TEMPLATE_ID = 'template_r0yv1ey';
const USER_ID = 'v77yqJaWnDpcnzQZe';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        setStatus('Failed to send.');
      });
  };
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__cards grid">
            <div className="contact__card">
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">venumadhav143n@gmail.com</span>
              <a href="mailto:venumadhav143n@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@venumadhav</span>
              <a href="https://t.me/vm_mt" target="_blank" rel="noreferrer" className="contact__button">
                Chat with me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="contact__form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="contact__form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__input"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact__button">Send</button>
            {status && <p className="contact__status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
