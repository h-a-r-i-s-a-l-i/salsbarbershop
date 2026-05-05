import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <main className="contact-page">
            <section className="page-hero contact-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Contact</span>
                    <h1>Find your next appointment.</h1>
                    <p>Visit Sal’s Barber Shop for effortless grooming in a sharp, confident environment.</p>
                </div>
            </section>

            <section className="section-container contact-layout">
                <div className="contact-panel">
                    <div className="contact-card">
                        <span className="eyebrow">Location</span>
                        <h2>549 Thompson Rd S</h2>
                        <p>Milton, ON</p>
                    </div>
                    <div className="contact-card">
                        <span className="eyebrow">Hours</span>
                        <div className="hours-list">
                            <div className="hour-row">
                                <span className="day">Monday</span>
                                <span className="time">Closed</span>
                            </div>
                            <div className="hour-row">
                                <span className="day">Tuesday - Friday</span>
                                <span className="time">9:00 AM – 7:30 PM</span>
                            </div>
                            <div className="hour-row">
                                <span className="day">Saturday</span>
                                <span className="time">8:30 AM – 5:00 PM</span>
                            </div>
                            <div className="hour-row">
                                <span className="day">Sunday</span>
                                <span className="time">10:00 AM – 5:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-card contact-action">
                        <span className="eyebrow">Get in touch</span>
                        <h2>Call or book online</h2>
                        <p>Want to lock in your next appointment? We’re ready when you are.</p>
                        <a href="tel:+19056368280" className="contact-link">📞 (905) 636-8280</a>
                        <Link to="/book" className="btn btn-primary">Book Now</Link>
                    </div>
                </div>

                <div className="map-panel">
                    <iframe
                        title="Sal's Barber Shop map"
                        className="map-frame"
                        src="https://maps.google.com/maps?q=549%20Thompson%20Rd%20S%20Milton%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </section>
        </main>
    );
}
