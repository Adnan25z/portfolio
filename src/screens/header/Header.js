import React from 'react';
import './header.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter' 

function Header() {
  const [typeEffect] = useTypewriter({
      words: ["Developer", "Student",'"Coder"'],
      loop:{},
      typeSpeed:100,
      deleteSpeed: 40
  });
  
  // Function to display the resume in a popup/modal
  const displayResume = () => {
      window.open(process.env.PUBLIC_URL + '/Resume_Adnan.pdf', '_blank', 'width=800,height=600');;
  };

  return (
      <div className='main-info'>
          <div className="slant-header">
            <h1 className="particle">I am a</h1>
            <span className='particle'>{typeEffect}</span>
          </div>
          <div className="button-container">
            <a href= {process.env.PUBLIC_URL + "/Resume_Adnan.pdf"} download className="btnRes btn-download">Download Resume</a>
            <button onClick={displayResume} className="btnRes btn-view">View Resume</button>
          </div>
      </div>
  );
}

export default Header;
