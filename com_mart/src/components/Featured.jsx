import './Featured.css';

const categories = [
    { id: 1, name: 'Phone Covers', image: '/images/cases.jpg', cols: 2 },
    { id: 2, name: 'Headphones', image: '/images/headphones.jpg', cols: 1 },
    { id: 3, name: 'Earbuds', image: '/images/earbuds.jpg', cols: 1 },
    { id: 4, name: 'Tempered Glass', image: '/images/tempered-glass.jpg', cols: 1 },
    { id: 5, name: 'Lens Protectors', image: '/images/lens-protectors.jpg', cols: 1 },
    { id: 6, name: 'Chargers & Cables', image: '/images/chargers.jpg', cols: 1 },
    { id: 7, name: 'Computer Mouse', image: '/images/mouse.jpg', cols: 1 }
];

const Featured = () => {
    return (
        <section id="categories" className="featured-section">
            <div className="section-container">
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">
                        Explore <span>Categories</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover our wide range of premium affordable accessories for all your devices.
                    </p>
                </div>

                <div className="category-grid">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`category-card col-span-${cat.cols} animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="card-image-wrapper">
                                <img src={cat.image} alt={cat.name} className="card-image" />
                                <div className="card-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{cat.name}</h3>
                                <span className="card-action">Shop Now <span className="arrow">→</span></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
