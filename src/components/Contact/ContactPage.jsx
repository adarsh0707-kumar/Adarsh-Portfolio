import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import dotenv from 'dotenv';


const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  dotenv.config();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const publicKey = process.env.YOUR_PUBLIC_KEY;
    if (!publicKey) {
      console.error("Missing EmailJS public key in environment variables");
    } else {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    // eslint-disable-next-line no-undef
    const serviceId = process.env.YOUR_SERVICE_ID;
    // eslint-disable-next-line no-undef
    const templateId = process.env.YOUR_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error("Missing EmailJS service or template ID in env");
      setStatus("Configuration error");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current)
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="from_name" placeholder="Your name" required />
        </label>
        <label>
          Email:
          <input type="email" name="reply_to" placeholder="you@example.com" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your message..." required />
        </label>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactPage;
