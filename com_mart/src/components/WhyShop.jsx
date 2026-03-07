import { BadgePercent, Layers, Zap, Clock } from 'lucide-react';
import './WhyShop.css';

const features = [
    {
        icon: <BadgePercent size={32} />,
        title: 'Lowest Cost Guaranteed',
        description: 'We offer the most competitive prices in the market without compromising on quality. Get the best value for your money.'
    },
    {
        icon: <Layers size={32} />,
        title: 'Wide Variety',
        description: 'From premium covers to heavy-bass earbuds, explore a massive collection of accessories for all major smartphone brands.'
    },
    {
        icon: <Zap size={32} />,
        title: 'High Quality',
        description: 'Every product is hand-picked and tested for durability and performance to ensure your complete satisfaction.'
    },
    {
        icon: <Clock size={32} />,
        title: 'Fast Island-Wide Delivery',
        description: 'Just place the order through our Facebook page, or send a WhatsApp message. We deliver straight to your doorstep.'
    }
];

const WhyShop = () => {
    return (
        <section id="why-us" className="why-shop-section">
            <div className="section-container">
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">
                        Why Shop With <span>Us?</span>
                    </h2>
                    <p className="section-subtitle">
                        We are committed to providing the ultimate tech retail experience with unbeatable prices and exceptional service.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyShop;
