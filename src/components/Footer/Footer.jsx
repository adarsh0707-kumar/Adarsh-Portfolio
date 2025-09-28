import React from 'react'
import "./Footer.css"
import { FaFacebook, FaGithub, FaRegCopyright } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__icons'>
        <a
          href="https://github.com/adarsh0707-kumar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={30}
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://www.instagram.com/i_.a_k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://www.facebook.com/I.A.Kr.GUPTA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={30}
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/adarsh-kumar-657315251"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://x.com/i__a_k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter
            size={30}
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://leetcode.com/u/adarsh_07_07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode
            size={30}
            style={{ color: "white" }}
          />
        </a>

      </div>

      <div className='footer__text'>
        <p>
          <FaRegCopyright />
          2025
          <span> GodDev. </span>
          All rights reserved.
        </p>
        <p>Developed by <span> Adarsh Kumar.</span></p>
      </div>
    </div>
  )
}

export default Footer