import { motion } from 'framer-motion';
import { Map, Users, Shield, Compass, HeartHandshake, Smile } from 'lucide-react';

const reasons = [
  {
    icon: <Map size={32} color="var(--c-orange)" />,
    title: 'Tailor-Made Itineraries',
    desc: 'Every trip is thoughtfully designed around your travel style, budget, and dream destinations.'
  },
  {
    icon: <Compass size={32} color="var(--c-orange)" />,
    title: 'Local Sri Lankan Expertise',
    desc: 'Discover the island with insights, routes, and hidden gems only locals truly know.'
  },
  {
    icon: <Shield size={32} color="var(--c-orange)" />,
    title: 'Comfort & Convenience',
    desc: 'From airport pickup to curated stays and transport, we simplify every step of your journey.'
  },
  {
    icon: <Smile size={32} color="var(--c-orange)" />,
    title: 'Authentic Experiences',
    desc: 'Enjoy more than sightseeing with real cultural, culinary, nature, and local lifestyle experiences.'
  },
  {
    icon: <Users size={32} color="var(--c-orange)" />,
    title: 'Private & Group Tours',
    desc: 'Whether you travel solo, as a couple, with family, or in a group, we shape the journey around you.'
  },
  {
    icon: <HeartHandshake size={32} color="var(--c-orange)" />,
    title: 'Fast & Friendly Support',
    desc: 'Our team is here to help you plan, adjust, and enjoy your Sri Lankan adventure with confidence.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--c-blue)', color: 'var(--c-white)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,128,128,0.2) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header">
          <span className="section-subtitle" style={{ color: 'var(--c-orange)' }}>Our Promise</span>
          <h2 style={{ color: 'var(--c-white)' }}>Why Travel With Ceylon Trailscape</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
            We don't just plan trips; we craft unforgettable stories and lifelong memories.
          </p>
        </div>

        <div className="grid-3">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ color: 'var(--c-white)', fontSize: '1.25rem', margin: 0 }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
