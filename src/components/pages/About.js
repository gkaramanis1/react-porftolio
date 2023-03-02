import React from "react";
import "../styles/About.css";

const profile =require('../assets/profile.png');

export default function About() {
  return (
    <div>
      <h1>Hi! I'm George Karamanis</h1>
      <img src={profile} alt="Profile"/>
      <p>
        My name is George Karamanis. I have a Bachelor of Science in Kinesiology
        and I am currently a Full Stack Coding Bootcamp student at the
        University of Central Florida. This program has taught me how to work
        and learn in a fast-paced environment, as well as being team-oriented. I
        am always trying to improve and learn new skills that can be applied to
        my professional goals.
      </p>
    </div>
  );
}
