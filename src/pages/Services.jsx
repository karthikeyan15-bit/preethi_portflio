import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Services.css';

const servicesData = {
  overview: {
    title: 'My Services',
    subtitle: 'Comprehensive digital marketing solutions tailored to grow your business online.',
  },
  'website-design': {
    icon: '🌐',
    image: '/services/website-design.png',
    title: 'Website Design',
    tagline: 'Custom, Modern & Conversion-Focused Website Design',
    hero: `In today’s digital world, your website is more than just an online presence — it’s your most powerful business asset. Working with a professional website design freelancer ensures that your website is not only visually appealing but also strategically built to convert visitors into customers. A well-designed website can define your brand, build trust, and drive consistent growth.

If you’re searching for the best website design freelancer, you need someone who understands both design and business. A website should not just look good — it should perform. Every element, from layout to navigation, plays a crucial role in user experience and conversions. That’s why I focus on creating websites that are clean, modern, and result-driven.

As a website design freelancer, the goal is to create websites that align perfectly with your business objectives. Whether you need a business website, portfolio, or landing page, every project is built with a strong foundation of user experience, speed optimization, and SEO-friendly structure. This ensures that your website not only attracts visitors but also keeps them engaged.

Choosing the best website design freelancer means getting a website that works for you 24/7. From responsive design to mobile optimization, every website is built to perform seamlessly across all devices. A fast-loading and user-friendly website improves engagement and increases the chances of converting visitors into paying customers.

A professional website design freelancer focuses on customization rather than using generic templates. Your business is unique, and your website should reflect that. By understanding your brand, target audience, and goals, a personalized website is created that communicates your message clearly and effectively.

If you’re looking for the best website design freelancer, it’s important to choose someone who prioritizes both design and functionality. A great website balances aesthetics with performance, ensuring that users have a smooth and engaging experience from the moment they land on your page.

As a website design freelancer, the approach is always centered around delivering value. This includes creating intuitive navigation, clear call-to-actions, and layouts that guide users toward taking action. Whether your goal is lead generation, brand awareness, or online sales, your website is designed to support your growth.

Working with a website design freelancer also means flexibility and personalized attention. Every project is handled with care, ensuring that your requirements are met and your expectations are exceeded. From the initial concept to the final launch, the process is focused on delivering a website that truly represents your brand.

When you choose the best website design freelancer, you’re not just investing in a website — you’re investing in your business growth. A well-designed website builds credibility, improves user experience, and helps you stand out in a competitive market.

If your goal is to create a strong online presence with a website that is modern, functional, and conversion-focused, working with a website design freelancer is the right decision. The focus is always on delivering websites that not only look great but also drive real results for your business.`,
    features: [
      { title: 'Responsive Design', desc: 'From mobile phones to desktops, every website is built to perform seamlessly across all devices.', icon: '📱' },
      { title: 'Strategic Conversion', desc: 'Layouts and navigation strategically built to convert visitors into paying customers.', icon: '🎯' },
      { title: 'Speed Optimization', desc: 'Fast-loading websites that improve engagement and performance for your business.', icon: '⚡' },
      { title: 'Customized Solutions', desc: 'Personalized websites that communicate your brand message clearly and effectively.', icon: '🛠️' },
      { title: 'SEO-Friendly', desc: 'Built with a strong foundation of SEO-friendly structure to help you rank better.', icon: '🔍' },
      { title: 'User Experience', desc: 'Intuitive navigation and clear call-to-actions to guide users toward taking action.', icon: '🤝' },
    ],
    process: [
      { step: '01', title: 'Strategy', desc: 'Understanding your business objectives and brand identity.' },
      { step: '02', title: 'Design', desc: 'Creating a clean, modern, and visually appealing layout.' },
      { step: '03', title: 'Build', desc: 'Developing a functional, fast, and responsive website.' },
      { step: '04', title: 'Results', desc: 'Launching a site that builds credibility and drives growth.' },
    ],
  },
  smm: {
    icon: '📱',
    image: '/services/smm.png',
    title: 'Social Media Management',
    tagline: 'Strategic Social Media Growth & Management',
    hero: `Social media is one of the most powerful tools to build your brand and connect with your audience. Working with a professional social media manager freelancer ensures that your business stays consistent, engaging, and visible across all platforms. A strong social media presence is not just about posting content — it’s about creating impact and driving results.

If you’re searching for the best social media manager freelancer, you need someone who understands your audience, your brand voice, and the latest trends. Social media is constantly evolving, and having the right strategy can make all the difference in growing your business online.

As a social media manager freelancer, the focus is on creating content that attracts attention and builds meaningful engagement. From content planning to execution, every step is designed to ensure your brand stands out in a crowded market. Whether it’s Instagram, Facebook, or other platforms, the goal is to create a strong and consistent presence.

Choosing the best social media manager freelancer means getting a strategy that is tailored to your business goals. This includes content calendars, creative posts, reels, and campaigns that resonate with your target audience. It’s not just about likes and followers — it’s about building a community and driving real business growth.

A professional social media manager freelancer ensures that your content is not only creative but also strategic. By analyzing trends, audience behavior, and performance metrics, every post is optimized to deliver better reach and engagement. This data-driven approach helps in continuously improving your social media performance.

If you’re looking for the best social media manager freelancer, consistency and quality are key factors. Regular posting, engaging captions, and visually appealing creatives play a major role in building your brand identity. Every detail is carefully planned to maintain a strong and professional online presence.

As a social media manager freelancer, the approach includes managing everything from content creation to audience interaction. Responding to comments, engaging with followers, and maintaining brand communication are essential parts of building trust and loyalty. This helps in turning followers into customers.

Working with a social media manager freelancer also gives you the advantage of flexibility and personalized attention. Every strategy is customized based on your business type, target audience, and industry trends. The focus is always on delivering content that aligns with your brand and drives results.

When you choose the best social media manager freelancer, you’re investing in long-term growth. A well-managed social media presence increases brand awareness, improves engagement, and creates opportunities for lead generation and sales.

If you want to build a strong online presence and grow your business through social media, partnering with a social media manager freelancer is the right step. The goal is to create content that connects, engages, and converts helping your brand stand out and succeed in the digital world.`,
    features: [
      { title: 'Content Strategy', desc: 'Customized strategies tailored to your business goals and audience behavior.', icon: '📝' },
      { title: 'Community Growth', desc: 'Building a community and driving real business growth through engagement.', icon: '💬' },
      { title: 'Data-Driven Insights', desc: 'Analyzing trends and performance metrics to continuously improve performance.', icon: '📊' },
      { title: 'Brand Identity', desc: 'Regular posting and visually appealing creatives that build your brand identity.', icon: '📸' },
      { title: 'Audience Interaction', desc: 'Managing interactions and maintaining brand communication to build trust.', icon: '💼' },
      { title: 'Long-term Growth', desc: 'Investing in a well-managed presence for increased brand awareness and sales.', icon: '📈' },
    ],
    process: [
      { step: '01', title: 'Analysis', desc: 'Understanding your brand voice, audience, and industry trends.' },
      { step: '02', title: 'Planning', desc: 'Developing content calendars and creative campaign strategies.' },
      { step: '03', title: 'Execution', desc: 'Creating and publishing engaging content across all platforms.' },
      { step: '04', title: 'Optimization', desc: 'Monitoring results and optimizing for better reach and impact.' },
    ],
  },
  seo: {
    icon: '🔍',
    image: '/services/seo.png',
    title: 'Search Engine Optimization',
    tagline: 'Rank Higher & Grow Organically With Expert SEO',
    hero: `In today’s competitive digital world, ranking on search engines is essential for business growth. Working with a professional SEO freelancer helps your website gain visibility, attract the right audience, and generate consistent organic traffic. SEO is not just about ranking higher — it’s about reaching the right people at the right time.

If you’re searching for the best SEO freelancer, you need someone who understands search engine algorithms, user intent, and data-driven strategies. A strong SEO strategy ensures your business stays ahead of the competition and continues to grow organically.

As an SEO freelancer, the focus is on improving your website’s visibility through a combination of on-page, off-page, and technical SEO. This includes optimizing your website structure, improving content quality, and building high-quality backlinks to increase your domain authority.

Choosing the best SEO freelancer means investing in long-term results. Unlike paid ads, SEO delivers sustainable growth by driving consistent traffic to your website. With the right strategy, your business can achieve higher rankings, better engagement, and increased conversions over time.

A professional SEO freelancer works on keyword research, competitor analysis, and content optimization to ensure your website ranks for the most relevant search terms. Every strategy is tailored to your business goals, helping you attract potential customers who are actively searching for your services.

If you’re looking for the best SEO freelancer, it’s important to focus on both strategy and execution. SEO requires continuous monitoring, analysis, and optimization to stay aligned with changing algorithms and market trends. A data-driven approach ensures consistent improvement in performance.

As an SEO freelancer, the approach includes optimizing website speed, mobile responsiveness, and user experience. These factors play a crucial role in search engine rankings and overall website performance. A well-optimized website not only ranks better but also provides a seamless experience for users.

Working with an SEO freelancer also means having a clear and transparent process. Regular performance tracking, reports, and updates help you understand how your website is growing and what strategies are delivering results. This ensures complete clarity and trust throughout the process.

When you choose the best SEO freelancer, you’re focusing on building a strong online foundation for your business. SEO helps in increasing brand credibility, driving targeted traffic, and generating high-quality leads without relying entirely on paid advertising.

If your goal is to rank higher on search engines and grow your business organically, partnering with an SEO freelancer is the right decision. The focus is always on delivering strategies that not only improve rankings but also drive real business results.`,
    features: [
      { title: 'Sustainable Growth', desc: 'Investing in long-term results by driving consistent organic traffic to your site.', icon: '🌱' },
      { title: 'Keyword Strategy', desc: 'Researching relevant search terms to attract people actively searching for you.', icon: '🔑' },
      { title: 'Technical Optimization', desc: 'Optimizing website speed, mobile responsiveness, and technical structure.', icon: '⚙️' },
      { title: 'Backlink Building', desc: 'Building high-quality backlinks to increase your domain authority and ranking.', icon: '🔗' },
      { title: 'Performance Tracking', desc: 'Regular reports and performance tracking to understand how your site is growing.', icon: '📊' },
      { title: 'Brand Credibility', desc: 'Increasing credibility and generating high-quality leads without paid ads.', icon: '🏆' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Deep analysis of search engine algorithms and your current site state.' },
      { step: '02', title: 'Research', desc: 'Keyword research and competitor analysis to find opportunities.' },
      { step: '03', title: 'Optimize', desc: 'Implementing on-page, technical, and off-page optimizations.' },
      { step: '04', title: 'Monitor', desc: 'Continuous optimization to stay aligned with changing algorithms.' },
    ],
  },
  'google-meta-ads': {
    icon: '🎯',
    image: '/services/ads.png',
    title: 'Meta & Google Ads',
    tagline: 'High-Converting Paid Ads For Immediate Growth',
    hero: `In today’s competitive digital space, paid advertising is one of the fastest ways to generate leads and grow your business. Working with the best digital Google Ads freelancer and best Meta Ads freelancer ensures that your campaigns are not just running but delivering real, measurable results.

Running ads without the right strategy can lead to wasted budget and poor performance. That’s why choosing the best digital Google Ads freelancer is essential for creating campaigns that target the right audience, optimize spending, and maximize ROI. From keyword targeting to ad copy and bidding strategies, every element is designed for performance.

At the same time, social media advertising plays a crucial role in brand visibility and engagement. As the best Meta Ads freelancer, the focus is on creating high-converting campaigns across platforms like Facebook and Instagram. These campaigns are designed to capture attention, generate leads, and drive conversions effectively.

The advantage of working with the best digital Google Ads freelancer is the ability to reach users who are actively searching for your services. Google Ads allows your business to appear at the top of search results, bringing in high-intent traffic that is more likely to convert into customers.

On the other hand, partnering with the best Meta Ads freelancer helps you tap into a highly targeted audience based on interests, behavior, and demographics. This ensures your brand reaches the right people at the right time, increasing engagement and building brand awareness.

A strong advertising strategy combines both search and social platforms. As the best digital Google Ads freelancer, campaigns are optimized through continuous testing, keyword refinement, and performance tracking. This ensures that your ads deliver consistent and scalable results over time.

Similarly, as the best Meta Ads freelancer, the focus is on creative strategy, audience targeting, and campaign optimization. From eye-catching creatives to compelling ad copies, every campaign is designed to stand out and drive action.

Working with the best digital Google Ads freelancer and best Meta Ads freelancer also means having a data-driven approach. Every campaign is monitored closely, with insights used to improve performance and reduce costs. This ensures that your advertising budget is used effectively to generate maximum returns.

Whether your goal is lead generation, website traffic, or sales, paid advertising provides immediate results when executed correctly. Choosing the best digital Google Ads freelancer ensures your campaigns are optimized for search performance, while working with the best Meta Ads freelancer ensures strong engagement and brand recall on social media platforms.

If you’re looking to scale your business quickly and efficiently, investing in paid advertising is the right step. With the expertise of the best digital Google Ads freelancer and best Meta Ads freelancer, your business can achieve consistent growth, better reach, and higher conversions.`,
    features: [
      { title: 'Google Ads Expert', desc: 'Reach users who are actively searching for your services with intent-based traffic.', icon: '🔍' },
      { title: 'Meta Ads Precision', desc: 'Target audiences based on interests, behavior, and demographics for recall.', icon: '📘' },
      { title: 'ROI Optimization', desc: 'Continuous testing and optimization to maximize returns on your ad spend.', icon: '💰' },
      { title: 'Creative Strategy', desc: 'Eye-catching creatives and compelling ad copies designed to drive action.', icon: '🎨' },
      { title: 'Data-Driven Insights', desc: 'Closely monitoring campaigns to improve performance and reduce costs.', icon: '📊' },
      { title: 'Scalable Results', desc: 'Optimized campaigns delivering consistent growth for your business over time.', icon: '🚀' },
    ],
    process: [
      { step: '01', title: 'Strategy', desc: 'Defining your goals, whether it’s lead generation or sales growth.' },
      { step: '02', title: 'Setup', desc: 'Creating the right audience targeting and high-intent keyword strategies.' },
      { step: '03', title: 'Launch', desc: 'Deploying high-converting ad campaigns across Google and Meta.' },
      { step: '04', title: 'Scale', desc: 'Monitoring, testing, and optimizing for maximum ROI and performance.' },
    ],
  },
};

export default function Services() {
  const { serviceSlug } = useParams();

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
  }, [serviceSlug]);

  // Service detail page
  if (serviceSlug && servicesData[serviceSlug]) {
    const service = servicesData[serviceSlug];
    return (
      <>
        <section className="page-header service-detail-header">
          <div className="page-header-bg">
            <div className="page-orb page-orb--1"></div>
            <div className="page-orb page-orb--2"></div>
          </div>
          <div className="container">
            <Link to="/services" className="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              All Services
            </Link>
            <div className="service-detail-icon">{service.icon}</div>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-subtitle">{service.tagline}</p>
          </div>
        </section>

        <section className="section service-hero-section">
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-image-wrap reveal">
                <img src={service.image} alt={service.title} className="service-detail-img" />
                <div className="service-image-decoration"></div>
              </div>
              <div className="service-detail-content-wrap reveal">
                <div className="service-content-paragraphs">
                  {service.hero.split('\n\n').map((para, idx) => (
                    <p key={idx} className="service-detail-para">{para}</p>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  <span>Get A Free Quote</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section features-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">What's Included</span>
              <h2 className="section-title">Key <span className="highlight">Features</span></h2>
            </div>
            <div className="features-grid">
              {service.features.map((f, i) => (
                <div className="feature-card reveal" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">My <span className="highlight">Process</span></h2>
            </div>
            <div className="process-grid">
              {service.process.map((p, i) => (
                <div className="process-card reveal" key={i}>
                  <div className="process-step">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {i < service.process.length - 1 && <div className="process-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-cta-section">
          <div className="container">
            <div className="cta-card reveal">
              <div className="cta-glow"></div>
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss your {service.title.toLowerCase()} needs and create a strategy that delivers results.</p>
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Me Today</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Services overview page
  const allServices = ['website-design', 'smm', 'seo', 'google-meta-ads'];
  return (
    <>
      <section className="page-header">
        <div className="page-header-bg">
          <div className="page-orb page-orb--1"></div>
          <div className="page-orb page-orb--2"></div>
        </div>
        <div className="container">
          <span className="section-tag">What I Do</span>
          <h1 className="page-title">My <span className="gradient-text">Services</span></h1>
          <p className="page-subtitle">Comprehensive digital marketing solutions tailored to grow your business online.</p>
        </div>
      </section>

      <section className="section services-overview-section">
        <div className="container">
          <div className="services-overview-grid">
            {allServices.map((slug) => {
              const s = servicesData[slug];
              return (
                <Link to={`/services/${slug}`} className="service-overview-card reveal" key={slug}>
                  <div className="sov-icon-wrap">
                    <span className="sov-icon">{s.icon}</span>
                  </div>
                  <div className="sov-content">
                    <h3>{s.title}</h3>
                    <p className="sov-tagline">{s.tagline}</p>
                    <p className="sov-desc">
                      {s.hero.split('\n\n')[0].substring(0, 180)}...
                    </p>
                    <div className="sov-features">
                      {s.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="sov-feature">{f.icon} {f.title}</span>
                      ))}
                    </div>
                    <div className="sov-arrow">
                      Read More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card reveal">
            <div className="cta-glow"></div>
            <h2>Not Sure What You Need?</h2>
            <p>Let's chat! I'll help you identify the right strategy for your business goals.</p>
            <Link to="/contact" className="btn btn-primary">
              <span>Get A Free Consultation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
