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
      <h2>Skills</h2>
      <ul>
        <li>
          <h4>Technical</h4>
          <ul>
            <li>Java, Python, React, C++, Shell scripting, SQL</li>
            <li>Unit, Integration and Functional Test, SonarQube, Jmeter</li>
            <li>Arc42 Documentation, Docker Container, Kubernetes, Helm</li>
            <li>Scikit Learn, LibSVM, Prophet, Keras</li>
            <li>JSON, XML, REST API</li>
            <li>Windows, Linux, Mac</li>
            <li>Git, GitLab, SVN, JIRA, Bitbucket</li>
            <li>
              Jenkins, Gitlab for Automation, Enterprise Architect for UML
              Diagram
            </li>
            <li>ELK Stack, Grafana</li>
          </ul>
        </li>
        <li>
          <h4>Communication</h4>
          <ul>
            <li>English - Fluent</li>
            <li>German - Working Proficiency (C1)</li>
            <li>Tamil - Fluent</li>
          </ul>
        </li>
        <li>
          <h4>Publication</h4>
          <ul>
            <li>
              <a
                href="https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12623"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learning Probabilistic Transfer Functions: A Comparative Study
                of Classifiers
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Certifications</h4>
          <ul>
            <li>International Association of Project Managers</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Education;
