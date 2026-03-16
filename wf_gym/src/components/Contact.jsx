import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Navigation, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Start Your <br /> <span>Journey</span> Today
                    </h2>
                    <p className="section-subtitle">
                        Don't wait for tomorrow. Your health story starts now. Get in touch, visit us, or simply drop a message.
                    </p>

                    <div className="contact-details">
                        <a href="tel:+94714861243" className="contact-item">
                            <div className="contact-icon phone">
                                <Phone size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Call Us</h3>
                                <p>+94 714861243</p>
                            </div>
                        </a>

                        <a href="https://wa.me/94714861243" target="_blank" rel="noreferrer" className="contact-item">
                            <div className="contact-icon whatsapp">
                                <MessageCircle size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>WhatsApp</h3>
                                <p>+94 714861243</p>
                            </div>
                        </a>

                        <div className="contact-item">
                            <div className="contact-icon location">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Location</h3>
                                <p>123 Fitness Street, NY 10001</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.google.com/?q=123+Fitness+Street,+NY+10001"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        Get Directions <Navigation size={20} />
                    </a>
                </motion.div>

                <motion.div
                    className="contact-media"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-stack">
                        <img
                            src="/new_photoes/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1.jpg"
                            alt="PowerHouse Gym Work"
                            className="stack-image img-top"
                            loading="lazy"
                        />
                        <div className="stack-decoration"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
