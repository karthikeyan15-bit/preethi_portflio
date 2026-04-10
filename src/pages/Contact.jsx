import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // User needs to replace this with their actual key from web3forms.com
      from_name: formData.name,
      subject: `New Portfolio Inquiry from ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        navigate('/thank-you', { state: { name: formData.name } });
      } else {
        console.error("Submission failed:", result);
        alert("Something went wrong. Please try again later.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="page-header-bg">
          <div className="page-orb page-orb--1"></div>
          <div className="page-orb page-orb--2"></div>
        </div>
        <div className="container">
          <span className="section-tag">Let's Talk</span>
          <h1 className="page-title">Get In <span className="gradient-text">Touch</span></h1>
          <p className="page-subtitle">Ready to grow your brand? Let's discuss your project and create a winning strategy.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info reveal">
              <h2>Let's Build Something Great Together</h2>
              <p className="contact-lead">
                Whether you're a startup looking to establish your digital presence or an established brand aiming to scale, I'd love to hear about your goals.
              </p>

              <div className="contact-cards">
                <a href="mailto:preethisharma819@gmail.com" className="contact-card">
                  <div className="cc-icon">📧</div>
                  <div>
                    <span className="cc-label">Email</span>
                    <span className="cc-value">preethisharma819@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+919122745802" className="contact-card">
                  <div className="cc-icon">📞</div>
                  <div>
                    <span className="cc-label">Phone</span>
                    <span className="cc-value">+91 91227 45802</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/preethi-sharma-v-708527358" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="cc-icon">💼</div>
                  <div>
                    <span className="cc-label">LinkedIn</span>
                    <span className="cc-value">Preethi Sharma.V</span>
                  </div>
                </a>
                <div className="contact-card">
                  <div className="cc-icon">📍</div>
                  <div>
                    <span className="cc-label">Location</span>
                    <span className="cc-value">Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>

              <div className="availability-badge">
                <span className="avail-dot"></span>
                Currently accepting new clients
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper reveal">
              <form className="contact-form" onSubmit={handleSubmit} id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="formName">Full Name *</label>
                    <input
                      type="text"
                      id="formName"
                      name="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formEmail">Email Address *</label>
                    <input
                      type="email"
                      id="formEmail"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="formPhone">Phone Number</label>
                    <input
                      type="tel"
                      id="formPhone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formService">Service Interested In *</label>
                    <select
                      id="formService"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="website-design">Website Design</option>
                      <option value="smm">Social Media Marketing</option>
                      <option value="seo">SEO</option>
                      <option value="google-meta-ads">Google & Meta Ads</option>
                      <option value="full-package">Full Digital Marketing Package</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="formBudget">Monthly Budget Range</label>
                  <select
                    id="formBudget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l+">₹1,00,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="formMessage">Project Details *</label>
                  <textarea
                    id="formMessage"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-full ${isSubmitting ? 'submitting' : ''}`}
                  id="contactSubmitBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
