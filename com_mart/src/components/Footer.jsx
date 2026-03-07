import { Phone, MapPin, Facebook, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="section-container">
                <div className="footer-grid">

                    <div className="footer-brand animate-fade-in-up">
                        <a href="#" className="footer-logo">
                            <span className="logo-text">Tech <span>Haven</span></span>
                        </a>
                        <p className="footer-about">
                            Your trusted partner for the ultimate tech retail experience.
                            We provide high-quality mobile accessories at unbeatably low prices.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group animate-fade-in-up delay-100">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#why-us">Why Shop With Us</a></li>
                            <li><a href="#locations">Store Locations</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group animate-fade-in-up delay-200">
                        <h4 className="footer-heading">Categories</h4>
                        <ul className="footer-links">
                            <li><a href="#categories">Phone Covers</a></li>
                            <li><a href="#categories">Audio & Headphones</a></li>
                            <li><a href="#categories">Screen Protectors</a></li>
                            <li><a href="#categories">Power & Cables</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact animate-fade-in-up delay-300">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Colombo 03 | Kandy</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <a href="https://wa.me/94714861243" target="_blank" rel="noreferrer">+94 71 486 1243 (WhatsApp)</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tech Haven. All rights reserved.</p>
                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
