import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

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

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="logo-text">Tech <span>Haven</span></span>
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#categories" onClick={() => setIsMobileMenuOpen(false)}>Categories</a></li>
          <li><a href="#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
          <li><a href="#locations" onClick={() => setIsMobileMenuOpen(false)}>Locations</a></li>
          <li className="mobile-only">
            <a href="https://wa.me/94714861243" className="btn btn-primary nav-btn-mobile">WhatsApp Menu</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="https://wa.me/94714861243" target="_blank" rel="noreferrer" className="btn btn-primary hidden-mobile">WhatsApp: +94 71 486 1243</a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
