import './Dashboard.css'
import React from 'react'
import Home from './Home'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />
      <Home />
      <Footer />
    </div>

  )
}

export default Dashboard