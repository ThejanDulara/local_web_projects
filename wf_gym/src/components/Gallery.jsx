import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const mediaItems = [
        { type: 'video', src: '/gym_vedios/Download (1).mp4', span: 'col-span-2 row-span-2' },
        { type: 'image', src: '/gym_photos/472924271_576993271990937_8095735074140284732_n.jpg', span: 'col-span-1 row-span-1' },
        { type: 'image', src: '/gym_photos/480609265_607489382274659_7877565446908135085_n.jpg', span: 'col-span-1 row-span-2' },
        { type: 'video', src: '/gym_vedios/Download (2).mp4', span: 'col-span-1 row-span-1' },
        { type: 'image', src: '/Head_coach_gym_mood.webp', span: 'col-span-2 row-span-2' },
        { type: 'image', src: '/gym_photos/474707160_589088554114742_9117868328292351712_n.jpg', span: 'col-span-1 row-span-1' },
        { type: 'video', src: '/gym_vedios/Download (4).mp4', span: 'col-span-1 row-span-1' },
        { type: 'image', src: '/gym_photos/481442737_620029274354003_7455000975184623665_n.jpg', span: 'col-span-2 row-span-2' },
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
                        The Winner <span>Experience</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                    >
                        Inside our walls, it's about pushing limits. Take a look at the energy, people, and community that make up Winner Fitness.
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
