import React from 'react'
import './header.css'
import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <div className='main-info'>
        <h1>What am I?</h1>
        <Typewriter
  options={{
    strings: ["A Software Developer", "A Student", "or!", '"A Coder"'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
  )
}

export default Header