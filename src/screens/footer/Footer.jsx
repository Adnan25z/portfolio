import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <h3>Your Name</h3>
                <ul className="footer-links">
                    <li><a href="#link1">Link 1</a></li>
                    <li><a href="#link2">Link 2</a></li>
                    <li><a href="#link3">Link 3</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
