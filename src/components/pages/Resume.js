import React from "react";

function Resume() {
  return (
    <>
      <div class="resumeSection">
        <h1>Resume</h1>
        <a href="/thiviya-siva-resume.pdf" download>
          Click here to download a copy of my resume!
        </a>

        <section>
          <h2>Front-end Proficiencies </h2>

          <ul>
            <li>HTML</li>
            <li> CSS</li>
            <li> Javascript </li>
            <li> Bootstrap</li>
            <li> React</li>
            <li> JQuery </li>
            <li> Responsive design </li>
          </ul>
        </section>
        <section>
          <h2>Back-end Proficiencies </h2>
          <ul>
            <li> APIs </li>
            <li> Node </li>
            <li> Express </li>
            <li> MySQL & Sequelize </li>
            <li> MongoDB & Mongoose</li>
            <li> REST</li>
            <li> GraphSQL </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Resume;
