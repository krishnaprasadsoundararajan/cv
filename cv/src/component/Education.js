import React, { useState } from "react";
import "./Component.css";

function Education() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the component's open/closed state
  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="componentStyle">
      <h2>Education</h2>
      <ul>
        <li>
          <h4>
            Master of Science (Mediat Informatics), RWTH Aachen University,
            Aachen (Germany)
          </h4>
          <h5>09/2012 to 09/2014</h5>
          <h6>Outstanding Performance with CGPA 1.5</h6>
          <button className="buttonStyle" onClick={toggleComponent}>
            {isOpen ? "Close" : "More"}
          </button>
          {isOpen && (
            <div>
              <ul>
                <li>
                  <h6>
                    Random Forests for Stroke-Based Design of high dimensional
                    transfer function
                  </h6>
                  During my Masters thesis, I worked in the field of scientific
                  visualization for medical science and machine learning.
                  Extended the idea of designing high dimensional transfer
                  functions. Published a research paper in the EuroVis
                  conference based on my master thesis.
                </li>
                <li>
                  <h6>Media Computing Project</h6>
                  Developed an iPhone game during which I gained immense
                  experience in design principles for the interface development.
                  I also had an opportunity to discover and work on various
                  mobile functionalities such as gestures and usage of various
                  sensors in the mobile development.
                </li>
                <li>
                  <h6>Computer Supported Co operative Work</h6>
                  In this project, I learned about the remote collaboration.
                  Developed a prototype game explaining the problems and
                  solutions during remote collaboration.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <h4>
            Bachelor of Technology, Computer Science, Amrita University,
            Coimbatore (India)
          </h4>
          <h5>07/2007 to 07/2011</h5>
          <h6>CGPA 8.81/10</h6>
        </li>
        <li>
          <h4>Erasmus Mundus Exchange Student</h4>
          <h5>Politecnico Di Milano, Milan (Italy)</h5>
        </li>
      </ul>
    </div>
  );
}

export default Education;
