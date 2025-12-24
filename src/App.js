import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for buses from ${departure} to ${arrival}`);
  };

  return (
    <div className="App">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <span className="promo-text">🎉 Special Offer: Get 20% OFF on your first booking! Use code: <strong>FIRST20</strong></span>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🚌</span>
            <span className="logo-text">ApniBus</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Why Us</a></li>
            <li><a href="#routes">Routes</a></li>
            <li><a href="#app">App</a></li>
            <li><button className="login-btn">Login</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg-animation">
          <div className="floating-element" style={{top: '10%', left: '10%', animationDelay: '0s'}}>🚌</div>
          <div className="floating-element" style={{top: '20%', right: '15%', animationDelay: '2s'}}>🎫</div>
          <div className="floating-element" style={{bottom: '20%', left: '15%', animationDelay: '4s'}}>⭐</div>
          <div className="floating-element" style={{bottom: '30%', right: '10%', animationDelay: '3s'}}>🌟</div>
        </div>
        <div className="hero-content">
          <div className="badge-new">✨ Official RSRTC Partner</div>
          <h1 className="gradient-text">Rajasthan Ka #1 Bus Booking App</h1>
          <p className="hero-subtitle">Travel Smart, Travel Safe with ApniBus</p>
          <div className="hero-stats-mini">
            <span>🎯 5L+ Users</span>
            <span>⚡ Instant Booking</span>
            <span>💯 Best Prices</span>
          </div>
          
          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>From</label>
              <input 
                type="text" 
                placeholder="Departure City"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>To</label>
              <input 
                type="text" 
                placeholder="Arrival City"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Date</label>
              <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Passengers</label>
              <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            <button type="submit" className="search-btn">Search Buses</button>
          </form>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>100% Secure Payment</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>Instant Confirmation</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <span>Award Winning Service</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💰</span>
            <span>Best Price Guarantee</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-subtitle">BENEFITS</span>
          <h2>Why Choose ApniBus?</h2>
          <p className="section-description">Experience the best in class bus booking service with unmatched features</p>
        </div>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">💰</div>
            </div>
            <h3>Lowest Fares</h3>
            <p>Work directly with operators to pass savings to you. Get the best deals on every route.</p>
            <div className="feature-badge">Popular</div>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">💺</div>
            </div>
            <h3>Guaranteed Seats</h3>
            <p>Reserve your preferred seat in advance for comfort and peace of mind throughout your journey.</p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">⚡</div>
            </div>
            <h3>Instant Booking</h3>
            <p>Complete your booking in seconds with secure payment options including UPI and e-wallets.</p>
            <div className="feature-badge">Fast</div>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">📍</div>
            </div>
            <h3>Live Tracking</h3>
            <p>Real-time GPS tracking lets you know your bus location and estimated arrival time.</p>
            <div className="feature-badge">Live</div>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🆘</div>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support in English, Hindi, and Hinglish for your peace of mind.</p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🌍</div>
            </div>
            <h3>Wide Coverage</h3>
            <p>3.5+ Lakh routes across India with partnerships including official RSRTC service.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>1 Lakh+</h3>
          <p>Bus Services</p>
        </div>
        <div className="stat-item">
          <h3>3.5L+</h3>
          <p>Routes Covered</p>
        </div>
        <div className="stat-item">
          <h3>5L+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>4.3 ★</h3>
          <p>App Rating</p>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="routes" id="routes">
        <div className="section-header">
          <span className="section-subtitle">TOP DESTINATIONS</span>
          <h2>Popular Routes</h2>
          <p className="section-description">Explore our most traveled routes with the best bus services</p>
        </div>
        <div className="routes-grid">
          {[
            { from: 'Delhi', to: 'Jaipur', buses: '500+' },
            { from: 'Jaipur', to: 'Udaipur', buses: '350+' },
            { from: 'Delhi', to: 'Agra', buses: '600+' },
            { from: 'Jodhpur', to: 'Jaipur', buses: '280+' },
            { from: 'Delhi', to: 'Chandigarh', buses: '450+' },
            { from: 'Ajmer', to: 'Delhi', buses: '320+' },
          ].map((route, idx) => (
            <div key={idx} className="route-card">
              <div className="route-from">{route.from}</div>
              <div className="route-arrow">→</div>
              <div className="route-to">{route.to}</div>
              <div className="route-buses">{route.buses} buses</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bus Types Section */}
      <section className="bus-types">
        <div className="section-header">
          <span className="section-subtitle">BUS CATEGORIES</span>
          <h2>Choose Your Comfort Level</h2>
          <p className="section-description">Select from our wide range of bus types tailored to your travel needs</p>
        </div>
        <div className="bus-grid">
          <div className="bus-card">
            <h3>🚌 AC Seater</h3>
            <p>Perfect for short trips with comfortable seating and air conditioning</p>
          </div>
          <div className="bus-card">
            <h3>🛏️ AC Sleeper</h3>
            <p>Spacious beds for long journeys with premium comfort features</p>
          </div>
          <div className="bus-card">
            <h3>✨ Volvo/Luxury</h3>
            <p>Premium experience with top-notch amenities and entertainment</p>
          </div>
          <div className="bus-card">
            <h3>🌱 Electric</h3>
            <p>Eco-friendly travel option for sustainable journey</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="app">
        <div className="cta-decoration"></div>
        <h2>Download ApniBus App</h2>
        <p>Book your next journey on-the-go with our mobile app</p>
        <div className="app-features">
          <span>📱 Easy Interface</span>
          <span>🔔 Instant Notifications</span>
          <span>💳 Multiple Payment Options</span>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">📱 Google Play</button>
          <button className="btn-secondary">🍎 App Store</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2>What Our Customers Say</h2>
          <p className="section-description">Join thousands of satisfied travelers who trust ApniBus</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"Best bus booking platform! Easy to use and great prices."</p>
            <strong>- Raj Kumar</strong>
          </div>
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"Live tracking feature is amazing. Always know where my bus is."</p>
            <strong>- Priya Singh</strong>
          </div>
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"Customer support is exceptional. Instant refund in minutes!"</p>
            <strong>- Amit Patel</strong>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ApniBus</h4>
            <p>Bharat Ka #1 Bus Booking Platform</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#routes">Routes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +91 91093 39109</p>
            <p>📧 support@apnibus.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ApniBus. All rights reserved. | Yellowpedal Technologies Private Limited</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
