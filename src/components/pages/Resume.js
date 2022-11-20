import React from "react";

function Resume() {
  return (
    <>
      <a href="/thiviya-siva-resume.pdf" download>
        Click here to download a copy of my resume!
      </a>

      <section>
        <h1>Front-end proficiencies </h1>

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
        <h1>Back-end proficiencies </h1>
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
    </>
  );
}

export default Resume;
