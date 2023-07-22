import React from 'react';
import './aboutMe.css';
import me from '../../images/me.png';

function AboutMe() {
  return (
    <div className="about__container" id="about-m">
      <div>
        <img src={me} alt="my_image" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
          tincidunt massa, eu tristique dolor maximus id. Duis quis nulla
          vestibulum, venenatis tortor ac, convallis elit. Fusce auctor nunc eu
          sem faucibus, id dignissim purus scelerisque.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;