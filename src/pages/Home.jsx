import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Home.css';

export default function Home() {
  const countersRef = useRef([]);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Counter animation
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = prefix + Math.floor(current) + suffix;
            }, 20);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  const services = [
    {
      icon: '🌐',
      title: 'Website Design',
      desc: 'Stunning, responsive websites that captivate visitors and convert them into customers. Built for speed, SEO, and results.',
      link: '/services/website-design',
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      desc: 'Strategic social media presence across Instagram, LinkedIn, Facebook & more. Content that engages and communities that grow.',
      link: '/services/smm',
    },
    {
      icon: '🔍',
      title: 'SEO',
      desc: 'Dominate search rankings with technical SEO, on-page optimization, and strategic link building that drives organic traffic.',
      link: '/services/seo',
    },
    {
      icon: '🎯',
      title: 'Google & Meta Ads',
      desc: 'High-ROI ad campaigns on Google and Meta platforms. Data-driven targeting, creative testing, and continuous optimization.',
      link: '/services/google-meta-ads',
    },
  ];

  const stats = [
    { target: 150, suffix: '%', label: 'Avg. Traffic Growth', icon: '📈' },
    { target: 50, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
    { target: 3, suffix: '×', label: 'Engagement Boost', icon: '💬' },
    { target: 40, suffix: '%', label: 'Lower Ad Costs', icon: '💰' },
  ];

  const testimonials = [
    {
      text: "Preethi transformed our online presence completely. Our website traffic increased by 200% and we started getting quality leads within the first month.",
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      rating: 5,
    },
    {
      text: "Her SEO strategy was a game-changer. We went from page 5 to position #1 for our main keywords. The ROI has been incredible.",
      name: "Ananya Reddy",
      role: "Founder, StyleNest",
      rating: 5,
    },
    {
      text: "The social media campaigns Preethi designed for us were creative, strategic, and highly effective. Our engagement rate tripled in just 3 months.",
      name: "Vikram Patel",
      role: "Marketing Head, FreshBite",
      rating: 5,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb--1"></div>
          <div className="hero-orb hero-orb--2"></div>
          <div className="hero-orb hero-orb--3"></div>
          <div className="hero-grid-lines"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              Available for Projects
            </div>
            <h1 className="hero-title">
              I'm <span className="gradient-text">Preethi Sharma</span>
            </h1>
            <p className="hero-role">Digital Marketing Specialist</p>
            <p className="hero-tagline">
              In today’s fast-paced digital world, having a strong online presence is no longer optional — it’s essential. I help brands grow, connect, and convert through strategic and result-driven marketing solutions tailored to your needs.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Let's Work Together</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
            <div className="hero-stats-inline">
              <div className="stat-inline">
                <span className="stat-num">1K+</span>
                <span className="stat-label">LinkedIn Followers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-inline">
                <span className="stat-num">500+</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-inline">
                <span className="stat-num">BCA</span>
                <span className="stat-label">Graduate</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring hero-image-ring--inner"></div>
            <div className="hero-image-wrapper">
              <img src="/preethi_profile.png" alt="Preethi Sharma - Digital Marketing Specialist" className="hero-img" />
            </div>
            <div className="floating-tag tag-seo">
              <span>🔍</span> SEO Expert
            </div>
            <div className="floating-tag tag-ads">
              <span>🎯</span> Google Ads
            </div>
            <div className="floating-tag tag-design">
              <span>🌐</span> Web Design
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid reveal">
            {stats.map((stat, i) => (
              <div className="stat-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">
                  <span className="counter" data-target={stat.target} data-suffix={stat.suffix}>0{stat.suffix}</span>
                </div>
                <p className="stat-name">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section services-preview" id="services-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">My <span className="highlight">Services</span></h2>
            <p className="section-subtitle">Comprehensive digital marketing solutions tailored to grow your business online.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <Link to={service.link} className="service-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="service-icon-wrap">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION (New Content) */}
      <section className="section approach-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">My Strategy</span>
            <h2 className="section-title">Strategic <span className="highlight">Digital Marketing</span></h2>
          </div>
          <div className="approach-content reveal">
            <div className="approach-main">
              <p>As a digital marketing freelancer, my approach is simple: focus on what works. Every business is unique, and so should be its marketing strategy. Whether you’re a startup trying to build visibility or an established business aiming to scale, I create customized strategies that drive real results. From search engine optimization (SEO) to social media marketing and performance campaigns, I ensure that every effort aligns with your business objectives.</p>
              <p>Choosing a digital marketing freelancer gives you flexibility, personalized attention, and cost-effective solutions compared to large agencies. I work closely with my clients to understand their brand voice, target audience, and industry trends. This allows me to create campaigns that not only attract attention but also build trust and long-term customer relationships.</p>
              <p>If you’re searching for the best digital marketing freelancer, you need someone who not only executes but also strategizes. My expertise lies in identifying opportunities, analyzing data, and optimizing campaigns continuously. I don’t believe in one-time success. I focus on sustainable growth that keeps your brand ahead of the competition.</p>
              <p>What makes me stand out as the best digital marketing freelancer is my ability to blend creativity with analytics. I don’t just run campaigns; I monitor, test, and optimize them for maximum ROI. Every decision is backed by insights, ensuring your marketing budget is used effectively. In a competitive market, your brand needs more than just visibility — it needs impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME (Updated) */}
      <section className="section why-section">
        <div className="why-bg-gradient"></div>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">The Advantage</span>
            <h2 className="section-title">Why Hire A <span className="highlight">Freelancer</span></h2>
            <p className="section-subtitle">Personalized service, faster execution, and better ROI for your business.</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-num">01</div>
              <h3>Proven Expertise</h3>
              <p>As a digital marketing freelancer, I specialize in SEO, Social Media Marketing, Paid Ads, and Website Optimization to improve your ranking and experience.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-num">02</div>
              <h3>Data-Driven Growth</h3>
              <p>I ensure transparent communication, regular performance updates, and a data-driven approach to help you achieve measurable growth and sales.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-num">03</div>
              <h3>Conversion Focused</h3>
              <p>I focus on creating strategies that not only bring traffic but also convert visitors into loyal customers, scaling your online presence with impact.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-num">04</div>
              <h3>Always Ahead</h3>
              <p>I stay updated with the latest trends, tools, and algorithm changes to ensure your brand always stays ahead in the digital game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Client Love</span>
            <h2 className="section-title">What Clients <span className="highlight">Say</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card reveal" key={i}>
                <div className="testimonial-stars">
                  {'⭐'.repeat(t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="author-name">{t.name}</p>
                    <p className="author-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <div className="cta-glow"></div>
            <h2>Ready to Grow Your Brand?</h2>
            <p>Let’s work together to build your online presence, generate quality leads, and grow your business. If you’re looking for a digital marketing freelancer who is dedicated, strategic, and results-oriented, I’m here to help you succeed.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Get A Free Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a href="mailto:preethisharma819@gmail.com" className="btn btn-secondary">Email Me Directly</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
