import React from 'react';
import './Footer.css';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <h3>Adnan Zafar</h3>
                <ul className="footer-links">
                    <li><a href="https://www.linkedin.com/in/adnan2510" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">LinkedIn <BsLinkedin/></a></li>
                    <li><a href="https://github.com/Adnan25z" target="_blank" rel="noopener noreferrer" title="Check my work on GitHub">GitHub <BsGithub/></a></li>
                    <li><a href="mailto:adnanzafar2001@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact me via e-mail">E-mail <MdOutlineAttachEmail/></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
