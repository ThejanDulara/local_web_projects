import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--c-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Our Story</span>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
              Crafting Meaningful Journeys Across Sri Lanka
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--c-gray-600)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              At Ceylon Trailscape, we believe travel should feel personal, inspiring, and unforgettable. Our mission is to help travelers experience the very best of Sri Lanka — from iconic landmarks and hidden gems to warm hospitality and authentic local moments.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--c-gray-600)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Whether you're seeking romance, adventure, culture, or pure relaxation, we design journeys that feel effortless and extraordinary.
            </p>
            
            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { count: '500+', label: 'Happy Travelers' },
                { count: '25+', label: 'Curated Routes' },
                { count: '8+', label: 'Signature Experiences' },
              ].map((stat, i) => (
                <div key={i} style={{ flex: '1 1 auto' }}>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--c-orange)', fontWeight: 600, lineHeight: 1 }}>
                    {stat.count}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--c-gray-600)', fontWeight: 500, marginTop: '0.5rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative' }}
          >
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', alignSelf: 'end' }}>
              <img src="/travel-lifestyle-ai-1.jpg" alt="Travel Planning" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', alignSelf: 'start', transform: 'translateY(2rem)' }}>
              <img src="/hero-luxury-travel-ai.jpg" alt="Luxury Travel" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
