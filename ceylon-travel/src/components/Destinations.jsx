import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Sigiriya',
    desc: 'Rise above the jungle to witness the iconic Lion Rock, ancient frescoes, royal gardens, and one of Sri Lanka’s most unforgettable sunrise views. Known as the Eighth Wonder of the World, this ancient rock fortress offers an incredible blend of history, engineering, and natural beauty. Exploring the water gardens, the mirror wall, and the summit ruins provides an awe-inspiring look into Sri Lanka’s past.',
    img: '/sigiriya.jpg',
    badge: 'Cultural Gem'
  },
  {
    id: 2,
    name: 'Ella',
    desc: 'A hill country escape filled with tea-covered mountains, scenic train rides, waterfalls, and the world-famous Nine Arch Bridge. Ella offers a relaxing yet adventurous vibe, perfect for hiking to Little Adam’s Peak, wandering through endless tea estates, and enjoying fresh mountain air. This destination is a favorite for nature lovers and those seeking breathtaking panoramic views.',
    img: '/ella.jpg',
    badge: 'Nature'
  },
  {
    id: 3,
    name: 'Kandy',
    desc: 'A cultural heartland where sacred temples, serene lakes, traditional arts, and timeless Sri Lankan heritage come together beautifully. Home to the illustrious Temple of the Sacred Tooth Relic and the expansive Royal Botanical Gardens, Kandy is surrounded by mist-covered hills and a rich history that resonates in its vibrant cultural dances and festivals.',
    img: '/kandy.jpg',
    badge: 'Heritage'
  },
  {
    id: 4,
    name: 'Galle',
    desc: 'Walk through charming colonial streets, oceanfront fort walls, boutique cafés, and coastal sunsets in Sri Lanka’s most stylish seaside city. Galle Fort, a UNESCO World Heritage site, is a beautifully preserved colonial town offering a blend of European architecture and South Asian traditions. It is perfect for evening strolls, shopping for unique crafts, and dining in quaint restaurants.',
    img: '/galle.jpg',
    badge: 'Couples'
  },
  {
    id: 5,
    name: 'Yala',
    desc: 'Step into the wild with thrilling jeep safaris, untamed landscapes, and the chance to witness leopards, elephants, and exotic birdlife. Yala National Park boasts one of the highest leopard densities in the world. As you navigate the rugged terrain bordering the Indian Ocean, you will encounter diverse ecosystems ranging from moist monsoon forests to marine wetlands.',
    img: '/yala.jpg',
    badge: 'Safari Hotspot'
  },
  {
    id: 6,
    name: 'Mirissa',
    desc: 'Golden beaches, swaying palms, whale watching adventures, and laid-back tropical energy make Mirissa a must-visit coastal paradise. Renowned for its vibrant nightlife and relaxed daytime vibe, Mirissa is also one of the best locations globally to witness majestic blue whales and playful dolphins in their natural habitat.',
    img: '/mirissa.jpg',
    badge: 'Beach Escape'
  },
  {
    id: 7,
    name: 'Nuwara Eliya',
    desc: 'Cool mountain air, rolling tea estates, colonial charm, and breathtaking viewpoints create a timeless highland retreat. Often referred to as "Little England", Nuwara Eliya features British-era bungalows, beautiful gardens, and a serene lake. It is the heart of Sri Lanka’s tea production, where you can learn about the art of tea making and taste the finest Ceylon tea.',
    img: '/nuwara-eliya.jpg',
    badge: 'Hill Country'
  },
  {
    id: 8,
    name: 'Arugam Bay',
    desc: 'A sun-soaked surf paradise where ocean adventure, beach culture, and relaxed island living blend into one unforgettable escape. Famous for its world-class point breaks, Arugam Bay attracts surfers of all levels. Beyond the waves, you can explore nearby lagoons on boat safaris, spotting wildlife and enjoying the pristine, untouched beauty of the east coast.',
    img: '/arugam-bay.jpg',
    badge: 'Adventure Favorite'
  }
];

const Destinations = () => {
  const [selectedDest, setSelectedDest] = useState(null);

  useEffect(() => {
    if (selectedDest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedDest]);

  return (
    <section id="destinations" className="section" style={{ backgroundColor: 'var(--c-ivory)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover the Island</span>
          <h2>Top Destinations in Sri Lanka</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--c-gray-600)' }}>
            From golden coasts to misty highlands, explore the breathtaking diversity of our island home.
          </p>
        </div>

        <div className="grid-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover"
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="img-cover" 
                style={{ transition: 'transform 0.5s ease', width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(10,37,64,0.9) 0%, rgba(10,37,64,0.2) 60%, rgba(0,0,0,0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.5rem'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.9)',
                  color: 'var(--c-orange)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {dest.badge}
                </div>

                <h3 style={{ color: 'var(--c-white)', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-serif)' }}>{dest.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {dest.desc}
                </p>
                <button 
                  onClick={() => setSelectedDest(dest)}
                  className="btn btn-primary" 
                  style={{ alignSelf: 'flex-start', padding: '0.6rem 1.5rem', fontSize: '0.9rem', width: '100%', textAlign: 'center', boxSizing: 'border-box', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedDest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDest(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              backdropFilter: 'blur(5px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--c-white)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: 'var(--shadow-md)',
                  color: 'var(--c-navy)',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
              >
                <X size={24} />
              </button>

              {/* Image Container */}
              <div style={{ flex: '1 1 300px', minHeight: '300px', position: 'relative' }}>
                <img
                  src={selectedDest.img}
                  alt={selectedDest.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0, left: 0
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  background: 'var(--c-orange)',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {selectedDest.badge}
                </div>
              </div>

              {/* Text Container */}
              <div className="p-responsive" style={{ flex: '1 1 400px', overflowY: 'auto', maxHeight: '90vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--c-orange)' }}>
                  <MapPin size={20} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Sri Lanka</span>
                </div>
                
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--c-navy)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  {selectedDest.name}
                </h3>
                
                <p style={{ color: 'var(--c-gray-600)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {selectedDest.desc}
                </p>
                
                <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', border: '1px solid #e9ecef' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--c-navy)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                      Experience {selectedDest.name}
                    </h4>
                    <p style={{ color: 'var(--c-gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                      Ready to explore {selectedDest.name} and make it a part of your dream Sri Lanka journey? Contact our travel experts today to curate your personalized itinerary.
                    </p>
                </div>

                <a 
                    href="#contact" 
                    onClick={() => setSelectedDest(null)}
                    className="btn btn-primary" 
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem 2rem', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', borderRadius: '30px' }}
                >
                  Plan Your Trip Here
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Destinations;

