
import './App.css'
import React from 'react'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Dashboard />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </>
  )
}

export default App
