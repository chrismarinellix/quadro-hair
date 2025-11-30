import { useState, useEffect } from 'react'
import './App.css'

// Quadro Hair - Looking Good Feeling Good
function App() {
  const [activeTab, setActiveTab] = useState('benefits')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '/hair-portrait.png',
    '/women-balayage.png',
    '/men-styled-quiff.png',
    '/wavy-balayage.png',
    '/women-blue-hair.png',
    '/men-wavy-texture.png'
  ]

  // Carousel effect - change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
        <div
          className="hero-background-image"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            transition: 'background-image 1s ease-in-out'
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Quadro Hair - Looking Good, Feeling Good</h1>
          <h2 className="hero-subtitle">Transform Your Hair*</h2>
          <p className="hero-description">
            *With Nano Plaster Technology - one of our premium services
          </p>
          <div className="hero-buttons">
            <a href="tel:95617822" className="btn btn-primary">Book Now</a>
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
                src="/straight-hair-brunette.png"
                alt="Beautiful straight hair after Nano Plaster treatment"
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

      {/* Women's Style Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Women's Style Gallery</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">See the remarkable results our female clients achieve</p>
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
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/short-bob-style.png"
                  alt="Stylish short bob with highlights"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Modern Bob with Dimension</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/wavy-balayage.png"
                  alt="Beautiful wavy balayage hair"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Wavy Balayage Perfection</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/long-straight-brunette.png"
                  alt="Long straight brunette hair with shine"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Sleek Brunette Transformation</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/dominic-client-blonde.png"
                  alt="Dominic with client - Nano Plaster results"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Nano Plaster Success - Dominic & Client</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/women-blue-hair.png"
                  alt="Vibrant blue ombre hair color"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Vibrant Blue Ombre</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/women-teal-hair.png"
                  alt="Teal colored wavy hair"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Teal Wavy Transformation</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/women-balayage.png"
                  alt="Beautiful balayage highlights"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Gorgeous Balayage & Styling</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/women-straight-black.png"
                  alt="Sleek straight black hair"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Ultra Sleek Nano Plaster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Men's Style Gallery */}
      <section id="mens-gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Men's Style Gallery</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Professional men's styling and grooming results</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-styled-quiff.png"
                  alt="Modern styled quiff with fade"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Modern Quiff & Fade</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-textured-crop.png"
                  alt="Textured crop haircut"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Textured Crop Style</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-top-knot-fade.png"
                  alt="Top knot with fade sides"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Top Knot with Fade</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-textured-fringe.png"
                  alt="Textured fringe hairstyle"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Textured Fringe Cut</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-pompadour-fade.png"
                  alt="Pompadour with fade"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Pompadour & Fade</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image real-photo-gallery">
                <img
                  src="/men-wavy-texture.png"
                  alt="Wavy textured medium length hair"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Wavy Textured Style</p>
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
