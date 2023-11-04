import React from 'react';
import './aboutMe.css';
import me from '../../images/me.png';

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={me} alt="my_image" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          Hello! I'm Adnan Zafar, a soon-to-be Computer Science graduate specializing in Software Development. My academic journey has been a blend of rigorous coursework and practical projects, where I've nurtured a knack for crafting elegant software solutions. What drives me is the magic of turning ideas into reality through code—whether it's streamlining processes, enhancing user experiences, or exploring the limitless potential of AI and machine learning.
          Beyond my studies, I've thrived in internships and freelance roles where my contributions span from building full-stack applications to designing intuitive user interfaces. My toolbox is filled with languages and frameworks like Java, Spring Boot, C#, and React, but my learning appetite is insatiable—I'm always exploring new technologies and methodologies to enhance my craft.
          When I'm not immersed in coding, I indulge in a good book, a game of chess, or a trail run. I believe in balance and bringing a sense of purpose and passion to everything I do. I'm on the lookout for opportunities to join a team where I can continue to grow, contribute, and make a meaningful impact. Let's connect and create something remarkable!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;