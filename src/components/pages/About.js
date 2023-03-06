import React from "react";
import "../styles/About.css";

const profile =require('../assets/profile.png');

export default function About() {
  return (
    <div>
    <div className="background"></div>
    <div className="background background2"></div>
    <div className="background background3"></div>
    <div className="content">
      <h1 style={{fontWeight: 'bold', fontSize: '25px'}}>Hi! I'm George Karamanis</h1>
      <img src={profile} alt="Profile" className="profile" />
      <p className="bio">
        I'm a Full Stack developer that got a certificate from the University of Central Florida coding bootcamp. I'm also an UCF alumni with a Bachelor of Science in Kinesiology. Go Knights! Trying to improve and learn new skills that can be applied to my professional goals is something that I focus on daily. When I'm away from my desk, I enjoy going on runs, playing basketball, and spending time with my family.
      </p>
    </div>
    </div>
  );
}
