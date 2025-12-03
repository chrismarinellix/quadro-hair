import { useState, useEffect } from 'react'
import './App.css'

// Quadro Hair - Looking Good Feeling Good
function App() {
  const [activeTab, setActiveTab] = useState('benefits')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '/straight-hair-brunette.png',
    '/hair-portrait.png',
    '/straight-hair-brunette.png',
    '/women-balayage.png',
    '/straight-hair-brunette.png',
    '/wavy-balayage.png',
    '/straight-hair-brunette.png',
    '/women-blue-hair.png',
    '/men-styled-quiff.png',
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
            <a href="#specialties">Specialties</a>
            <a href="#benefits">Nanoplasty</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
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
            *With Nanoplasty Technology - one of our premium services
          </p>
          <div className="hero-buttons">
            <a href="sms:0418533927?&body=Hi%20Dom%20and%20Maria%2C%0A%0AI'd%20love%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20what%20times%20you%20have%20available.%0A%0AThank%20you!" className="btn btn-primary">📱 Text Mobile</a>
            <a href="tel:0418533927" className="btn btn-secondary">📞 Call Mobile</a>
            <a href="tel:95617822" className="btn btn-secondary">☎️ Call Salon</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Nanoplasty */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Quadro Hair</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Melbourne's Premier Hair Specialists</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h3>Expert Team, Personalized Service</h3>
              <p>
                At Quadro Hair Team, we're passionate about creating beautiful, personalized hair color and styles that enhance your natural beauty. Our team of expert colorists and stylists specialize in the latest techniques and trends, including our revolutionary Nanoplasty treatment.
              </p>
              <p>
                Located in Brandon Park Shopping Centre (next to NAB), we've been transforming hair and boosting confidence for over a decade. Our commitment to excellence, ongoing education, and caring approach ensures you receive the best possible service. We're certified color specialists who put your hair health first while delivering 5-star service every visit.
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
                alt="Beautiful straight hair after Nanoplasty treatment"
                className="about-real-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="specialties-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Specialties</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Expert hair color services tailored to enhance your natural beauty</p>
          </div>
          <div className="specialties-grid">
            <div className="specialty-card">
              <div className="specialty-image" style={{backgroundImage: 'url(/dominic-client-blonde.png)'}}>
                <div className="specialty-overlay">
                  <h3>Blonde Specialists</h3>
                  <p>From platinum to honey blonde, our experts create the perfect shade for your skin tone</p>
                </div>
              </div>
            </div>
            <div className="specialty-card">
              <div className="specialty-image" style={{backgroundImage: 'url(/wavy-balayage.png)'}}>
                <div className="specialty-overlay">
                  <h3>Balayage</h3>
                  <p>Hand-painted highlights for a natural, sun-kissed look that grows out beautifully</p>
                </div>
              </div>
            </div>
            <div className="specialty-card">
              <div className="specialty-image" style={{backgroundImage: 'url(/hair-portrait.png)'}}>
                <div className="specialty-overlay">
                  <h3>Lived-in Colours</h3>
                  <p>Low-maintenance, effortlessly chic color that looks naturally gorgeous</p>
                </div>
              </div>
            </div>
            <div className="specialty-card">
              <div className="specialty-image" style={{backgroundImage: 'url(/long-straight-brunette.png)'}}>
                <div className="specialty-overlay">
                  <h3>Brunettes</h3>
                  <p>Rich, dimensional brunette tones from chocolate to caramel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Nanoplasty?</h2>
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
                      <th className="highlight">Nanoplasty</th>
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
                    <h3>Nanoplasty Application</h3>
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
                  alt="Dominic with client - Nanoplasty results"
                  className="gallery-real-image"
                />
              </div>
              <p className="gallery-caption">Nanoplasty Success - Dominic & Client</p>
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
              <p className="gallery-caption">Ultra Sleek Nanoplasty</p>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Real reviews from real people</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Dom has been doing my son's hair for a couple years now, always does an amazing job. Very patient with the kids, and they love him!"
              </p>
              <p className="testimonial-author">- Amanda</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Every employee is knowledgable with colour, tint, highlights, cuts, blow waves, and hair styles. Above all they take care of elderly people, make sure they are safe until family meet up with them after they are attended to. The whole crew are hospitable, friendly and kind. The owner of the salon, ensures that his salon is a happy, pleasant safe environment for everyone, the employees and clients. I highly recommend this salon for people of all ages, men and women."
              </p>
              <p className="testimonial-author">- Rvan</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "For over 25 years Quadro has been my go-to place for haircuts.....that's over 300 haircuts! Dom, Eva and the team provide amazing service in their very vibrant and friendly salon. A big call out to Maria who has cut my hair all but perhaps 5-10 times over the 25 years. It's obviously good as I travel 20kms to get there!"
              </p>
              <p className="testimonial-author">- Greg</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "I am over the moon with how my hair looks! Haven't had my hair professionally dyed in so many years and i was given great advice on what colour I should opt for. Staff are very very friendly and I was made to feel welcome from beginning to end. Definitely recommend this place to everyone. Thanks so very much to all of the staff for making me feel a million dollars. Haven't felt this good in such a long time."
              </p>
              <p className="testimonial-author">- Aimee</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Dom and the team are absolutely amazing. Ive been going there for 9 years now, I live about 45 mins away but travel all the way there because of the amazing job they do. Have never been disappointed in the haircuts they provide, and the team there are incredibly friendly and accommodating. Would recommend to everyone!"
              </p>
              <p className="testimonial-author">- Cameron</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "My 7 year old son had his first haircut with Dominic here. I was very happy with the result, considering he has curly hair, that is difficult to style."
              </p>
              <p className="testimonial-author">- Laura</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "I've been getting my hair done here for the past 16 years & thoroughly enjoy not only the cut/colour & style I walk out with, but the friendly & personal customer service from their experienced staff. Nothing is ever a problem & I always feel like I'm in exceptional hands."
              </p>
              <p className="testimonial-author">- Vanessa</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Thanks to Sandee for looking after me for my first colour - mocha with some red. Always a pleasure getting my hair done at Quadro. Had a styling done for a wedding a few years back and it's the same great service!"
              </p>
              <p className="testimonial-author">- Antara</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Maria is such a friendly and easygoing lady who didn't impose her will on me, but kept checking what I was comfortable with every step of the way. I have had my hair cut by the same hairdresser for the last 30 years so I felt a bit insecure. Thank you Maria for your wonderful work. I had such a positive experience yesterday and wouldn't hesitate to recommend your work to anyone."
              </p>
              <p className="testimonial-author">- Nancy</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Experienced and professional. I got there for my baby razor head shave, and they did a brilliant job not even a single blade cut on scalp. Highly recommended."
              </p>
              <p className="testimonial-author">- MJ</p>
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
            <p className="section-subtitle">Visit Quadro Hair in Melbourne, Brandon Park for your Nanoplasty treatment</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>Text or Call</h3>
                <a href="tel:0418533927" className="contact-link">0418 533 927</a>
                <a href="sms:0418533927?&body=Hi%20Dom%20and%20Maria%2C%0A%0AI'd%20love%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20what%20times%20you%20have%20available.%0A%0AThank%20you!" className="btn btn-primary" style={{marginTop: '1rem', fontSize: '0.9rem'}}>📱 Send Text Message</a>
                <p>Message Dominic or Maria</p>
              </div>
              <div className="contact-card map-card">
                <div className="contact-icon">📍</div>
                <h3>Visit Us</h3>
                <p><strong>Brandon Park Shopping Centre</strong></p>
                <p>(Next to NAB)</p>
                <p>Springvale Road & Ferntree Gully Road</p>
                <p>Mulgrave VIC 3170</p>
                <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)'}}>🅿️ Free parking available</p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8!2d145.2!3d-37.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU0JzAwLjAiUyAxNDXCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '10px', marginTop: '1rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">⏰</div>
                <h3>Opening Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
                <p style={{marginTop: '1rem', fontSize: '0.9rem'}}>📞 Phone: 9561 7822</p>
                <p style={{fontSize: '0.9rem'}}>Bookings & Enquiries Welcome</p>
              </div>
            </div>
            <div className="contact-cta">
              <div className="cta-box">
                <h3>Ready for Beautiful Hair?</h3>
                <p>
                  Experience the revolutionary Nanoplasty treatment that will transform your hair
                  for 6-12 months. Say goodbye to daily styling and hello to effortlessly gorgeous hair.
                </p>
                <div className="pricing-info">
                  <div className="price-badge">
                    <span className="price-label">Investment</span>
                    <span className="price-value">Starting from $350</span>
                    <span className="price-note">Lasts 6-12 months</span>
                  </div>
                </div>
                <a href="sms:0418533927?&body=Hi%20Dom%20and%20Maria%2C%0A%0AI'd%20love%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20what%20times%20you%20have%20available.%0A%0AThank%20you!" className="btn btn-primary btn-large">
                  📱 Text to Book Now
                </a>
                <a href="tel:0418533927" className="btn btn-secondary btn-large" style={{marginTop: '1rem'}}>
                  📞 Or Call 0418 533 927
                </a>
                <p className="cta-footnote">Message or call Dominic and Maria - Your hair transformation experts</p>
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
              <p>Melbourne's Premier Hair Specialists</p>
              <p>Brandon Park Shopping Centre (Next to NAB)</p>
              <p>Springvale Rd & Ferntree Gully Rd, Mulgrave VIC 3170</p>
            </div>
            <div className="footer-contact">
              <p><strong>Mobile:</strong> 0418 533 927</p>
              <p><strong>Salon:</strong> 9561 7822</p>
              <p><strong>Contact:</strong> Dominic or Maria</p>
              <p style={{marginTop: '1rem'}}><strong>Follow Us:</strong></p>
              <p>📱 Instagram: @quadrohairteam</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Quadro Hair. All rights reserved.</p>
            <p>Expert hair color, styling & Nanoplasty treatments • Free parking at Brandon Park Shopping Centre</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
