import React from 'react'
import "../Contact/ContactPage.css"
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <div className="contactPage__box">
        <h1>Contact Me</h1>
        <div className='contactPage__box__item'>
          <MdEmail
            className='contactPage__box__item__icon'
            size={25}
            style={{color : 'white'}}
          />
          <p>Email : <a href="mailto:adarshku123456789@gmail.com" target='_blank'> <span> adarshku123456789@gmail.com</span></a></p>
        </div>

        <div className='contactPage__box__item'>
          <FaPhone
            size={25}
            className='contactPage__box__item__icon'
            style={{ color: 'white' }}
          />
          <p>Phone : +91 7209798901</p>
        </div>

        <div className='contactPage__box__item'>
          <IoLogoWhatsapp 
            className='contactPage__box__item__icon'
            size={25}
            style={{ color: 'white' }}
          />
          <p>WhatsApp : +91 7209798901</p>
        </div>

        
      </div>

    </div>
  )
}

export default ContactPage;