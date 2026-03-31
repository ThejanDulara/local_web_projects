import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            Ceylon Trailscape
          </a>

          {/* Desktop Nav */}
          <div className="nav-links" style={{ display: window.innerWidth > 900 ? 'flex' : 'none' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
              Plan My Trip
            </a>
          </div>

          {/* Mobile Menu Button - defined in CSS as display: flex on max-width: 900px */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '80%',
                maxWidth: '400px',
                height: '100vh',
                backgroundColor: 'var(--c-white)',
                zIndex: 55,
                padding: '5rem 2rem',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  style={{ fontSize: '1.25rem', color: 'var(--c-gray-800)', fontWeight: 500 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary" 
                style={{ marginTop: '1rem', width: '100%' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan My Trip
              </a>
            </motion.div>
            
            <div 
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 54, background: 'rgba(0,0,0,0.5)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
