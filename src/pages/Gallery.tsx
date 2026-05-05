const galleryImages = [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1508898578281-774ac4893b29?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80',
];

export default function Gallery() {
    return (
        <main className="gallery-page">
            <section className="page-hero gallery-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Gallery</span>
                    <h1>Real results. Modern edge.</h1>
                    <p>Explore our signature styles, precise fades, and refined grooming details in every service.</p>
                </div>
            </section>

            <section className="section-container gallery-grid">
                {galleryImages.map((src, index) => (
                    <div key={index} className="gallery-card">
                        <img src={src} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </section>
        </main>
    );
}
