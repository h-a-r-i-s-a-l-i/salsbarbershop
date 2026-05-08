const galleryImages = [
    '/gallery-1.jpg',
    '/gallery-2.jpg'
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
