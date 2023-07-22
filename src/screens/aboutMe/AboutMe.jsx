import React from 'react'
import './aboutMe.css'
import me from '../../images/me.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-m">
        <div>
            <img src={me} alt="my_image"/>
        </div>
        <div className="about__text">
            <h1>ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default AboutMe