import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2020', title: 'BCA Degree Completed', desc: 'Built a strong foundation in computer applications and technology.' },
    { year: '2021', title: 'Digital Marketing Journey Begins', desc: 'Transitioned into digital marketing, discovering a passion for online brand growth.' },
    { year: '2022', title: 'Digital Academy 360', desc: 'Professional training in SEO, Google Ads, Meta Ads, and comprehensive digital marketing strategies.' },
    { year: '2023', title: 'Freelance Career Launch', desc: 'Started working with startups and local businesses in Bangalore, delivering measurable results.' },
    { year: '2024', title: 'Growing Impact', desc: 'Expanded services to include website design, building complete digital ecosystems for clients.' },
    { year: 'Now', title: 'Building Brands', desc: 'Actively helping businesses grow their online presence with data-driven marketing strategies.' },
  ];

  const tools = [
    { name: 'Google Analytics', category: 'Analytics', icon: '📊' },
    { name: 'Google Ads', category: 'Paid Search', icon: '🎯' },
    { name: 'SEMrush', category: 'SEO', icon: '🔍' },
    { name: 'Google Search Console', category: 'SEO', icon: '📡' },
    { name: 'Meta Business Suite', category: 'Social Ads', icon: '📘' },
    { name: 'Canva', category: 'Design', icon: '🎨' },
    { name: 'WordPress', category: 'CMS', icon: '🌐' },
    { name: 'HubSpot', category: 'CRM', icon: '🧲' },
    { name: 'Mailchimp', category: 'Email', icon: '📧' },
    { name: 'Ahrefs', category: 'SEO', icon: '🔗' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="page-orb page-orb--1"></div>
          <div className="page-orb page-orb--2"></div>
        </div>
        <div className="container">
          <span className="section-tag">Get To Know Me</span>
          <h1 className="page-title">About <span className="gradient-text">Preethi</span></h1>
          <p className="page-subtitle">BCA graduate turned Digital Marketing Specialist, passionate about helping brands grow in the digital world.</p>
        </div>
      </section>

      {/* About Intro */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-section reveal">
              <div className="about-img-wrapper">
                <img src="/preethi_profile.png" alt="Preethi Sharma" className="about-img" />
                <div className="about-img-border"></div>
              </div>
              <div className="about-quick-info">
                <div className="quick-item">
                  <span className="quick-icon">📍</span>
                  <span>Bengaluru, Karnataka</span>
                </div>
                <div className="quick-item">
                  <span className="quick-icon">🎓</span>
                  <span>BCA Graduate</span>
                </div>
                <div className="quick-item">
                  <span className="quick-icon">📧</span>
                  <a href="mailto:preethisharma819@gmail.com">preethisharma819@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="about-text-section reveal">
              <h2>Hello, I’m Preethi Sharma 👋</h2>
              <p className="about-lead">
                A passionate digital marketing freelancer helping businesses grow and succeed online. If you’re looking for the best digital marketing freelancer who can manage everything from website design to performance marketing, you’re in the right place.
              </p>
              <p>
                As a freelance digital marketer, I combine creativity, strategy, and data-driven execution to build websites that not only look great but also convert. My focus is on delivering real, measurable results through impactful digital experiences.
              </p>
              <p>
                With experience handling 15+ clients, I’ve worked across SEO, social media marketing, and paid ads. As a digital marketing expert, I’ve managed Meta Ads and Google Ads campaigns to generate quality leads, increase traffic, and drive revenue.
              </p>
              <p>
                Being a digital marketing freelancer, I create customized strategies tailored to your business goals — whether it’s improving rankings as an SEO specialist, building your brand on social media, or running high-converting ad campaigns.
              </p>
              <p>
                What sets me apart as the best digital marketing freelancer is my commitment to delivering measurable results. I follow a data-driven approach, continuously analyzing and optimizing campaigns to maximize ROI. My work is not just about execution — it’s about building long-term success for your brand.
              </p>
              <p>
                I believe in maintaining transparency, clear communication, and a client-focused approach. As an experienced digital marketing freelancer, I don’t just work for you — I work with you, understanding your vision and turning it into reality through effective digital strategies.
              </p>
              <div className="about-cta-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>Let's Work Together</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="section expertise-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What I Bring</span>
            <h2 className="section-title">Core <span className="highlight">Expertise</span></h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card reveal">
              <div className="exp-icon">🔍</div>
              <h3>SEO Mastery</h3>
              <p>On-page, Technical, and Local SEO. From keyword research to Core Web Vitals, I build organic strategies that rank and sustain.</p>
              <div className="exp-tags">
                <span>On-Page SEO</span><span>Technical SEO</span><span>Local SEO</span><span>Keyword Research</span>
              </div>
            </div>
            <div className="expertise-card reveal">
              <div className="exp-icon">🎯</div>
              <h3>Paid Advertising</h3>
              <p>ROI-focused Google Ads & Meta Ads campaigns with continuous optimization, creative testing, and strategic bid management.</p>
              <div className="exp-tags">
                <span>Google Ads</span><span>Meta Ads</span><span>Remarketing</span><span>ROAS</span>
              </div>
            </div>
            <div className="expertise-card reveal">
              <div className="exp-icon">🌐</div>
              <h3>Web Design</h3>
              <p>Beautiful, fast, user-friendly websites that build trust, attract leads, and convert visitors into loyal clients.</p>
              <div className="exp-tags">
                <span>WordPress</span><span>Responsive</span><span>CRO</span><span>UX Design</span>
              </div>
            </div>
            <div className="expertise-card reveal">
              <div className="exp-icon">📱</div>
              <h3>Social Strategy</h3>
              <p>End-to-end social media strategy including content planning, community management, and growth across all platforms.</p>
              <div className="exp-tags">
                <span>Instagram</span><span>LinkedIn</span><span>Content Strategy</span><span>Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">My Path</span>
            <h2 className="section-title">Professional <span className="highlight">Journey</span></h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className={`timeline-item reveal ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section tools-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">Tools I <span className="highlight">Use</span></h2>
          </div>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div className="tool-card reveal" key={i}>
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
                <span className="tool-category">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
