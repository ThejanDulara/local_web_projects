import React from 'react';
import { Facebook, Phone, MapPin } from 'lucide-react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo-wrapper">
                        <span className="footer-logo-text">POWERHOUSE GYM</span>
                    </div>
                    <p className="footer-tagline">Your transformation begins here 🔥</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="social-icon">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Detail</h3>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>123 Fitness Street, <br />NY 10001</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+94 714861243</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} PowerHouse Gym. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
