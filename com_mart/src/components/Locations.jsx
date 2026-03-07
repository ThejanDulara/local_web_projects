import { MapPin, Navigation, Phone } from 'lucide-react';
import './Locations.css';

const branches = [
    {
        name: 'Colombo Branch',
        address: 'No. 145, Galle Road, Colombo 03, Sri Lanka',
        phone: '+94 71 486 1243'
    },
    {
        name: 'Kandy Branch',
        address: 'No. 22, Peradeniya Road, Kandy, Sri Lanka',
        phone: '+94 71 486 1243'
    }
];

const Locations = () => {
    return (
        <section id="locations" className="locations-section">
            <div className="section-container">
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">
                        Find Our <span>Stores</span>
                    </h2>
                    <p className="section-subtitle">
                        Visit us at our physical locations to experience the quality firsthand and browse our extensive collection.
                    </p>
                </div>

                <div className="locations-grid">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="location-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="location-card-header">
                                <div className="location-icon-wrapper">
                                    <MapPin className="location-icon" size={28} />
                                </div>
                                <h3>{branch.name}</h3>
                            </div>

                            <div className="location-details">
                                <p className="location-address">
                                    {branch.address}
                                </p>
                                <div className="location-contact">
                                    <Phone size={16} />
                                    <span>{branch.phone}</span>
                                </div>
                            </div>

                            <div className="location-actions">
                                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline btn-full">
                                    <Navigation size={18} />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="map-placeholder animate-fade-in-up delay-300">
                <div className="map-glow"></div>
                <div className="map-overlay">
                    <span>Interactive Map Integration Available</span>
                </div>
                <div className="map-grid-bg"></div>
            </div>
        </section>
    );
};

export default Locations;
