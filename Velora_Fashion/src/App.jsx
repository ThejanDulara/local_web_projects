import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ShoppingBag, ArrowRight, Truck, RefreshCcw, ShieldCheck, Mail, Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import './index.css';

const RevealOnScroll = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MagneticButton = ({ children, className, href }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a 
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleHeroMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 50;
    const y = (clientY / window.innerHeight - 0.5) * 50;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const titleAnim = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom * 0.15 }
    })
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_NUMBER = "+94714861243";
  const EMAIL = "info@nexintegrate.com";
  const FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61552297634605";

  // Dummy products mapped to actual generated images for visual fidelity
  const newArrivals = [
    { id: 1, name: "Emerald Evening Dress", price: "Rs. 8,500", image: "/womens_collection_1774690241197.png", badge: "New" },
    { id: 2, name: "Classic Smart Blazer", price: "Rs. 12,000", image: "/mens_collection_1774690223901.png", badge: "" },
    { id: 3, name: "Summer Flow Dress", price: "Rs. 6,200", image: "/gallery_1_1774690257603.png", badge: "Trending" },
    { id: 4, name: "Urban Street Jacket", price: "Rs. 9,800", image: "/gallery_2_1774690279974.png", badge: "" },
  ];

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo">VELORA</a>
          <div className="nav-links">
            <a href="#new-arrivals">New Arrivals</a>
            <a href="#collections">Collections</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ position: 'fixed', top: scrolled ? '65px' : '75px', left: 0, width: '100%', background: '#fff', zIndex: 999, overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', gap: '1.5rem' }}>
              <a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#111', fontWeight: 600 }}>New Arrivals</a>
              <a href="#collections" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#111', fontWeight: 600 }}>Collections</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#111', fontWeight: 600 }}>Why Shop With Us</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#111', fontWeight: 600 }}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="hero-premium" onMouseMove={handleHeroMouseMove}>
        <div className="hero-noise"></div>
        <div className="container hero-premium-container">
          
          {/* Left Text Side */}
          <div className="hero-premium-text">
            <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="hero-premium-badge">
              <span className="badge-dot"></span> 2026 Collection
            </motion.div>
            
            <h1 className="hero-premium-title">
              <div className="overflow-hidden"><motion.span className="block" variants={titleAnim} initial="hidden" animate="visible" custom={0}>Wear</motion.span></div>
              <div className="overflow-hidden"><motion.span className="block" variants={titleAnim} initial="hidden" animate="visible" custom={1}>Confidence.</motion.span></div>
              <div className="overflow-hidden"><motion.span className="block italic-outline" variants={titleAnim} initial="hidden" animate="visible" custom={2}>Define</motion.span></div>
              <div className="overflow-hidden"><motion.span className="block" variants={titleAnim} initial="hidden" animate="visible" custom={3}>Your Style.</motion.span></div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="hero-premium-subtitle">
              Sri Lanka's premier destination for modern, trendy, and stylish fashion. Discover pieces that let you express your true self with elegance and bold identity.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
               className="hero-premium-actions">
               <MagneticButton href="#collections" className="btn-premium-solid">
                  Explore Collection <ArrowRight size={18} />
               </MagneticButton>
               <MagneticButton href="#new-arrivals" className="btn-premium-outline">
                  New Arrivals
               </MagneticButton>
            </motion.div>
          </div>

          {/* Right Collage Side */}
          <div className="hero-premium-collage">
             <div className="collage-glow"></div>
             
             <motion.div 
               className="collage-item main-img"
               initial={{ opacity: 0, scale: 0.9, y: 40 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
               style={{ y: heroY, x: smoothMouseX }}
             >
               <img src="/womens_collection_1774690241197.png" alt="Womens fashion" />
             </motion.div>

             <motion.div 
               className="collage-item secondary-img"
               initial={{ opacity: 0, x: 50, y: 20 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
               style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]), x: useTransform(smoothMouseX, x => x * -1.5) }}
             >
               <img src="/mens_collection_1774690223901.png" alt="Mens fashion" />
             </motion.div>

             <motion.div 
               className="collage-item tertiary-img"
               initial={{ opacity: 0, x: -30, y: -40 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
               style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]), x: useTransform(smoothMouseX, x => x * 0.8) }}
             >
               <img src="/hero_banner_1774690203543.png" alt="Fashion campaign" />
             </motion.div>

             <motion.div 
               className="floating-badge-glass"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.2, duration: 0.8 }}
               style={{ y: useTransform(smoothMouseY, y => y * -1.2) }}
             >
                <div className="glass-content">
                  <span className="star">✦</span> Sri Lankan Edit
                </div>
             </motion.div>
          </div>
        </div>
      </header>

      {/* Split Collections */}
      <section id="collections" className="split-collections">
        <RevealOnScroll className="collection-card">
          <img src="/mens_collection_1774690223901.png" alt="Men's Collection" className="collection-bg" />
          <div className="collection-overlay"></div>
          <div className="collection-content">
            <h2 className="collection-title">Men's Edit</h2>
            <button className="collection-btn">Explore Men's</button>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="collection-card" delay={0.2}>
          <img src="/womens_collection_1774690241197.png" alt="Women's Collection" className="collection-bg" />
          <div className="collection-overlay"></div>
          <div className="collection-content">
            <h2 className="collection-title">Women's Edit</h2>
            <button className="collection-btn">Explore Women's</button>
          </div>
        </RevealOnScroll>
      </section>

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="section-title">Fresh <span>Arrivals</span></h2>
              <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>Handpicked styles for the modern wardrobe.</p>
            </div>
          </RevealOnScroll>

          <div className="product-grid">
            {newArrivals.map((product, index) => (
              <RevealOnScroll key={product.id} className="product-card" delay={index * 0.1}>
                <div className="product-img-wrapper">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <img src={product.image} alt={product.name} className="product-img" />
                  <div className="product-action">
                    <ShoppingBag size={18} /> Add to Bag
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="#collections" className="btn btn-outline" style={{ borderBottom: '2px solid var(--color-black)', borderRadius: 0, padding: '0.5rem 1rem' }}>
              View All Products <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section id="why-us" className="features-section section-padding">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title">The Velora <span>Difference</span></h2>
          </RevealOnScroll>
          <div className="features-grid">
            <RevealOnScroll className="feature-item" delay={0.1}>
              <div className="feature-icon-wrapper">
                <Truck size={32} />
              </div>
              <h3 className="feature-title">Fast Islandwide Delivery</h3>
              <p className="feature-desc">Get your styles delivered securely and quickly anywhere in Sri Lanka within 2-4 working days.</p>
            </RevealOnScroll>
            <RevealOnScroll className="feature-item" delay={0.2}>
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-desc">Every piece is crafted from high-quality materials, ensuring comfort and long-lasting durability.</p>
            </RevealOnScroll>
            <RevealOnScroll className="feature-item" delay={0.3}>
              <div className="feature-icon-wrapper">
                <RefreshCcw size={32} />
              </div>
              <h3 className="feature-title">Easy Returns</h3>
              <p className="feature-desc">Not the right fit? Enjoy a hassle-free exchange within 7 days for complete peace of mind.</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Social / Instagram Style Gallery */}
      <section className="gallery-section">
        <div className="gallery-grid">
          <RevealOnScroll className="gallery-item">
            <img src="/gallery_1_1774690257603.png" alt="Gallery 1" />
            <div className="instagram-overlay">
              <InstagramIcon size={40} />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="gallery-item" delay={0.1}>
            <img src="/gallery_2_1774690279974.png" alt="Gallery 2" />
            <div className="instagram-overlay">
              <InstagramIcon size={40} />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="gallery-item" delay={0.2}>
            <img src="/hero_banner_1774690203543.png" alt="Gallery 3" />
            <div className="instagram-overlay">
              <InstagramIcon size={40} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>Join the Velora Club</h2>
            <p>Elevate your everyday style. Connect with us directly to place your order or inquire about availability.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ backgroundColor: '#25D366' }}>
                WhatsApp Us <MessageCircleIcon size={18} />
              </a>
              <a href="#contact" className="btn btn-outline" style={{ borderColor: 'var(--color-black)', padding: '1rem 2rem' }}>
                Visit Store
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <RevealOnScroll>
              <h3 className="footer-title">VELORA</h3>
              <p className="footer-desc">Redefining modern fashion for the confident youth. Elevate your wardrobe with premium, stylish clothing designed to stand out.</p>
              <div className="social-links">
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="social-link"><FacebookIcon size={20} /></a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="social-link"><Phone size={20} /></a>
                <a href="#" className="social-link"><InstagramIcon size={20} /></a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="footer-links">
              <h4>Shop</h4>
              <ul>
                <li><a href="#new-arrivals">New Arrivals</a></li>
                <li><a href="#collections">Men's Collection</a></li>
                <li><a href="#collections">Women's Collection</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <MapPin size={20} />
                  <span>123, Fashion Avenue,<br />Colombo 07, Sri Lanka</span>
                </li>
                <li>
                  <Phone size={20} />
                  <a href={`tel:${WHATSAPP_NUMBER}`}>+94 71 486 1243</a>
                </li>
                <li>
                  <Mail size={20} />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
              </ul>
            </RevealOnScroll>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Velora Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Quick fallback for icon if MessageCircle is not fully imported at top
function MessageCircleIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}

function FacebookIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}
