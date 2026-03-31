import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily & Daniel, UK',
    text: "Sri Lanka completely stole our hearts. Every part of the journey felt smooth, personal, and beautifully curated. The attention to detail was incredible.",
    type: 'Honeymoon Tour'
  },
  {
    name: 'Nadia, UAE',
    text: "From Ella to Mirissa, everything was thoughtfully planned. It felt like a luxury experience without losing the local charm and authenticity.",
    type: 'Private Tour'
  },
  {
    name: 'Arjun & Family, India',
    text: "The kids loved the safari, we loved the hill country, and the whole trip felt stress-free from start to finish. Highly recommend Ceylon Trailscape!",
    type: 'Family Safari & Beach'
  }
];

const Testimonials = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--c-sand)', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-subtitle">Stories from Our Travelers</span>
          <h2>Hear What They Say</h2>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: 'var(--c-white)',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-md)'
              }}
              className="card-hover"
            >
              <div style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '2rem',
                fontSize: '4rem',
                color: 'var(--c-orange)',
                fontFamily: 'var(--font-serif)',
                height: '3rem',
                lineHeight: 1
              }}>
                "
              </div>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--c-gray-800)',
                fontStyle: 'italic',
                marginBottom: '2rem',
                marginTop: '1rem',
                lineHeight: 1.7
              }}>
                {t.text}
              </p>
              <div>
                <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--c-blue)', fontSize: '1.1rem' }}>{t.name}</h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--c-teal)', fontWeight: 500 }}>{t.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
