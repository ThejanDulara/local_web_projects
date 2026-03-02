import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Phone, MessageCircle, Star, Image as ImageIcon, MapPin, Instagram } from 'lucide-react';
import './index.css';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
          <span className="brand-text">Sweet Bliss Bakery</span>
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#cakes" onClick={closeMobileMenu}>Cakes</a>
          <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
          <a href="#reviews" onClick={closeMobileMenu}>Reviews</a>
          <a href="#contact" onClick={closeMobileMenu}>Order</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content animate-fade-in delay-100">
          <h1 className="hero-title">Where Every Celebration is <span>Caked</span></h1>
          <p className="hero-subtitle delay-200">
            Handcrafted, fresh, and fully custom cakes made with incredible flavors, finest ingredients, and endless love in Colombo.
          </p>
          <div className="hero-buttons delay-300">
            <a href="https://wa.me/+94714861243" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> Order via WhatsApp
            </a>
            <a href="tel:+94714861243" className="btn btn-primary">
              <Phone size={20} /> Call to Order
            </a>
            <a href="#gallery" className="btn btn-secondary">
              <ImageIcon size={20} /> View Designs
            </a>
          </div>
        </div>
        <div className="hero-image-container animate-fade-in delay-200">
          <img
            src="/hero_image.png"
            alt="Beautiful custom luxury tier cake"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section reveal">
        <div className="about">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About Sweet Bliss Bakery</h2>
            <p>
              Scrumptious, fresh, homemade cakes using the finest ingredients to suit any and every sugar craving. Stay Sweet!
            </p>
            <p>
              We are a premium home-based cake studio dedicated to creating not just desserts, but edible centerpieces for your most cherished moments. Known for our custom designs, incredible flavors, and meticulous attention to detail, every order is crafted with passion and warmth.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: 'var(--text-light)' }}>
              <MapPin size={24} color="var(--soft-gold)" />
              <span>123 Sweet Lane, Sample City, 00000</span>
            </div>
          </div>
          <div className="about-image">
            <img src="/about_baker.png" alt="Sweet Bliss Bakery" />
          </div>
        </div>
      </section>

      {/* Signature Products Section */}
      <section id="cakes" className="section reveal" style={{ backgroundColor: 'var(--white)' }}>
        <h2 className="section-title">Signature Offerings</h2>
        <p className="section-subtitle">Discover our artisanal menu, baked fresh to order.</p>

        <div className="menu-grid">
          {/* Cakes */}
          <div className="menu-card">
            <div className="menu-image" style={{ marginBottom: '1.5rem', borderRadius: '10px', overflow: 'hidden', height: '180px' }}>
              <img src="/signature_cakes.png" alt="Signature Cakes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Signature Cakes</h3>
            <ul className="menu-list">
              <li>Pistachio Raspberry</li>
              <li>Ribbon Marzipan Nougat</li>
              <li>Cardamom Coffee</li>
              <li>Chocolate Truffle</li>
              <li>Ispahan</li>
            </ul>
          </div>

          {/* Cupcakes */}
          <div className="menu-card">
            <div className="menu-image" style={{ marginBottom: '1.5rem', borderRadius: '10px', overflow: 'hidden', height: '180px' }}>
              <img src="/artisan_cupcakes.png" alt="Artisan Cupcakes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Handcrafted Cupcakes</h3>
            <ul className="menu-list">
              <li>Choc Salted Caramel</li>
              <li>Raspberry Passion</li>
              <li>Cherry Almond</li>
              <li>Chocolate Chunk</li>
              <li>Coconut Passion</li>
            </ul>
          </div>

          {/* Saturday Slices */}
          <div className="menu-card">
            <div className="menu-image" style={{ marginBottom: '1.5rem', borderRadius: '10px', overflow: 'hidden', height: '180px' }}>
              <img src="/saturday_slices.png" alt="Saturday Slices" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Saturday Slices</h3>
            <ul className="menu-list">
              <li>Mocha</li>
              <li>Ribbon Marzipan</li>
              <li>Berry Lemon</li>
              <li>Caramel Crunch</li>
              <li>Seriously Choc</li>
            </ul>
          </div>

          {/* Confections */}
          <div className="menu-card">
            <div className="menu-image" style={{ marginBottom: '1.5rem', borderRadius: '10px', overflow: 'hidden', height: '180px' }}>
              <img src="/petite_confections.png" alt="Petite Confections" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Confections</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--muted-lavender)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>* Pre-Order Only</p>
            <ul className="menu-list">
              <li>Petite Cupcakes</li>
              <li>Tiramisu Pods</li>
              <li>Classic Eclairs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery / Custom Events */}
      <section id="gallery" className="section reveal gallery">
        <h2 className="section-title">Special Events & Custom Designs</h2>
        <p className="section-subtitle">Fully customized designs serving as memorable centerpieces for your special moments.</p>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/event_cake_1.png" alt="Special Event Cake" />
          </div>
          <div className="gallery-item">
            <img src="/event_cake_2.png" alt="Special Event Cake" />
          </div>
          <div className="gallery-item">
            <img src="/event_cake_3.png" alt="Special Event Cake" />
          </div>
          <div className="gallery-item">
            <img src="/event_cake_4.png" alt="Special Event Cake" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="testimonials reveal">
        <h2 className="section-title">Why Customers Love Us</h2>
        <p className="section-subtitle">Real experiences from our sweet community.</p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="testimonial-text">"Absolutely incredible taste! The custom design was exactly what we envisioned, but the flavor is what everyone kept talking about. Best cake in town!"</p>
            <p className="testimonial-author">- Sarah F.</p>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="testimonial-text">"The baker was so friendly and easy to communicate with. They worked perfectly within our budget to deliver a stunning masterpiece for our anniversary."</p>
            <p className="testimonial-author">- Michelle K.</p>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="testimonial-text">"Consistently 5-star experiences every single time. Beautiful, elegant designs and perfectly moist cake. Highly recommend their Passionfruit cupcakes!"</p>
            <p className="testimonial-author">- Danushka R.</p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="contact-section reveal">
        <div className="contact-card">
          <h2 className="section-title">Let’s Create Something Beautiful</h2>
          <p className="section-subtitle">
            Ready to discuss custom designs, flavors, budgets, and your upcoming events? Reach out to us today to secure your order.
          </p>

          <div className="contact-buttons">
            <a href="https://wa.me/+94714861243" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} /> Order via WhatsApp
            </a>
            <a href="tel:+94714861243" className="btn btn-primary">
              <Phone size={24} /> Direct Call
            </a>
            <a href="https://web.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Facebook size={24} /> Message on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-social">
          <a href="https://web.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Facebook size={20} />
          </a>
        </div>

        <p>123 Sweet Lane, Sample City, 00000</p>

        <p className="footer-text">Follow our Facebook page to view our latest cake designs, special orders, and updates.</p>

        <p className="closing-line">Stay Sweet 💕</p>
      </footer>
    </div>
  );
}
