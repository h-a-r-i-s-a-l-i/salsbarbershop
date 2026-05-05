import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import TestimonialCard from './components/TestimonialCard';

const testimonials = [
  {
    name: 'Alex G.',
    role: 'Local professional',
    quote: 'Sal’s delivers precise cuts every visit. The atmosphere is polished and the results are sharp.',
  },
  {
    name: 'Brittany S.',
    role: 'Executive client',
    quote: 'The clean finish and attention to detail are unmatched. This is the only barbershop I trust.',
  },
  {
    name: 'Marcus T.',
    role: 'Frequent visitor',
    quote: 'Modern service with classic craft. My haircut lasts longer and looks better than ever.',
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="page-hero home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Premium Barber Experience</span>
          <h1>Sal’s Barber Shop</h1>
          <p>Modern, masculine grooming for men who want clean lines, powerful style, and a premium finishing touch.</p>
          <div className="hero-actions">
            <NavLink to="/book" className="btn btn-primary">Book Now</NavLink>
            <NavLink to="/services" className="btn btn-outline">View Services</NavLink>
          </div>
        </div>
      </section>

      <section className="section-container about-block">
        <div className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2>Precision grooming in a refined atmosphere.</h2>
          <p>At Sal’s, we combine premium tools, expert technique, and a polished environment to deliver a confident haircut every time. Our shop is built for professionals who expect clean style and attentive service.</p>
          <ul className="about-list">
            <li>Expert barbers with modern and classic skill sets</li>
            <li>Clean, masculine atmosphere with premium finishing touches</li>
            <li>Fast, reliable appointments designed for busy schedules</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80" alt="Barber styling a client's hair" />
        </div>
      </section>

      <section className="section-container service-teaser">
        <div className="section-headline">
          <span className="eyebrow">Services Overview</span>
          <h2>Sharp cuts, clean fades, and premium grooming.</h2>
        </div>
        <div className="service-teaser-grid">
          <div className="service-teaser-card">Precision Haircut</div>
          <div className="service-teaser-card">Signature Fade</div>
          <div className="service-teaser-card">Beard Sculpt</div>
          <div className="service-teaser-card">Executive Package</div>
        </div>
        <NavLink to="/services" className="btn btn-outline">See All Services</NavLink>
      </section>

      <section className="section-container testimonials-block">
        <div className="section-headline">
          <span className="eyebrow">Testimonials</span>
          <h2>Trusted by professionals and locals alike.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-container cta-block">
        <h2>Experience the next level of barbering.</h2>
        <p>Book a premium appointment today and step into a sharper, cleaner version of yourself.</p>
        <NavLink to="/book" className="btn btn-primary">Reserve your spot</NavLink>
      </section>
    </main>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="section-container nav-inner">
        <div className="brand-block">
          <div className="logo-pill">💈</div>
          <div className="brand-copy">
            <span className="big-brand">SAL’S</span>
            <span className="brand-subtitle">Barber Shop</span>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/book">Book</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer site-footer">
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/book">Book</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Sal’s Barber Shop — Premium Men’s Grooming</div>
      </footer>
    </Router>
  );
}

export default App;
