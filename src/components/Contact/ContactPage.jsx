// import React from 'react'
// import "../Contact/ContactPage.css"
// import { MdEmail } from 'react-icons/md';
// import { FaPhone } from 'react-icons/fa';
// import { IoLogoWhatsapp } from 'react-icons/io5';
// 
// const ContactPage = () => {
//   return (
//     <div className='contactPage'>
//       <div className="contactPage__box">
//         <h1>Contact Me</h1>
//         <div className='contactPage__box__item'>
//           <MdEmail
//             className='contactPage__box__item__icon'
//             size={25}
//             style={{color : 'white'}}
//           />
//           <p>Email : <a href="mailto:adarshku123456789@gmail.com" target='_blank'> <span> adarshku123456789@gmail.com</span></a></p>
//         </div>
// 
//         <div className='contactPage__box__item'>
//           <FaPhone
//             size={25}
//             className='contactPage__box__item__icon'
//             style={{ color: 'white' }}
//           />
//           <p>Phone : +91 7209798901</p>
//         </div>
// 
//         <div className='contactPage__box__item'>
//           <IoLogoWhatsapp 
//             className='contactPage__box__item__icon'
//             size={25}
//             style={{ color: 'white' }}
//           />
//           <p>WhatsApp : +91 7209798901</p>
//         </div>
// 
//         
//       </div>
// 
//     </div>
//   )
// }
// 
// export default ContactPage;


import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");  // to show success / error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (example)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      // Example: send to your backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        // Clear form
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("An error occurred, please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
          />
        </label>

        <button type="submit">Send</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactPage;
