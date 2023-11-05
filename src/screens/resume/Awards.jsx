import React from 'react';
import './awards.css'; // This assumes you have a separate CSS file for the Awards section.

const AwardsSection = () => {
  return (
    <div className="awards-section">
      <h3 className="awards-title">Awards</h3>
      <div className="award-item">
        <h4 className="award-name">SWINBURNE EMERGING LEADER</h4>
        <p className="award-description">
          Esteemed recognition awarded for demonstrated leadership in areas of campus participation,
          career development, global citizenship, industry experience, and sustainability. This
          acknowledgment reflects the commitment to active involvement in campus life, professional
          competence growth, cross-cultural understanding, practical industry application, and
          contribution towards a sustainable future.
        </p>
      </div>
      <div className="award-item">
        <h4 className="award-name">LETTER OF COMMENDATION</h4>
        <p className="award-description">
          Recognition for achieving an almost perfect GPA of 3.875.
        </p>
      </div>
      <div className="award-item">
        <h4 className="award-name">SWINBURNE INTERNATIONAL EXCELLENCE SCHOLARSHIP HOLDER</h4>
        <p className="award-description">
          Awarded 50% Scholarship based on high school academic grades.
        </p>
      </div>
    </div>
  );
}

export default AwardsSection;