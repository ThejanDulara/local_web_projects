import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, ShieldAlert } from 'lucide-react';
import './OpeningHours.css';

const OpeningHours = () => {
    return (
        <section className="opening-hours-section">
            <div className="container hours-container">

                <motion.div
                    className="hours-text-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="open-badge">
                        <span className="pulse-dot"></span> OPEN 365 DAYS
                    </div>

                    <h2 className="section-title">
                        Train <span className="text-gradient">Any Day</span> <br /> of the Year
                    </h2>

                    <p className="hours-subtitle">
                        Consistency is the cornerstone of progress. We’re open when you are. Never miss a training session, regardless of the calendar.
                    </p>
                </motion.div>

                <motion.div
                    className="hours-card-container"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hours-card">

                        <div className="time-slot">
                            <div className="day-name">
                                <CalendarDays size={20} className="icon-gold" />
                                <span>Monday – Friday</span>
                            </div>
                            <div className="time-value">
                                <Clock size={16} />
                                <span>5:30 AM – 10:30 PM</span>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div className="time-slot">
                            <div className="day-name">
                                <CalendarDays size={20} className="icon-gold" />
                                <span>Saturday</span>
                            </div>
                            <div className="time-value">
                                <Clock size={16} />
                                <span>6:00 AM – 10:30 PM</span>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div className="time-slot">
                            <div className="day-name">
                                <ShieldAlert size={20} className="icon-gold" />
                                <span>Sunday / Poya Day</span>
                            </div>
                            <div className="time-value">
                                <Clock size={16} />
                                <span>8:00 AM – 6:00 PM</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpeningHours;
