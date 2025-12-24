import React, { useState } from 'react';
import './App.css';

function App() {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for buses from ${departure} to ${arrival}`);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
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
        <div className="hero-content">
          <h1>Bharat Ka #1 Bus Booking App</h1>
          <p>Travel Smart, Travel Safe with ApniBus</p>
          
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

      {/* Why Choose Us Section */}
      <section className="features" id="features">
        <h2>Why Choose ApniBus?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Lowest Fares</h3>
            <p>Work directly with operators to pass savings to you. Get the best deals on every route.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💺</div>
            <h3>Guaranteed Seats</h3>
            <p>Reserve your preferred seat in advance for comfort and peace of mind throughout your journey.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Booking</h3>
            <p>Complete your booking in seconds with secure payment options including UPI and e-wallets.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Live Tracking</h3>
            <p>Real-time GPS tracking lets you know your bus location and estimated arrival time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🆘</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support in English, Hindi, and Hinglish for your peace of mind.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
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
        <h2>Popular Routes</h2>
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
        <h2>Choose Your Comfort Level</h2>
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
      <section className="cta">
        <h2>Download ApniBus App</h2>
        <p>Book your next journey on-the-go with our mobile app</p>
        <div className="cta-buttons">
          <button className="btn-primary">📱 Google Play</button>
          <button className="btn-secondary">🍎 App Store</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
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
