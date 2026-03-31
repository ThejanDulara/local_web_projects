import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--c-blue)', color: 'var(--c-white)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div className="gap-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', marginBottom: '4rem' }}>
          
          {/* Brand */}
          <div>
            <h2 style={{ color: 'var(--c-white)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              Ceylon Trailscape
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Designed to inspire unforgettable journeys across Sri Lanka. We craft personalized itineraries that reveal the true magic of our island.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--c-orange)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'}>
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/nexintegrate/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--c-orange)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'}>
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'var(--c-orange)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Home', 'Destinations', 'Featured Tours', 'Experiences', 'Gallery', 'About Us', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--c-white)'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 style={{ color: 'var(--c-orange)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Phone size={20} color="var(--c-teal)" />
                <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--c-white)' }}>WhatsApp / Call</div>
                  +94 714 861 243
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Mail size={20} color="var(--c-teal)" />
                <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--c-white)' }}>Email Us</div>
                  hello@ceylontrailscape.com
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin size={20} color="var(--c-teal)" />
                <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--c-white)' }}>Location</div>
                  Colombo, Sri Lanka
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0 }}>
            © {new Date().getFullYear()} www.nexintegrate.com. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
