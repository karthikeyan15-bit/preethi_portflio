import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Home">
          PS<span className="logo-dot">.</span>
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          </li>
          <li
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }
              }}
            >
              Services
              <svg className={`dropdown-arrow ${servicesOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <ul className={`dropdown-menu ${servicesOpen ? 'dropdown-menu--open' : ''}`}>
              <li>
                <Link to="/services/website-design" className="dropdown-link">
                  <span className="dropdown-icon">🌐</span>
                  <div>
                    <span className="dropdown-title">Website Design</span>
                    <span className="dropdown-desc">Beautiful, fast, conversion-optimized websites</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/services/smm" className="dropdown-link">
                  <span className="dropdown-icon">📱</span>
                  <div>
                    <span className="dropdown-title">Social Media Marketing</span>
                    <span className="dropdown-desc">Strategic social presence that builds community</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="dropdown-link">
                  <span className="dropdown-icon">🔍</span>
                  <div>
                    <span className="dropdown-title">SEO</span>
                    <span className="dropdown-desc">Rank higher, drive organic traffic that converts</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/services/google-meta-ads" className="dropdown-link">
                  <span className="dropdown-icon">🎯</span>
                  <div>
                    <span className="dropdown-title">Google & Meta Ads</span>
                    <span className="dropdown-desc">High-ROI paid campaigns that scale</span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className={`nav-link nav-cta ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
