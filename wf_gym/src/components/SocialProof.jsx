import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import './SocialProof.css';

const SocialProof = () => {
    const testimonials = [
        {
            name: "Kasun P.",
            role: "Member since 2023",
            text: "The best fitness center in NY, hands down. The equipment is top-notch, and the trainers actually care about your progress. Transformation is guaranteed if you put in the work."
        },
        {
            name: "Nadeesha M.",
            role: "Member since 2024",
            text: "As a female, finding a gym where I feel completely comfortable was hard until I found PowerHouse Gym. The lady coach is amazing, and the environment is extremely supportive."
        },
        {
            name: "Chamara D.",
            role: "Member since 2022",
            text: "PowerHouse Gym changed my life. They don't just teach you how to lift; they teach you discipline. The mindset shift I experienced here translates into everything I do."
        }
    ];

    return (
        <section className="social-proof-section">
            <div className="container">
                <div className="text-center proof-header">
                    <motion.div
                        className="badges-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Star className="text-primary fill-primary" size={24} />
                        <Star className="text-primary fill-primary" size={24} />
                        <Star className="text-primary fill-primary" size={24} />
                        <Star className="text-primary fill-primary" size={24} />
                        <Star className="text-primary fill-primary" size={24} />
                    </motion.div>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                    >
                        Our Community's <span>Commitment</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                    >
                        Don't just take our word for it. Listen to the members who have transformed their lives, built relentless discipline, and continuously pursue greatness at PowerHouse Gym.
                    </motion.p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <MessageSquareQuote size={40} className="quote-icon" />
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.name[0]}</div>
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
