import { useState, useEffect } from 'react';
import './App.css';

const galleryImages = [
  "client_transform_1.png",
  "client_transform_2.png",
  "client_transform_3.png",
  "client_transform_4.png",
  "client_transform_5.png",
  "client_transform_6.png"
];

const services = [
  { name: "Bridal Dressing", image: "/service_images/bridal.png" },
  { name: "Pre-shoot Dressing", image: "/service_images/preshoot.png" },
  { name: "Normal Dressing", image: "/service_images/normal_dressing.png" },
  { name: "Full Face Makeup", image: "/service_images/makeup.png" },
  { name: "Eye Brows", image: "/service_images/brows.png" },
  { name: "Gold Facial", image: "/service_images/facial.png" },
  { name: "Facial", image: "/service_images/facial.png" },
  { name: "Normal Clean-up", image: "/service_images/cleanup.png" },
  { name: "Swa Clean-up", image: "/service_images/cleanup.png" },
  { name: "Hair Straightening", image: "/service_images/hair.png" },
  { name: "Other Beauty Services", image: "/service_images/other.png" },
];

const MenuIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

// Reusable SVG Icons
const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const FacebookIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const WhatsAppIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const MapPinIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const ClockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const CheckCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <header className={`nav-header ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Lumina Beauty</div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#owner" onClick={() => setMobileMenuOpen(false)}>Meet the Owner</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          </nav>

          <div className={`nav-social ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook Page">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-text reveal-left">
            <h1>Enhancing Your Beauty, <br /><span>One Look at a Time</span></h1>
            <p>Step into elegance and experience professional makeup artistry that boosts your confidence and highlights your natural grace.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/94714861243" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Book via WhatsApp
              </a>
              <a href="tel:+94714861243" className="btn btn-primary">
                <PhoneIcon /> Call Now
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FacebookIcon /> Message on Facebook
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper reveal-right delay-2">
            <img src="/service_images/bridal.png" alt="Lumina Beauty Hero" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about container">
        <div className="about-inner reveal">
          <h2 className="section-title">Welcome to Lumina Beauty</h2>
          <p>We are a professional beauty and wellness center dedicated to providing personalized care and exquisite beauty treatments.</p>
          <p>Our goal is simple: to help you feel confident, radiant, and undeniably beautiful in your own skin. With expert techniques and a warm, reassuring environment, every visit is a step towards your most glowing self.</p>

          <div className="location-box reveal delay-2">
            <MapPinIcon />
            <h4>Our Location</h4>
            <p>128 Blossom Avenue, Colombo 00300, Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 2rem', display: 'block' }}>Our Signature Services</h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>From elegant bridal dressing to rejuvenating facials, we offer a complete range of services to pamper you.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card reveal delay-${(index % 4) + 1}`}>
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.name} className="service-image" />
                </div>
                <h3>{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Introduction */}
      <section id="owner" className="section owner container">
        <div className="owner-content">
          <div className="owner-image reveal-left">
            <img src="/owner_profile_new.png" alt="Amani Senanayake" />
          </div>
          <div className="owner-text reveal-right">
            <div className="owner-quote">
              "Beauty is not a size, it's an attitude."
            </div>
            <h3 className="owner-name">Amani Senanayake</h3>
            <div className="owner-title">Make-up Artist & Founder</div>
            <p>With an unwavering passion for artistry and a keen eye for elegance, Amani has spent years perfecting the craft of makeup and dressing.</p>
            <p>She believes every client has a unique glow that deserves to be celebrated. Whether it’s for a grand wedding or a beautiful evening event, Amani ensures you step out looking flawless and feeling incredibly confident.</p>
            <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              <FacebookIcon /> Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">Client Transformations</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Explore our portfolio of real clients, special moments, and the stunning results of our dedicated artistry.</p>
          </div>

          <div className="masonry-grid">
            {galleryImages.map((imgName, index) => (
              <div key={index} className={`gallery-item reveal delay-${(index % 4) + 1}`}>
                <img src={`/dressing_images/${imgName}`} loading="lazy" alt={`Lumina Beauty Client ${index + 1}`} />
                <div className="gallery-overlay">
                  <span style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic' }}>View Style</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Contact */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner reveal">
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Ready to Shine?</h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>Book your appointment today and let us bring out your inner lumina. We recommend booking in advance, especially for bridal and pre-shoot dressing.</p>

            <div className="hours-wrap">
              <div className="hours-item">
                <ClockIcon />
                <div>
                  <h5>Tuesday – Sunday</h5>
                  <p>9.00 AM – 6.00 PM</p>
                </div>
              </div>
              <div className="hours-item">
                <ClockIcon />
                <div>
                  <h5>Monday</h5>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="https://wa.me/94714861243" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon /> Book on WhatsApp
              </a>
              <a href="tel:+94714861243" className="btn btn-primary">
                <PhoneIcon /> Call Now
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FacebookIcon /> Message on Facebook
              </a>
            </div>

            <p style={{ marginTop: '2.5rem', fontSize: '0.95rem', color: '#777' }}>
              <a href="tel:+94714861243" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>071 486 1243</a> <br />
              View our latest dressing styles and updates on Facebook!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Lumina Beauty</div>
          <div className="footer-quote">"Because you deserve to shine."</div>

          <div className="footer-contact">
            <p>128 Blossom Avenue, Colombo 00300, Sri Lanka</p>
            <p>071 486 1243</p>
          </div>

          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="social-icon" aria-label="Salon Facebook">
              <FacebookIcon />
            </a>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Lumina Beauty. All rights reserved. <br />
            Designed with elegance and care.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
