import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">

                {/* Left Side: Image / Media */}
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/gym_inside.webp"
                        alt="Winner Fitness Interior"
                        className="about-image"
                        loading="lazy"
                    />
                    <div className="about-image-decoration"></div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="section-title">
                        About <span>Winner</span> Fitness
                    </h2>
                    <p className="about-description">
                        Step into a space engineered for your success. At Winner Fitness, we believe strongly in the power of discipline, motivation, and long-term health improvement. We aren't just a gym; we are your ultimate partner in crafting a stronger, healthier you.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="feature-text">
                                <h3>Prime Location</h3>
                                <p>Located at 320/9/1 Deniya Junction, Piliyandala.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="feature-text">
                                <h3>Professional Support</h3>
                                <p>Expert guidance in a welcoming, confident environment.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <Target size={24} />
                            </div>
                            <div className="feature-text">
                                <h3>Goal Oriented</h3>
                                <p>Structured programs focused strictly on tangible results.</p>
                            </div>
                        </div>
                    </div>

                    <a href="#services" className="btn btn-primary mt-4">Explore Our Services</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
