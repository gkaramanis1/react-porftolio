import React from 'react';
import "./styles/Footer.css"
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";  

function Footer() {
return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/gkaramanis1" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://linkedin.com/in/georgekaramanis" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/giorgokaramanis" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;