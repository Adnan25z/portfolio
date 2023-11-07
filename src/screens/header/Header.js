import React from 'react';
import './header.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Header() {
  const [typeEffect] = useTypewriter({
    words: ["Developer", "Designer", "Coder"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  // Check if the user is on a mobile device
  const isMobileDevice = () => {
    return (
      /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  };

  return (
    <div className='main-info'>
      <h1 className="particle">I am a</h1>
      <span className='particle'>{typeEffect}<Cursor /></span>
      <div className="button-container">
        <a href={process.env.PUBLIC_URL + "/Resume_Adnan.pdf"} download className="btnRes btn-download">Download Resume</a>
        {!isMobileDevice() && (
          <button onClick={() => window.open(process.env.PUBLIC_URL + '/Resume_Adnan.pdf', '_blank')} className="btnRes btn-view">View Resume</button>
        )}
      </div>
    </div>
  );
}

export default Header;
