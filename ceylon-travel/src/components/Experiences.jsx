import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Scenic Train Journeys',
    desc: 'Watch the island unfold through misty mountains, emerald valleys, and timeless railway routes that turn every ride into a memory.',
    img: '/train-journey.jpg',
    reversed: false
  },
  {
    title: 'Wildlife Safaris',
    desc: 'Venture into Sri Lanka’s wild heart to witness majestic elephants, elusive leopards, and landscapes untouched by time.',
    img: '/safari-jeep.jpg',
    reversed: true
  },
  {
    title: 'Beach Escapes',
    desc: 'Relax on palm-fringed shores, enjoy ocean sunsets, and wake up to the rhythm of Sri Lanka’s southern and eastern coasts.',
    img: '/beach-sunset.jpg',
    reversed: false
  },
  {
    title: 'Tea Plantation Trails',
    desc: 'Wander through the rolling green hills of the highlands, discover the art of Ceylon tea, and breathe in the crisp mountain air.',
    img: '/tea-picker.jpg',
    reversed: true
  }
];

const Experiences = () => {
  return (
    <section id="experiences" className="section" style={{ backgroundColor: 'var(--c-ivory)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Moments That Matter</span>
          <h2>Travel Through Experiences, Not Just Places</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--c-gray-600)' }}>
            Dive deeper into the soul of Sri Lanka with curated activities designed to connect you with nature, culture, and adventure.
          </p>
        </div>

        <div className="gap-responsive-lg" style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="gap-responsive"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                alignItems: 'center',
                direction: exp.reversed ? 'rtl' : 'ltr'
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: exp.reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                style={{ direction: 'ltr' }}
              >
                <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                  <img src={exp.img} alt={exp.title} style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: exp.reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--c-blue)' }}>{exp.title}</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--c-gray-600)', marginBottom: '2rem', lineHeight: 1.8 }}>
                  {exp.desc}
                </p>
                <a href="#contact" className="btn btn-outline" style={{ padding: '0.8rem 2rem', display: 'inline-block', textDecoration: 'none' }}>
                  Discover More
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
