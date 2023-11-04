import React, { useState } from 'react';
import "./resume.css";
import Education from './Education'; // These components need to be created
import Work from './Work';
import Programming from './Programming';
import { FaCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa"; 
//import Projects from './Projects';

const ResumePage = () => {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);

  const ChangeState = (stateSetter, stateValue) => {
    // Reset all states
    setEducation(false);
    setWorkHistory(false);
    setProgramming(false);
    
    // Set the desired state
    stateSetter(stateValue);
  };

  return (
    <div className="resume-outer-section d-flex flex-column" id="resume">
      <span className="about-me-text">Resume</span>
      <span className="why-text-sub">My formal Bio Details</span>
      <div className="resume-new-section row" style={{ width: "70%", marginInline: "auto" }}>
        <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row">
          <div className="d-flex flex-column bg-new text-white">
            {<FaUserGraduate/>}
            {<FaCode/>}
            {/* Icons go here */}
          </div>
          <div className="d-flex flex-column">
            {/* Navigation buttons */}
            <span className={education ? "selected resume-options-items" : "resume-options-items"} onClick={() => ChangeState(setEducation, true)}>Education</span>
            <span className={workHistory ? "selected resume-options-items" : "resume-options-items"} onClick={() => ChangeState(setWorkHistory, true)}>Work</span>
            <span className={programming ? "selected resume-options-items" : "resume-options-items"} onClick={() => ChangeState(setProgramming, true)}>Programming</span>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
          {education && <Education />}
          {workHistory && <Work />}
          {programming && <Programming />}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
