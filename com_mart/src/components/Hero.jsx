import { Phone, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>

            <div className="hero-container section-container">
                <div className="hero-content animate-fade-in-up">
                    <div className="badge delay-100">
                        <span className="badge-dot"></span>
                        Lowest Prices Guaranteed
                    </div>

                    <h1 className="hero-title delay-200">
                        Your Ultimate Hub for <br />
                        <span className="text-gradient">Mobile Accessories</span>
                    </h1>

                    <p className="hero-subtitle delay-300">
                        Premium phone covers, fast chargers, tempered glass,
                        and heavy-bass earbuds. Gear up your devices without breaking the bank.
                    </p>

                    <div className="hero-actions delay-300">
                        <a href="https://wa.me/94714861243" target="_blank" rel="noreferrer" className="btn btn-primary">
                            <Phone size={20} />
                            Order via WhatsApp
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552297634605" target="_blank" rel="noreferrer" className="btn btn-outline">
                            <MapPin size={20} />
                            Order via Facebook
                        </a>
                    </div>
                    <p className="hero-delivery-badge delay-300">🎉 Island-wide Delivery Available!</p>

                    <div className="hero-stats delay-300">
                        <div className="stat-item">
                            <h3>10k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Products</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>2</h3>
                            <p>Main Outlets</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in-up delay-200">
                    <div className="hero-image-container">
                        <div className="floating-element float-1"></div>
                        <div className="floating-element float-2"></div>
                        <img
                            src="/images/hero-accessories.jpg"
                            alt="Assorted Mobile Accessories"
                            className="hero-image"
                        />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
