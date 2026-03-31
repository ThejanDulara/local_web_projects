import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import WhyChooseUs from './components/WhyChooseUs';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Hero />
      <Destinations />
      
      {/* Mini planner strip feature */}
      <section className="section-sm" style={{ backgroundColor: 'var(--c-orange)', color: 'var(--c-white)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: 'var(--c-white)', margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>What kind of trip are you dreaming of?</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Select a style to start planning</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['Romantic', 'Family', 'Adventure', 'Luxury', 'Nature', 'Cultural'].map(style => (
              <a key={style} href="#contact" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.95rem' }}>
                {style}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Tours />
      <WhyChooseUs />
      
      {/* Featured seasonal banner */}
      <section className="section-md" style={{ backgroundColor: 'var(--c-teal)', color: 'var(--c-white)', textAlign: 'center' }}>
        <div className="container">
          <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.9rem', color: 'var(--c-sand)' }}>Seasonal Highlight</span>
          <h2 style={{ color: 'var(--c-white)', fontSize: '2.5rem', margin: '1rem 0 2rem 0' }}>Best Time to Visit Sri Lanka</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Beaches', 'Wildlife', 'Hill Country', 'Cultural Triangle'].map(tag => (
              <div key={tag} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.5rem', borderRadius: '50px', backdropFilter: 'blur(5px)' }}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Experiences />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
