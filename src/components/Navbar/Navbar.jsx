import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar__logo">GodDev</div>

      <div className="navbar__toggle" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="navbar__links">
        <Link to="/" className="navbar__links__link">Home</Link>
        <Link to="/skill" className="navbar__links__link">Skill</Link>
        <Link to="/project" className="navbar__links__link">Project</Link>
        <Link to="/contact" className="navbar__links__link">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
