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
				<h1 className="page-header">My Resume</h1>
			</div>
      <h4>What I have learned...So far!</h4>
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
			<a href={require("../assets/resume.pdf")} download>
					<h3>Download My Resume<FaDownload /></h3>
			</a>	
			</div>
			</section>
      </p>
    </div>
    </div>
    
	);
}

