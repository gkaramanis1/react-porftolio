import React from 'react';
import { FaDownload } from "react-icons/fa";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div>
    <div className="background"></div>
    <div className="background background2"></div>
    <div className="background background3"></div>
    <div className="content">
      <p>
      <section>
			<div className="center">
				<h1 className="page-header" style={{fontWeight: 'bold', fontSize: '25px'}}>Skills:</h1>
			</div>
        <ul>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Git</li>
          <li>MySQL</li>
          <li>REST APIs</li>
        </ul>
			<div className="download">
			<a href={require("../assets/resume.pdf")} download style={{textDecoration: 'none'}}>
					<h3>Download My Resume <FaDownload /></h3>
			</a>	
			</div>
			</section>
      </p>
    </div>
    </div>
    
	);
}

