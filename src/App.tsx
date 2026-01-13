import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Barbers from './pages/Barbers';
import Book from './pages/Book';

function Home() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <video className="hero-video" src="https://www.w3schools.com/howto/rain.mp4" autoPlay loop muted poster="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" />
        <div className="hero-overlay">
          <h1 className="hero-title">Sal's Barbershop</h1>
          <p className="hero-tagline">Modern cuts. Timeless tradition.</p>
          <a href="/book" className="hero-cta">Book Now</a>
        </div>
      </div>
      <div className="intro-gallery">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80" alt="Fresh Haircut 1" />
          <div className="gallery-desc">
            <strong>Fresh Fades & Modern Looks</strong>
            <p>From fades to pompadours, our experienced barbers craft signature styles just for you.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c47?auto=format&fit=crop&w=400&q=80" alt="Shop Interior" />
          <div className="gallery-desc">
            <strong>Classic Shop Vibes</strong>
            <p>Relax in our welcoming, vintage-inspired shop atmosphere—where every visit feels special.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Barber at work" />
          <div className="gallery-desc">
            <strong>Expert Barbers</strong>
            <p>Our team is dedicated to achieving the perfect look—precision, care, & style in every cut.</p>
          </div>
        </div>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Sal's Barbershop, our mission is to blend modern style with timeless tradition,
          giving every guest the confidence and comfort they deserve. We believe in community,
          respect, and the perfect haircut—every time.
        </p>
      </div>
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-quote">“I always leave here feeling fresh. Best barbers in town!”</div>
            <div className="review-source">— Alex G.</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-quote">“Great vibe, great people, and a perfect cut every time.”</div>
            <div className="review-source">— Brittany S.</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-quote">“Old-school attention to detail meets modern style & skill.”</div>
            <div className="review-source">— Marcus T.</div>
          </div>
        </div>
      </div>
      <section id="contact" className="contact-section">
        <div>
          <h2>Contact</h2>
          <p> 549 Thompson Rd S, Milton, ON </p>
          <p> Phone: (905) 636-8280</p>
        </div>
        <div>
          <h2> Hours </h2>
          <p> Monday: Closed</p>
          <p> Tuesday-Friday:	9AM to 7:30PM </p>
          <p> Saturday:	8:30AM to 5PM </p>
          <p> Sunday: 10AM to 5PM</p>
        </div>
      </section>
    </div>
  );
}

// `Book` page moved to src/pages/Book.tsx

// Barbers page implemented in src/pages/Barbers.tsx

function Gallery() {
  return <div className="page"><h2>Gallery</h2></div>;
}

function Contact() {
  return <div className="page"><h2>Contact & Location</h2></div>;
}

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-title-container">
        <div className="logo-pill">💈</div>
        <span className="big-brand">SAL'S BARBER SHOP</span>
        <div className="logo-pill">💈</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/book">Book</Link>
        <Link to="/barbers">Barbers</Link>
        <Link to="/gallery">Gallery</Link>
        <a href="#contact" onClick={handleContact}>Contact & Hours</a>
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
        <Route path="/book" element={<Book />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/book">Book</a>
          <a href="/barbers">Barbers</a>
          <a href="/gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} 💈 Sal's Barber Shop 💈 | Made with ♥ in Milton
        </div>
      </footer>
    </Router>
  );
}

export default App;
