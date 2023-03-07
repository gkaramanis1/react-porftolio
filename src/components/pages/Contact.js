import React from 'react';
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";  

export default function Contact() {
  return (
    <div>
    <div className="background"></div>
    <div className="background background2"></div>
    <div className="background background3"></div>
    <div className="content">
      <h1 style={{fontWeight: 'bold', fontSize: '25px'}}>Contact</h1>
      <p>
        <a href="mailto:giorgokaramanis@gmail.com"><FaTelegramPlane size={32} color="whitesmoke" /></a>
        <br></br>
        <br></br>
        <a href="tel:407417497"><FaPhoneAlt size={32} color="whitesmoke"/></a>
      </p>
    </div>
    </div>
  );
}
