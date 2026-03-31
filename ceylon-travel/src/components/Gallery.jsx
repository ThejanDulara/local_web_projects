import { motion } from 'framer-motion';

const images = [
  { src: '/gallery-1.jpg', size: 'large' },
  { src: '/travel-luxury-ai-1.jpg', size: 'small' },
  { src: '/gallery-3.jpg', size: 'small' },
  { src: '/travel-lifestyle-ai-2.jpg', size: 'medium' },
  { src: '/gallery-6.jpg', size: 'small' },
  { src: '/gallery-7.jpg', size: 'small' },
  { src: '/travel-luxury-ai-2.jpg', size: 'large' },
  { src: '/gallery-8.jpg', size: 'small' }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--c-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Story</span>
          <h2>Moments from the Island</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--c-gray-600)' }}>
            Glimpses of paradise waiting to be explored.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gridAutoRows: '250px',
          gap: '1rem',
          gridAutoFlow: 'dense'
        }}>
          {images.map((img, i) => {
            const rowSpan = img.size === 'large' ? 2 : 1;
            const colSpan = img.size === 'large' ? 2 : 1;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                style={{
                  gridRowEnd: `span ${rowSpan}`,
                  gridColumnEnd: `span ${colSpan}`,
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                className="card-hover"
              >
                <img 
                  src={img.src} 
                  alt="Gallery item"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
