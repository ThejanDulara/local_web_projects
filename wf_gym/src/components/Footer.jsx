import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import './Footer.css';

// TikTok Icon Custom SVG
const TikTokIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path>
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo-wrapper">
                        <img src="/logo.jpg" alt="Winner Fitness Logo" className="footer-logo" />
                        <span className="footer-logo-text">WINNER FITNESS</span>
                    </div>
                    <p className="footer-tagline">Re-write your health story 💪</p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/winner.fitness" target="_blank" rel="noreferrer" className="social-icon">
                            <Instagram size={20} />
                        </a>
                        <a href="https://web.facebook.com/winnerfitnesspiliyandala" target="_blank" rel="noreferrer" className="social-icon">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.tiktok.com/@winnerfitness30" target="_blank" rel="noreferrer" className="social-icon">
                            <TikTokIcon size={20} />
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
                            <span>320/9/1 Deniya Junction, <br />Piliyandala</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>077 004 2579</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Winner Fitness. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
