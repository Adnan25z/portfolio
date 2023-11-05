import React from 'react';
import './work.css'; // Assuming you have a CSS file for the work section

const Work = () => {
  return (
    <div className="work-section">
      <div className="work-item">
        <h3>Software Development Intern</h3>
        <p className="work-company">Xperi - Remote Internship for a US-based company | July 2021 - October 2021</p>
        <ul>
          <li>Demonstrated proficiency in Java and Spring Boot by contributing to backend services in a microservices architecture.</li>
          <li>Collaborated in a cross-functional team to design and implement scalable features for cloud-based applications.</li>
          <li>Facilitated the migration of services to a containerized environment using Docker and Kubernetes, enhancing deployment efficiency.</li>
        </ul>
      </div>
      <div className="work-item">
        <h3>Software Engineer Intern</h3>
        <p className="work-company">Aubot - Melbourne, Australia | August 2022 - November 2022</p>
        <ul>
          <li>Developed and maintained code for robust AI-powered robotics applications, focusing on reusability and scalability.</li>
          <li>Crafted comprehensive documentation and user guides to improve software accessibility and supportability.</li>
          <li>Expanded technical skill set by training in Django for backend development and React for front-end implementations.</li>
        </ul>
      </div>
      <div className="work-item">
        <h3>Freelance Software Developer</h3>
        <p className="work-company">August 2021 - Present</p>
        <ul>
          <li>Engineered and delivered custom full-stack web solutions for various clients, leveraging JAVA, C#, and modern web frameworks.</li>
          <li>Pioneered the UI/UX design of client projects, focusing on creating intuitive and user-friendly interfaces with React.</li>
          <li>Conducted thorough testing and iteration cycles to meet client needs, achieving a 100% satisfaction rate on project deliverables.</li>
        </ul>
      </div>
      <div className="work-item">
        <h3>Event Technology Support (Volunteer)</h3>
        <p className="work-company">Australia Open - Melbourne, Australia | January 2023</p>
        <ul>
          <li>Provided technical support for event management systems, ensuring seamless operation during peak event hours.</li>
          <li>Performed data management tasks with high accuracy, utilizing MS Excel to handle participant data and results.</li>
        </ul>
      </div>
      <div className="work-item">
        <h3>Customer Service Representative</h3>
        <p className="work-company">Pancake Parlour, Werribee - Melbourne, Australia | June 2022 - December 2022</p>
        <ul>
          <li>Enhanced customer satisfaction by effectively managing reservations and streamlining order processes.</li>
          <li>Demonstrated strong teamwork and communication skills in a fast-paced environment, contributing to a record high in customer service ratings.</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;