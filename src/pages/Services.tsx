import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Precision Haircut',
        price: '$45',
        description: 'A tailored cut with clean lines, sharp edges, and a finish designed for the modern professional.',
    },
    {
        title: 'Signature Fade',
        price: '$50',
        description: 'Expert fades blended with exacting attention to shape, texture, and refined detail.',
    },
    {
        title: 'Beard Sculpt',
        price: '$35',
        description: 'Skin-fade beard work, contouring, and a polished finish using premium grooming products.',
    },
    {
        title: 'Executive Package',
        price: '$85',
        description: 'Full haircut, beard sculpt, and hot towel finish for a complete premium grooming experience.',
        footnote: 'Includes consultation and styling recommendations.',
    },
];

export default function Services() {
    return (
        <main className="services-page">
            <section className="page-hero services-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Services</span>
                    <h1>Premium grooming with powerful results.</h1>
                    <p>Choose from our curated menu of men's grooming services designed for a clean, sharp, and confident look.</p>
                </div>
            </section>

            <section className="section-container services-grid">
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </section>

            <section className="section-container services-cta">
                <h2>Ready to upgrade your grooming routine?</h2>
                <Link to="/book" className="btn btn-primary">Reserve your chair</Link>
            </section>
        </main>
    );
}
