import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', dates: '', travelers: '', type: '', destinations: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your inquiry has been received successfully! Our team will contact you soon.', {
      duration: 5000,
      position: 'bottom-center',
      style: { background: 'var(--c-teal)', color: '#fff', border: 'none', fontSize: '1.05rem', padding: '1rem' }
    });
    setFormData({
      name: '', email: '', phone: '', dates: '', travelers: '', type: '', destinations: '', message: ''
    });
  };

  const chips = ['Honeymoon', 'Family Tour', 'Private Tour', 'Wildlife', 'Beach Holiday', 'Hill Country'];

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--c-ivory)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        
        {/* Contact Info / WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ alignSelf: 'center' }}
        >
          <span className="section-subtitle">Start Your Journey</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--c-blue)' }}>
            Plan Your Sri Lanka Journey
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--c-gray-600)', marginBottom: '3rem', lineHeight: 1.8 }}>
            Tell us about your dream trip, and our local experts will craft a personalized itinerary just for you.
          </p>

          <div style={{ backgroundColor: 'var(--c-blue)', padding: '2.5rem', borderRadius: '1.5rem', color: 'var(--c-white)' }}>
            <h3 style={{ color: 'var(--c-white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Chat With Us Anywhere</h3>
            <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
              Looking for a quick response? Message us directly on WhatsApp to start planning right away.
            </p>
            <a 
              href="https://wa.me/94714861243?text=Hi,%20I%E2%80%99m%20interested%20in%20planning%20a%20Sri%20Lanka%20tour." 
              target="_blank" 
              rel="noreferrer"
              className="btn"
              style={{ 
                backgroundColor: '#25D366', 
                color: 'white', 
                width: '100%', 
                fontSize: '1.1rem',
                padding: '1rem'
              }}
            >
              Chat With Us on WhatsApp
            </a>
            <div style={{ textAlign: 'center', marginTop: '1rem', opacity: 0.8, fontWeight: 500 }}>
              +94 714 861 243
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ backgroundColor: 'var(--c-white)', padding: '3rem 2.5rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-xl)' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required style={inputStyle} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required style={inputStyle} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required style={inputStyle} />
              <input type="text" name="dates" value={formData.dates} onChange={handleChange} placeholder="Travel Dates (e.g. Dec 2026)" style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} placeholder="No. of Travelers" min="1" disabled={false} style={inputStyle} />
              <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
                <option value="" disabled>Select Tour Type</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Family">Family Tour</option>
                <option value="Private">Private Tour</option>
                <option value="Group">Group Tour</option>
              </select>
            </div>

            {/* Quick Chips */}
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--c-gray-600)', marginBottom: '0.8rem', fontWeight: 500 }}>Quick Select Interests:</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {chips.map(chip => (
                  <button 
                    type="button" 
                    key={chip}
                    onClick={() => setFormData({...formData, destinations: formData.destinations ? formData.destinations + ', ' + chip : chip})}
                    style={{ 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '50px', 
                      border: '1px solid var(--c-gray-300)',
                      fontSize: '0.85rem',
                      color: 'var(--c-gray-600)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--c-orange)'; e.currentTarget.style.color = 'var(--c-orange)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--c-gray-300)'; e.currentTarget.style.color = 'var(--c-gray-600)'; }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <input type="text" name="destinations" value={formData.destinations} onChange={handleChange} placeholder="Preferred Destinations / Interests" style={inputStyle} />

            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Tell us more about your dream trip..." 
              rows="4" 
              style={{ ...inputStyle, resize: 'vertical' }}
            ></textarea>

            <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem', width: '100%' }}>
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--c-gray-200)',
  backgroundColor: 'var(--c-gray-100)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

export default Contact;
