const galleryImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519085360771-9852a60a8c45?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1553459459-d2229ba7433b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
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
