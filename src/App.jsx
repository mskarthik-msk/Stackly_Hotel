import React, { useState, useEffect } from 'react';
import icon from './assets/brown_stackly_icon.png';
import logo from './assets/brown_Stackly.png';

const SUITES = [
  {
    id: 'oceanfront',
    meta: '85 SQM • PRIVATE TERRACE',
    title: 'Oceanfront Panorama Suite',
    description:
      'Floor-to-ceiling limestone framing, hand-loomed Sicilian linens, and an expansive teak balcony overlooking the private cove.',
    price: '$890',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'courtyard',
    meta: '110 SQM • PLUNGE POOL',
    title: 'Botanical Courtyard Villa',
    description:
      'Secluded behind ancient olive trees with a heated basalt plunge pool, outdoor rain shower, and private butler pantry.',
    price: '$1,240',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'penthouse',
    meta: '210 SQM • ROOFTOP SOLARIUM',
    title: 'The Stackly Penthouse',
    description:
      'Our flagship two-bedroom residence featuring a curated art library, dining salon for eight, and 360-degree coastal views.',
    price: '$2,450',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [attemptedLabel, setAttemptedLabel] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Booking form state
  const [checkIn, setCheckIn] = useState('2026-11-20');
  const [checkOut, setCheckOut] = useState('2026-11-24');
  const [guests, setGuests] = useState('2 Adults, 1 Suite');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (target, label = '') => {
    setMobileMenuOpen(false);
    if (target === 'home') {
      setCurrentRoute('home');
      setAttemptedLabel('');
    } else {
      setAttemptedLabel(label || target);
      setCurrentRoute('404');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Persistent Navigation */}
      <header
        className={`navbar ${
          scrolled || currentRoute === '404' ? 'scrolled light-mode' : ''
        }`}
      >
        <button
          className="brand-logo"
          onClick={() => navigateTo('home')}
          aria-label="Stackly Home"
        >
          <img src={icon} className='iconcls'/>
          <span className="brand-name">Stackly</span>
          <span className="brand-sub">Grand Hotel & Resort</span>
        </button>

        <nav className="nav-links" aria-label="Main Navigation">
          <button
            className={`nav-link ${currentRoute === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => navigateTo('404', 'About Us')}
          >
            About Us
          </button>
          <button
            className="nav-link"
            onClick={() => navigateTo('404', 'Services')}
          >
            Services
          </button>
          <button
            className="nav-link"
            onClick={() => navigateTo('404', 'Contact Us')}
          >
            Contact Us
          </button>
        </nav>

        <div className="nav-auth">
          <button
            className="btn-login"
            onClick={() => navigateTo('404', 'Member Login')}
          >
            Login
          </button>
          <button
            className="btn-register"
            onClick={() => navigateTo('404', 'Guest Registration')}
          >
            Register
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="mobile-drawer open">
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '40px',
                }}
              >
                <span className="brand-name" style={{ fontSize: '1.4rem' }}>
                  Stackly
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: '1.4rem' }}
                >
                  ✕
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <button
                  className="nav-link"
                  onClick={() => navigateTo('home')}
                >
                  Home
                </button>
                <button
                  className="nav-link"
                  onClick={() => navigateTo('404', 'About Us')}
                >
                  About Us
                </button>
                <button
                  className="nav-link"
                  onClick={() => navigateTo('404', 'Services')}
                >
                  Services
                </button>
                <button
                  className="nav-link"
                  onClick={() => navigateTo('404', 'Contact Us')}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <button
                className="btn-login"
                style={{ width: '100%' }}
                onClick={() => navigateTo('404', 'Member Login')}
              >
                Login
              </button>
              <button
                className="btn-register"
                style={{ width: '100%' }}
                onClick={() => navigateTo('404', 'Guest Registration')}
              >
                Register
              </button>
            </div>
          </aside>
        </>
      )}

      {/* LANDING PAGE (HOME) */}
      {currentRoute === 'home' ? (
        <main>
          {/* Hero */}
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">Amalfi Coast • Est. 1924</span>
              <h1 className="hero-title">
                Where Timeless Architecture Meets the Azure Sea
              </h1>
              <p className="hero-subtitle">
                Discover an intimate sanctuary of cliffside terraced gardens,
                bespoke hospitality, and unhurried Mediterranean living.
              </p>
              <button
                className="btn-primary"
                onClick={() => navigateTo('404', 'Suite Reservations')}
              >
                Reserve Your Stay
              </button>
            </div>
          </section>

          {/* Booking Availability Bar */}
          <div className="booking-bar-wrapper">
            <form
              className="booking-bar"
              onSubmit={(e) => {
                e.preventDefault();
                navigateTo('404', 'Room Availability Search');
              }}
            >
              <div className="booking-field">
                <label htmlFor="checkin">Check-In</label>
                <input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="booking-field">
                <label htmlFor="checkout">Check-Out</label>
                <input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="booking-field">
                <label htmlFor="guests">Guests &amp; Suites</label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option>2 Adults, 1 Suite</option>
                  <option>1 Adult, 1 Suite</option>
                  <option>4 Adults, 2 Suites</option>
                  <option>Family Villa (Up to 6)</option>
                </select>
              </div>
              <button type="submit" className="booking-submit">
                Check Availability
              </button>
            </form>
          </div>

          {/* Heritage / Philosophy Section */}
          <section className="section">
            <div className="story-grid">
              <div className="story-image">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Stackly Hotel Courtyard Pool"
                />
                <div className="story-caption">
                  <span>100+</span>
                  <p>
                    Years of curated coastal heritage & discreet five-star
                    service.
                  </p>
                </div>
              </div>

              <div>
                <span className="section-tag">Our Philosophy</span>
                <h2 className="section-title">
                  Crafted for Tranquility, Tailored to You
                </h2>
                <p className="section-desc" style={{ marginBottom: '18px' }}>
                  Carved into sun-drenched limestone cliffs above the Tyrrhenian
                  Sea, Stackly blends early twentieth-century neoclassical poise
                  with contemporary organic warmth.
                </p>
                <p className="section-desc">
                  Each of our forty-two suites features locally quarried
                  travertine, bespoke walnut joinery, and uninterrupted views of
                  the horizon.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => navigateTo('404', 'About Us — Our Heritage')}
                >
                  Explore Our Story
                </button>
              </div>
            </div>
          </section>

          {/* Signature Suites */}
          <section className="suites-bg">
            <div className="section">
              <div className="section-header">
                <span className="section-tag">Accommodations</span>
                <h2 className="section-title">Signature Suites &amp; Villas</h2>
                <p className="section-desc">
                  Thoughtfully appointed private sanctuaries designed to invite
                  the sea breeze and golden afternoon light indoors.
                </p>
              </div>

              <div className="suites-grid">
                {SUITES.map((suite) => (
                  <article className="suite-card" key={suite.id}>
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="suite-img"
                    />
                    <div className="suite-body">
                      <div>
                        <div className="suite-meta">{suite.meta}</div>
                        <h3 className="suite-title">{suite.title}</h3>
                        <p className="suite-text">{suite.description}</p>
                      </div>
                      <div className="suite-footer">
                        <div className="suite-price">
                          {suite.price} <small>/ night</small>
                        </div>
                        <button
                          className="link-arrow"
                          onClick={() =>
                            navigateTo('404', `Suite Details: ${suite.title}`)
                          }
                        >
                          View Suite →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Dining & Spa */}
          <section className="section">
            <div className="section-header">
              <span className="section-tag">Curated Experiences</span>
              <h2 className="section-title">Gastronomy &amp; Holistic Spa</h2>
              <p className="section-desc">
                From Michelin-starred coastal tasting menus to subterranean
                thermal baths, every moment is composed for restoration.
              </p>
            </div>

            <div className="exp-grid">
              <div className="exp-card">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                  alt="Fine Dining Restaurant"
                />
                <div className="exp-overlay">
                  <h3>L’Orangerie Fine Dining</h3>
                  <p>
                    Seasonal harvest-to-table tasting menus paired with rare
                    vintages from our 18th-century vaulted wine cellar.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() =>
                      navigateTo('404', 'Services — Dining Reservations')
                    }
                  >
                    Discover Dining
                  </button>
                </div>
              </div>

              <div className="exp-card">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
                  alt="Thermal Wellness Spa"
                />
                <div className="exp-overlay">
                  <h3>The Stackly Thermal Baths</h3>
                  <p>
                    Mineral-rich saltwater pools, botanical aromatherapy rituals,
                    and private cliffside meditation pavilions.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => navigateTo('404', 'Services — Wellness Spa')}
                  >
                    Explore Spa
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* CUSTOM 404 ERROR PAGE */
        <main className="error-page">
          <div className="error-card">
            <div className="key-emblem" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="7.5" cy="15.5" r="4.5" />
                <path d="M10.8 12.2L20 3" />
                <path d="M17 6l3 3" />
                <path d="M14.5 8.5l2.5 2.5" />
              </svg>
            </div>

            <div className="error-code">404</div>
            {attemptedLabel && (
              <div className="error-badge">
                Destination Unavailable: {attemptedLabel}
              </div>
            )}

            <h1 className="error-heading">Suite Key #404 — Uncharted Wing</h1>
            <p className="error-message">
              It appears you have wandered into a private wing of Stackly that
              is currently closed for restoration or does not yet exist. Our
              concierge will gladly escort you back to the main lobby.
            </p>

            <div className="error-actions">
              <button
                className="btn-primary"
                onClick={() => navigateTo('home')}
              >
                Return to Lobby (Home)
              </button>
              <button
                className="btn-outline"
                style={{ marginTop: 0 }}
                onClick={() => navigateTo('home')}
              >
                Explore Main Residence
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            {/* <div className="brand-name" style={{ color: '#fff' }}>
              Stackly
            </div> */}
            <img src={logo} className='logo'/>
            <div className="brand-sub" style={{ marginBottom: '20px' }}>
              Grand Hotel & Resort
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#bfb7aa',
                maxWidth: '300px',
              }}
            >
              Via Cristoforo Colombo 42, 84017 Positano SA, Italy
              <br />
              Concierge: +39 089 875 404
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => navigateTo('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo('404', 'About Us')}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('404', 'Services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('404', 'Contact Us')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4>Guest Portal</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => navigateTo('404', 'Member Login')}>
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('404', 'Guest Registration')}
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('404', 'Manage Reservations')}
                >
                  Manage Booking
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('404', 'Private Events')}>
                  Private Events
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4>The Journal</h4>
            <p style={{ fontSize: '0.88rem', color: '#bfb7aa' }}>
              Receive seasonal invitations, private tasting announcements, and
              coastal dispatches.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterEmail('');
                navigateTo('404', 'Newsletter Subscription');
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 The Stackly Grand Hotel & Resort.</span>
          <span> All rights reserved.</span>
          <span>Privacy • Terms • Accessibility</span>
        </div>
      </footer>
    </div>
  );
}
