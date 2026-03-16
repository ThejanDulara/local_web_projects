import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const mediaItems = [
        { type: 'image', src: '/new_photoes/multi_gym_banner.jpg', span: 'col-span-2 row-span-2' },
        { type: 'image', src: '/new_photoes/Gym-Workout-Plans-for-Beginners-Upper-Body-Strength-scaled.jpg', span: 'col-span-1 row-span-1' },
        { type: 'image', src: '/new_photoes/Man-training-in-one-of-the-body-building-gyms-1080x675.jpg', span: 'col-span-1 row-span-2' },
        { type: 'image', src: '/new_photoes/istockphoto-2075354173-612x612.jpg', span: 'col-span-1 row-span-1' },
        { type: 'image', src: '/new_photoes/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1.jpg', span: 'col-span-2 row-span-2' },
        { type: 'image', src: '/new_photoes/GYM-INTERIORS-FEATURE-compressed.jpg', span: 'col-span-2 row-span-2' },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="text-center gallery-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The PowerHouse <span>Experience</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                    >
                        Inside our walls, it's about pushing limits. Take a look at the energy, people, and community that make up PowerHouse Gym.
                    </motion.p>
                </div>

                <div className="bento-gallery">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-item ${item.span}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="gallery-inner">
                                {item.type === 'image' ? (
                                    <img src={item.src} alt={`Gym Action ${index + 1}`} loading="lazy" />
                                ) : (
                                    <>
                                        <video
                                            src={item.src}
                                            className="gallery-video"
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={e => e.target.play()}
                                            onMouseOut={e => e.target.pause()}
                                        />
                                        <div className="video-overlay-icon">
                                            <Play size={32} />
                                        </div>
                                    </>
                                )}
                                <div className="gallery-overlay"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
