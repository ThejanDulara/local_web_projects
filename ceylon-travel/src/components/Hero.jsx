import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(/hero-sri-lanka_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />

      {/* Content */}
      <div className="container hero-content-wrapper" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: '#fff', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
        >
          Discover Sri Lanka Beyond the Ordinary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          From misty mountains and golden coastlines to ancient kingdoms and unforgettable safaris — let us design your perfect island escape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-actions"
        >
          <a href="#tours" className="btn btn-primary">
            Explore Tours
          </a>
          <a href="#contact" className="btn btn-secondary">
            Plan Custom Trip
          </a>
        </motion.div>

        {/* Floating Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-stats-row"
        >
          {['Tailor-Made Tours', 'Trusted Local Expertise', 'Islandwide Experiences', 'Private & Group Packages'].map((stat, i) => (
            <div key={i} className="glass hero-stat-badge" style={{ fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.15)' }}>
              {stat}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hero-marquee" style={{ position: 'absolute', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          style={{ display: 'inline-block' }}
        >
          {['Ella', 'Sigiriya', 'Galle', 'Yala', 'Mirissa', 'Kandy', 'Nuwara Eliya', 'Arugam Bay', 'Ella', 'Sigiriya', 'Galle', 'Yala', 'Mirissa'].map((dest, i) => (
            <span key={i} className="hero-marquee-item" style={{ display: 'inline-block', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-serif)' }}>
              ✦ {dest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
