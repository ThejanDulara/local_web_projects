import { motion } from 'framer-motion';

const tours = [
  {
    id: 1,
    title: 'Classic Sri Lanka Escape',
    duration: '8 Days / 7 Nights',
    desc: 'Explore Sigiriya, Kandy, Nuwara Eliya, Ella, and the southern coast in one unforgettable island circuit.',
    img: '/train-journey.jpg',
    badge: 'Popular'
  },
  {
    id: 2,
    title: 'Romantic Honeymoon in Paradise',
    duration: '6 Days / 5 Nights',
    desc: 'Private beach stays, candlelit coastal evenings, scenic hill country, and curated romantic experiences.',
    img: '/honeymoon-ai.jpg',
    badge: 'Couples'
  },
  {
    id: 3,
    title: 'Wild & Coastal Adventure',
    duration: '7 Days / 6 Nights',
    desc: 'A thrilling journey through Yala safaris, surfing escapes, whale watching, and tropical beach destinations.',
    img: '/safari-jeep.jpg',
    badge: 'Adventure'
  },
  {
    id: 4,
    title: 'Culture & Heritage Trail',
    duration: '5 Days / 4 Nights',
    desc: 'Ancient cities, sacred temples, royal history, and timeless traditions brought to life through authentic local travel.',
    img: '/temple-of-tooth.jpg',
    badge: 'Culture'
  },
  {
    id: 5,
    title: 'Tea Country & Scenic Rail Journey',
    duration: '4 Days / 3 Nights',
    desc: 'Travel through misty tea plantations, charming hill stations, and iconic railway landscapes.',
    img: '/tea-plantation.jpeg',
    badge: 'Scenic'
  },
  {
    id: 6,
    title: 'Family Fun Island Tour',
    duration: '7 Days / 6 Nights',
    desc: 'A balanced travel experience with wildlife, beaches, heritage, and family-friendly comfort.',
    img: '/beach-sunset.jpg',
    badge: 'Family'
  }
];

const Tours = () => {
  return (
    <section id="tours" className="section" style={{ backgroundColor: 'var(--c-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curated Itineraries</span>
          <h2>Featured Sri Lanka Journeys</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--c-gray-600)' }}>
            Expertly crafted packages designed to give you the most unforgettable island experience.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="grid-auto-fit">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover"
              style={{
                backgroundColor: 'var(--c-ivory)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: '240px' }}>
                <img 
                  src={tour.img} 
                  alt={tour.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '1.2rem',
                  left: '1.2rem',
                  background: 'var(--c-orange)',
                  color: 'var(--c-white)',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {tour.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-card" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: 'var(--c-teal)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {tour.duration}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-blue)' }}>{tour.title}</h3>
                <p style={{ color: 'var(--c-gray-600)', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {tour.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  <a href="#contact" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', textAlign: 'center', width: '100%', maxWidth: '300px' }}>Inquire Now</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
