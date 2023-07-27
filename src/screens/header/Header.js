import React from 'react';
import './header.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter' 

function Header() {
  const [typeEffect] = useTypewriter({
    words: ["Software Developer", "Student",'"Coder"'],
    loop:{},
    typeSpeed:100,
    deleteSpeed: 40
  })
  return (
    <div className='main-info'>
      <div className="slant-header">
        <h1 className="particle">I am a</h1>
        <span className='particle'>{typeEffect}</span>
      </div>
    </div>
  );
}

export default Header;
