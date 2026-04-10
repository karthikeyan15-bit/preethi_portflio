import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  const location = useLocation();
  const name = location.state?.name || 'there';

  useEffect(() => {
    // Confetti animation
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6C5CE7', '#A29BFE', '#00CEC9', '#55EFC4', '#FD79A8', '#FAB1C8', '#FFEAA7'];
    const confettiPieces = [];

    for (let i = 0; i < 100; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    let frame;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiPieces.forEach((p) => {
        p.y += p.speed;
        p.angle += p.spin;
        p.x += Math.sin(p.angle) * 0.5;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });
      frame = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="thankyou-page">
      <canvas id="confetti-canvas" className="confetti-canvas"></canvas>
      <div className="thankyou-bg">
        <div className="ty-orb ty-orb--1"></div>
        <div className="ty-orb ty-orb--2"></div>
        <div className="ty-orb ty-orb--3"></div>
      </div>

      <div className="thankyou-content">
        <div className="checkmark-circle">
          <svg viewBox="0 0 52 52" className="checkmark-svg">
            <circle cx="26" cy="26" r="25" fill="none" className="checkmark-ring"/>
            <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="checkmark-check"/>
          </svg>
        </div>

        <h1 className="ty-title">Thank You, {name}! 🎉</h1>
        <p className="ty-subtitle">
          Your message has been received successfully!
        </p>
        <p className="ty-text">
          I'll review your project details and get back to you within <strong>24 hours</strong>. 
          In the meantime, feel free to check out my services or connect with me on LinkedIn.
        </p>

        <div className="ty-what-next">
          <h3>What Happens Next?</h3>
          <div className="ty-steps">
            <div className="ty-step">
              <div className="ty-step-num">1</div>
              <div>
                <h4>I'll Review Your Request</h4>
                <p>I'll carefully go through your project details and requirements.</p>
              </div>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">2</div>
              <div>
                <h4>Strategy Discussion</h4>
                <p>We'll schedule a call to discuss the best approach for your goals.</p>
              </div>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">3</div>
              <div>
                <h4>Custom Proposal</h4>
                <p>You'll receive a detailed proposal tailored to your needs and budget.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ty-actions">
          <Link to="/" className="btn btn-primary">
            <span>Back to Home</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link to="/services" className="btn btn-secondary">Explore Services</Link>
        </div>

        <div className="ty-social">
          <p>Connect on social:</p>
          <div className="ty-social-links">
            <a href="https://www.linkedin.com/in/preethi-sharma-v-708527358" target="_blank" rel="noopener noreferrer" className="ty-social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:preethisharma819@gmail.com" className="ty-social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
