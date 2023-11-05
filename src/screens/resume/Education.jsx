import React from 'react';
import './education.css'; // This assumes you have a separate CSS file for the Education section.

const EducationSection = () => {
  return (
    <div className="education-section">
      <h3 className="education-title">Education</h3>
      <div className="education-item">
        <h4 className="education-degree">Bachelor of Computer Science, Major in Software Development</h4>
        <p className="education-institution">Swinburne University of Technology</p>
        <p className="education-duration">February 2021 – December 2023</p>
        <ul className="education-details">
          <li>Engaged in hands-on projects that honed problem-solving and coding skills</li>
          <li>Focused coursework on software design, application development, and system integration</li>
          <li>GPA: 3.875</li>
        </ul>
      </div>
    </div>
  );
}

export default EducationSection;
