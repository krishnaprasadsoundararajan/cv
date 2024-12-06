import React from "react";
import "./Component.css";
import "../container/App.css";

function Home() {
  return (
    <div className="componentStyle">
      <h2>Introduction</h2>
      <p>
        Hi, I’m Krishna Soundararajan, a software developer with over 10 years
        of experience building innovative and high performance applications.
        Throughout my career, I’ve developed a deep passion for problem-solving,
        creating seamless user experiences, and writing maintainable, scalable
        code.
      </p>
      <p>
        I specialize in full-stack development, having worked with a wide range
        of technologies. Whether it’s building a web application from scratch,
        optimizing existing systems, or leading technical teams, I bring a
        strategic and user-focused approach to every project.
      </p>
      <p>
        <ul>
          <li>
            Key Strengths: Full-Stack Development: Expertise in both front-end
            and back-end technologies.
          </li>
          <li>
            Scalable Architecture: Designing systems that grow with the needs of
            the business.
          </li>
          <li>
            Team Leadership & Mentorship: Leading development teams and
            fostering collaboration.
          </li>
          <li>
            Agile Development: Extensive experience working in agile
            environments to deliver iterative and impactful solutions.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
