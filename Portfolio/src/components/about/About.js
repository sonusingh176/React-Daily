import React, { useState } from "react";
import "./about.scss";
// import aboutBanner from "../Assets/about_banner2.svg";
import aboutBanner from '../Assets/about_banner.gif'

const About = () => {
  const [showfirstDiv, setshowFirstDiv] = useState(true);
  const [showSecondDiv, setshowSecondDiv] = useState(false);

  const HandleAboutSection = () => {
    setshowFirstDiv(true);
    setshowSecondDiv(false);
  };

  const HandleExperienceSection = () => {
    setshowFirstDiv(false);
    setshowSecondDiv(true);
  };

  return (
    <div className="about-container">
      <div className="box-1">
        <h2>
          All
          <span className="about-heading about-text">About</span>
          Me And My
          <span className="about-heading">Experience</span>
        </h2>
      </div>

      <div className="box-2">
        <button className="btn-style btn-Abt" onClick={HandleAboutSection}>
          About me
        </button>
        <button
          className="btn-style btn-expe"
          onClick={HandleExperienceSection}
        >
          Experience
        </button>
      </div>

      <div className="box-3">
        <div className="about-image">
          <img src={aboutBanner} alt="about-banner" />
        </div>
        {showfirstDiv && (
          <div className="about-text">
            <ul>
              <li>
                Hello! My name is Sonu kumar Singh. I am from Patna ,BIHAR. I
                enjoy creating things that live on the internet. I'm a
                passionate Developer, with strong administrative & communication
                skills, good attention to detail & the ability to write
                efficient code.
              </li>

              <li>
                I have done my BCA from Magadh University,Bodhgaya.I have also
                completed my Full-Stack Web Development course, from MASAI
                SCHOOL.
              </li>
            </ul>
          </div>
        )}
        
        {showSecondDiv && (
          <div className="about-text">
            <ul>
              <li>
                "Highly motivated web developer with 6 months of experience in
                front-end and back-end development. Skilled in HTML,CSS,
                Javascript,React,Node.js and Express. Strong problem-solving
                abilities and a passion for creating user-friendly website and
                applications."
              </li>
          
              <li>
                Knowledge of Back-end development using Node.js and Express js
                and Experience with databases such as MongoDB ,MySQL
              </li>
          
              <li>Familiarity with version control using Git and GitHub.</li>
          
             
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default About;
