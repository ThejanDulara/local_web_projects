import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, UserCheck, Activity, Brain, Users, Heart } from 'lucide-react';
import './Services.css';

const Services = () => {
    const servicesList = [
        {
            icon: <Dumbbell />,
            title: "Fully Equipped Gym",
            desc: "Top-tier machinery and free weights layout engineered for optimal training efficiency."
        },
        {
            icon: <UserCheck />,
            title: "Personal Training",
            desc: "Get 1-on-1 dedicated support tailored strictly to your own fitness milestones."
        },
        {
            icon: <Activity />,
            title: "Strength & Weight Training",
            desc: "Specialized zones for heavy lifting, muscle building, and endurance enhancement."
        },
        {
            icon: <Brain />,
            title: "Discipline & Motivation",
            desc: "We don't just build bodies; we build the mindset for continuous improvement."
        },
        {
            icon: <Users />,
            title: "Programs for All Levels",
            desc: "From beginners to competitive pros, our structured routines fit everyone."
        },
        {
            icon: <Heart />,
            title: "Friendly & Skilled Staff",
            desc: "A warm, supportive, and highly knowledgeable team always ready to assist."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our <span>Services</span> & Advantages
                    </motion.h2>
                    <motion.p
                        className="section-subtitle mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                    >
                        Start your health journey with confidence. We provide the tools, environment, and expert support to guarantee results.
                    </motion.p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {servicesList.map((service, index) => (
                        <motion.div key={index} className="service-card" variants={itemVariants}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Special Feature: Lady Coach Support */}
                <motion.div
                    className="lady-coach-feature"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="lady-coach-content">
                        <h3>Safe & Comfortable for Ladies</h3>
                        <p>
                            We provide a highly secure, respectful, and encouraging environment specifically focused on female fitness. Get expert guidance and train under the supervision of our professional lady coach.
                        </p>
                    </div>
                    <div className="lady-coach-image">
                        <img src="/new_photoes/lady.jpg" alt="Professional Lady Coach" loading="lazy" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
