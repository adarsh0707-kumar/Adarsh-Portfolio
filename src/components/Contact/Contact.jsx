import "./Contact.css"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ContactPage from './ContactPage'

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default Contact