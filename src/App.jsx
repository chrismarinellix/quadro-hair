import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('benefits')

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">QUADRO HAIR</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#benefits">Benefits</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="pulsating-orb"></div>
          <h1 className="hero-title">Transform Your Hair</h1>
          <h2 className="hero-subtitle">With Nano Plaster Technology</h2>
          <p className="hero-description">
            Experience the revolutionary formaldehyde-free keratin treatment that lasts 6-12 months
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Nano Plaster */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What is Nano Plaster?</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h3>Revolutionary Hair Technology</h3>
              <p>
                Nano Plaster (Nanoplasty) represents the latest breakthrough in hair smoothing technology.
                Using advanced nano-molecular science, this treatment penetrates deep into the hair shaft
                to restructure and repair from within.
              </p>
              <p>
                Unlike traditional keratin treatments, Nano Plaster is completely formaldehyde-free,
                making it safer for both you and our stylists. The treatment works by filling gaps in
                damaged hair cuticles with nano-sized particles, resulting in smoother, shinier,
                healthier-looking hair.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">6-12</div>
                  <div className="stat-label">Months Duration</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Frizz Reduction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">0%</div>
                  <div className="stat-label">Formaldehyde</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/salon-interior.png"
                alt="Professional salon treatment environment"
                className="about-real-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Nano Plaster?</h2>
            <div className="title-underline"></div>
          </div>

          {/* Benefits Tabs */}
          <div className="benefits-tabs">
            <button
              className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Key Benefits
            </button>
            <button
              className={`tab ${activeTab === 'comparison' ? 'active' : ''}`}
              onClick={() => setActiveTab('comparison')}
            >
              vs Competitors
            </button>
            <button
              className={`tab ${activeTab === 'process' ? 'active' : ''}`}
              onClick={() => setActiveTab('process')}
            >
              The Process
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'benefits' && (
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">✨</div>
                  <h3>Long-Lasting Results</h3>
                  <p>Enjoy smooth, frizz-free hair for 6-12 months, far exceeding traditional treatments</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌿</div>
                  <h3>Formaldehyde-Free</h3>
                  <p>100% safe, chemical-free formula with no harsh fumes or health concerns</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💎</div>
                  <h3>Superior Shine</h3>
                  <p>Natural-looking glossy finish that makes your hair look healthier than ever</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">⏱️</div>
                  <h3>Time Saving</h3>
                  <p>Reduce daily styling time by over 50% - wake up with perfect hair every day</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🔄</div>
                  <h3>Hair Repair</h3>
                  <p>Actively repairs damaged hair while straightening, improving overall hair health</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💰</div>
                  <h3>Cost-Effective</h3>
                  <p>Longer-lasting results mean fewer treatments and more value for your investment</p>
                </div>
              </div>
            )}

            {activeTab === 'comparison' && (
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th className="highlight">Nano Plaster</th>
                      <th>Brazilian Blowout</th>
                      <th>Cezanne</th>
                      <th>Traditional Keratin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Duration</td>
                      <td className="highlight">6-12 months</td>
                      <td>3-4 months</td>
                      <td>8 weeks - 3 months</td>
                      <td>2-4 months</td>
                    </tr>
                    <tr>
                      <td>Formaldehyde</td>
                      <td className="highlight">0% ✓</td>
                      <td>12% ✗</td>
                      <td>0% ✓</td>
                      <td>Varies</td>
                    </tr>
                    <tr>
                      <td>Frizz Reduction</td>
                      <td className="highlight">100%</td>
                      <td>80-90%</td>
                      <td>75-85%</td>
                      <td>70-80%</td>
                    </tr>
                    <tr>
                      <td>Hair Damage</td>
                      <td className="highlight">Repairs hair ✓</td>
                      <td>Neutral</td>
                      <td>Neutral</td>
                      <td>Can damage</td>
                    </tr>
                    <tr>
                      <td>Immediate Wash</td>
                      <td className="highlight">No wait required</td>
                      <td>Yes</td>
                      <td>48-72 hours</td>
                      <td>72 hours</td>
                    </tr>
                    <tr>
                      <td>Color Safe</td>
                      <td className="highlight">Yes ✓</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Sometimes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="process-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h3>Consultation</h3>
                    <p>We assess your hair type and discuss your desired results with our expert stylists</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h3>Hair Preparation</h3>
                    <p>Deep cleansing shampoo removes impurities and opens the hair cuticle</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h3>Nano Plaster Application</h3>
                    <p>The formula is carefully applied section by section for even coverage</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h3>Heat Activation</h3>
                    <p>Gentle heat seals the nano-particles into your hair shaft</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h3>Final Styling</h3>
                    <p>Rinse, blow-dry, and style to reveal your gorgeous new look</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Transformation Gallery</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">See the remarkable results our clients achieve</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/hair-portrait.png"
                  alt="Professional hair styling and color"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Expert Hair Styling & Color</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image before-after">
                <div className="before-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <path d="M 150 50 Q 140 100 145 150 Q 142 200 148 250 Q 145 300 150 350"
                          stroke="#8B4513" strokeWidth="30" fill="none" opacity="0.8" strokeLinecap="round"/>
                    <path d="M 150 50 Q 160 100 155 150 Q 158 200 152 250 Q 155 300 150 350"
                          stroke="#654321" strokeWidth="28" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <path d="M 130 70 Q 125 120 128 170 Q 125 220 130 270 Q 128 320 130 360"
                          stroke="#A0522D" strokeWidth="25" fill="none" opacity="0.7" strokeLinecap="round"/>
                    <path d="M 170 70 Q 175 120 172 170 Q 175 220 170 270 Q 172 320 170 360"
                          stroke="#A0522D" strokeWidth="25" fill="none" opacity="0.7" strokeLinecap="round"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">BEFORE</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Frizzy & Unmanageable</text>
                  </svg>
                </div>
                <div className="after-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <defs>
                      <linearGradient id="smoothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#D2691E', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#8B4513', stopOpacity: 1}} />
                      </linearGradient>
                      <filter id="shine">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="2" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                      </filter>
                    </defs>
                    <path d="M 150 50 L 150 350"
                          stroke="url(#smoothGradient)" strokeWidth="35" fill="none" strokeLinecap="round" filter="url(#shine)"/>
                    <path d="M 130 60 L 130 350"
                          stroke="url(#smoothGradient)" strokeWidth="32" fill="none" strokeLinecap="round" opacity="0.9"/>
                    <path d="M 170 60 L 170 350"
                          stroke="url(#smoothGradient)" strokeWidth="32" fill="none" strokeLinecap="round" opacity="0.9"/>
                    <circle cx="150" cy="100" r="8" fill="#FFD700" opacity="0.6"/>
                    <circle cx="145" cy="180" r="6" fill="#FFD700" opacity="0.5"/>
                    <circle cx="155" cy="260" r="7" fill="#FFD700" opacity="0.6"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">AFTER</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Smooth & Glossy</text>
                  </svg>
                </div>
              </div>
              <p className="gallery-caption">Curly to Straight Transformation</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image before-after">
                <div className="before-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <path d="M 100 50 Q 95 150 100 250 Q 98 325 100 370"
                          stroke="#4A2511" strokeWidth="22" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <path d="M 120 50 Q 118 150 120 250 Q 119 325 120 370"
                          stroke="#5C3317" strokeWidth="24" fill="none" opacity="0.7" strokeLinecap="round"/>
                    <path d="M 140 50 Q 138 150 142 250 Q 140 325 142 370"
                          stroke="#4A2511" strokeWidth="23" fill="none" opacity="0.65" strokeLinecap="round"/>
                    <path d="M 160 50 Q 162 150 158 250 Q 160 325 158 370"
                          stroke="#5C3317" strokeWidth="24" fill="none" opacity="0.7" strokeLinecap="round"/>
                    <path d="M 180 50 Q 182 150 180 250 Q 181 325 180 370"
                          stroke="#4A2511" strokeWidth="22" fill="none" opacity="0.65" strokeLinecap="round"/>
                    <path d="M 200 50 Q 202 150 200 250 Q 201 325 200 370"
                          stroke="#5C3317" strokeWidth="23" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">BEFORE</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Damaged & Dull</text>
                  </svg>
                </div>
                <div className="after-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <defs>
                      <linearGradient id="shinyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#6B3410', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: '#5C3317', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#4A2511', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <path d="M 100 50 L 100 370" stroke="url(#shinyGradient)" strokeWidth="26" fill="none" strokeLinecap="round"/>
                    <path d="M 120 55 L 120 370" stroke="url(#shinyGradient)" strokeWidth="28" fill="none" strokeLinecap="round"/>
                    <path d="M 140 50 L 140 370" stroke="url(#shinyGradient)" strokeWidth="27" fill="none" strokeLinecap="round"/>
                    <path d="M 160 55 L 160 370" stroke="url(#shinyGradient)" strokeWidth="28" fill="none" strokeLinecap="round"/>
                    <path d="M 180 50 L 180 370" stroke="url(#shinyGradient)" strokeWidth="26" fill="none" strokeLinecap="round"/>
                    <path d="M 200 55 L 200 370" stroke="url(#shinyGradient)" strokeWidth="27" fill="none" strokeLinecap="round"/>
                    <ellipse cx="140" cy="120" rx="15" ry="25" fill="#FFD700" opacity="0.4"/>
                    <ellipse cx="160" cy="200" rx="18" ry="30" fill="#FFD700" opacity="0.35"/>
                    <ellipse cx="150" cy="290" rx="16" ry="28" fill="#FFD700" opacity="0.4"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">AFTER</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Healthy & Radiant</text>
                  </svg>
                </div>
              </div>
              <p className="gallery-caption">Damaged Hair Restoration</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image before-after">
                <div className="before-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <path d="M 150 50 Q 130 100 140 150 Q 135 200 145 250 Q 140 300 145 350"
                          stroke="#C19A6B" strokeWidth="28" fill="none" opacity="0.7" strokeLinecap="round"/>
                    <path d="M 150 50 Q 170 100 160 150 Q 165 200 155 250 Q 160 300 155 350"
                          stroke="#D2B48C" strokeWidth="26" fill="none" opacity="0.65" strokeLinecap="round"/>
                    <path d="M 120 70 Q 110 120 115 170 Q 112 220 118 270 Q 115 320 118 360"
                          stroke="#B8936D" strokeWidth="24" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <path d="M 180 70 Q 190 120 185 170 Q 188 220 182 270 Q 185 320 182 360"
                          stroke="#B8936D" strokeWidth="24" fill="none" opacity="0.6" strokeLinecap="round"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">BEFORE</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Wavy & Frizzy</text>
                  </svg>
                </div>
                <div className="after-side">
                  <svg viewBox="0 0 300 400" className="hair-illustration">
                    <defs>
                      <linearGradient id="blondeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#E5C294', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#C19A6B', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <path d="M 150 50 L 150 350" stroke="url(#blondeGradient)" strokeWidth="34" fill="none" strokeLinecap="round"/>
                    <path d="M 125 60 L 125 350" stroke="url(#blondeGradient)" strokeWidth="30" fill="none" strokeLinecap="round" opacity="0.85"/>
                    <path d="M 175 60 L 175 350" stroke="url(#blondeGradient)" strokeWidth="30" fill="none" strokeLinecap="round" opacity="0.85"/>
                    <circle cx="150" cy="110" r="10" fill="#FFF8DC" opacity="0.5"/>
                    <circle cx="140" cy="190" r="8" fill="#FFF8DC" opacity="0.45"/>
                    <circle cx="160" cy="270" r="9" fill="#FFF8DC" opacity="0.5"/>
                    <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">AFTER</text>
                    <text x="150" y="390" textAnchor="middle" fill="#fff" fontSize="14">Silky & Straight</text>
                  </svg>
                </div>
              </div>
              <p className="gallery-caption">Blonde Smoothing Treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Book Your Transformation</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Visit Quadro Hair in Sydney for your Nano Plaster treatment</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <a href="tel:95617822" className="contact-link">9561 7822</a>
                <p>Speak with Dominic or Maria</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Visit Us</h3>
                <p>Quadro Hair Salon</p>
                <p>Sydney, Australia</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">⏰</div>
                <h3>Book Ahead</h3>
                <p>We're getting busy!</p>
                <p>Advance bookings recommended</p>
              </div>
            </div>
            <div className="contact-cta">
              <div className="cta-box">
                <h3>Ready for Beautiful Hair?</h3>
                <p>
                  Experience the revolutionary Nano Plaster treatment that will transform your hair
                  for 6-12 months. Say goodbye to daily styling and hello to effortlessly gorgeous hair.
                </p>
                <div className="pricing-info">
                  <div className="price-badge">
                    <span className="price-label">Investment</span>
                    <span className="price-value">Starting from $350</span>
                    <span className="price-note">Lasts 6-12 months</span>
                  </div>
                </div>
                <a href="tel:95617822" className="btn btn-primary btn-large">
                  📞 Call 9561 7822 Now
                </a>
                <p className="cta-footnote">Ask for Dominic or Maria - Your hair transformation experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>QUADRO HAIR</h3>
              <p>Sydney's Premier Nano Plaster Specialists</p>
            </div>
            <div className="footer-contact">
              <p><strong>Phone:</strong> 9561 7822</p>
              <p><strong>Contact:</strong> Dominic or Maria</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Quadro Hair. All rights reserved.</p>
            <p>Professional hair care with Nano Plaster technology</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
