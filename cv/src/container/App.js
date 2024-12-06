import React, { Component, useState } from "react";
import Home from "../component/home";
import Education from "../component/Education";
import Skills from "../component/Skills";
import WorkExperience from "../component/WorkExperience";
import ContactForm from "../component/ContactForm";
import myImage from "./profile.png";
import "./App.css";

function App() {
  // Container style to position buttons horizontally in the top-right corner
  const buttonContainerStyle = {
    position: "absolute",
    top: "20px", // Adjust top position
    right: "20px", // Adjust right position
    display: "flex", // Align buttons horizontally
    gap: "20px", // Space between buttons
  };

  const [showHome, setShowHome] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [showEducation, setEducation] = useState(false);
  const [showSkills, setSkills] = useState(false);
  const [showContact, setContact] = useState(false);

  const handleHomeButtonClick = () => {
    setShowHome(true);
    setShowWorkExperience(false);
    setEducation(false);
    setSkills(false);
    setContact(false);
  };

  const handleShowExperienceButtonClick = () => {
    setShowHome(false);
    setShowWorkExperience(true);
    setEducation(false);
    setSkills(false);
    setContact(false);
  };

  const handleShowEducationButtonClick = () => {
    setShowHome(false);
    setShowWorkExperience(false);
    setEducation(true);
    setSkills(false);
    setContact(false);
  };

  const handleShowSkillsButtonClick = () => {
    setShowHome(false);
    setShowWorkExperience(false);
    setEducation(false);
    setSkills(true);
    setContact(false);
  };

  const handleShowContactButtonClick = () => {
    setShowHome(false);
    setShowWorkExperience(false);
    setEducation(false);
    setSkills(false);
    setContact(true);
  };

  return (
    <div className="funnel-display">
      <div
        className="App"
        style={{ position: "relative", height: "100vh", padding: "50px" }}
      >
        <div class="container">
          <div class="part">
            <img src={myImage} />
          </div>
          <div class="part">
            <h2>Krishna Soundararajan</h2>
            <p>A passionate Software Engineer</p>
          </div>
          <div className="part">
            <div className="buttonContainerStyle">
              <button className="buttonStyle" onClick={handleHomeButtonClick}>
                About Me
              </button>
              <button
                className="buttonStyle"
                onClick={handleShowExperienceButtonClick}
              >
                Work Experience
              </button>
              <button
                className="buttonStyle"
                onClick={handleShowEducationButtonClick}
              >
                Education
              </button>
              <button
                className="buttonStyle"
                onClick={handleShowSkillsButtonClick}
              >
                Skills
              </button>
              <button
                className="buttonStyle"
                onClick={handleShowContactButtonClick}
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div>{showHome && <Home />}</div>
        <div>{showEducation && <Education />}</div>
        <div>{showWorkExperience && <WorkExperience />}</div>
        <div>{showSkills && <Skills />}</div>
        <div>{showContact && <ContactForm />}</div>
      </div>
    </div>
  );
}

export default App;
