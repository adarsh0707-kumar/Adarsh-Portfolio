import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";


const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const serviceId = import.meta.env.YOUR_SERVICE_ID;
  const templateId = import.meta.env.YOUR_TEMPLATE_ID;


  useEffect(() => {
    const publicKey = import.meta.env.YOUR_PUBLIC_KEY;
    
    if (!publicKey) {
      console.error("Missing EmailJS public key in environment variables");
    } else {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;


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
          console.error("Failed to send email:", error);
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
