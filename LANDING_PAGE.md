# ApniBus - Modern Landing Page

A beautiful, responsive, and modern landing page for ApniBus, India's leading bus booking platform.

## Features

### Key Sections

1. **Navigation Bar**

   - Sticky navigation with logo and quick links
   - Responsive design for all devices
   - Login button with hover effects

2. **Hero Section**

   - Eye-catching gradient background
   - Responsive search form with:
     - Departure and arrival city inputs
     - Date picker
     - Passenger count selector
     - Smooth animations

3. **Why Choose ApniBus**

   - 6 Feature cards highlighting key benefits:
     - 💰 Lowest Fares
     - 💺 Guaranteed Seats
     - ⚡ Instant Booking
     - 📍 Live Tracking
     - 🆘 24/7 Customer Support
     - 🌍 Wide Coverage

4. **Statistics Section**

   - Showcase platform statistics:
     - 1 Lakh+ Bus Services
     - 3.5L+ Routes Covered
     - 5L+ Happy Customers
     - 4.3 ★ App Rating

5. **Popular Routes**

   - Interactive route cards showing top destinations
   - Number of available buses per route
   - Hover effects for better UX

6. **Bus Types**

   - Different bus categories:
     - AC Seater
     - AC Sleeper
     - Volvo/Luxury
     - Electric Buses

7. **Call-to-Action**

   - Mobile app download section
   - Links to Google Play and App Store

8. **Testimonials**

   - Customer reviews and ratings
   - Social proof with 5-star ratings

9. **Footer**
   - Quick links
   - Contact information
   - Legal links (Privacy, Terms, Refund Policy)

## 🎨 Design Highlights

### Colors

- **Primary**: #FF6B35 (Orange - Energy & Action)
- **Secondary**: #004E89 (Navy Blue - Trust & Stability)
- **Accent**: #1B998A (Teal - Innovation)
- **Light Background**: #F7F9FC

### Typography

- Clean, modern font stack using system fonts
- Optimal font sizes for readability
- Proper contrast ratios for accessibility

### Responsiveness

- Mobile-first approach
- Breakpoints at 768px and 480px
- Fluid grid layouts using CSS Grid
- Flexible images and components

### Animations & Interactions

- Smooth hover effects on buttons and cards
- Slide animations on hero section elements
- Elevation effects using box shadows
- Smooth scrolling behavior
- Transition effects on all interactive elements

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd apnibus-frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 File Structure

```
apnibus-frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js         (Main component with all sections)
│   ├── App.css        (Complete styling and animations)
│   ├── index.css      (Global styles)
│   ├── index.js       (React entry point)
│   ├── App.test.js    (Tests)
│   ├── setupTests.js
│   └── reportWebVitals.js
├── package.json       (Project dependencies)
└── README.md
```

## 🎨 Customization

### Colors

To change colors, modify the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --accent-color: #1b998a;
  /* ... other variables */
}
```

### Content

Update text content directly in the `App.js` file. All sections are well-commented for easy navigation.

### Images

To add images:

1. Place images in the `public` folder
2. Import and use them in `App.js`

## ⚡ Performance

- Optimized CSS with minimal redundancy
- Smooth animations that don't impact performance
- Mobile-friendly responsive design
- Fast loading times with minimal dependencies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📋 Future Enhancements

- [ ] Add real bus search integration
- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Booking history
- [ ] Real-time seat availability
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Email notifications
- [ ] Push notifications

## 📞 Contact & Support

For questions or suggestions, contact:

- 📞 +91 91093 39109
- 📧 support@apnibus.com
- 🌐 https://apnibus.com

## 📄 License

© 2024 ApniBus. All rights reserved.
Developed by Yellowpedal Technologies Private Limited

## 💡 Design Philosophy

This landing page follows modern web design principles:

1. **User-Centric Design**: Every element serves a purpose
2. **Visual Hierarchy**: Important information stands out
3. **Consistency**: Unified color scheme and typography
4. **Accessibility**: Proper contrast ratios and semantic HTML
5. **Performance**: Minimal HTTP requests and optimized assets
6. **Responsiveness**: Works seamlessly across all devices
7. **Engagement**: Interactive elements encourage exploration
8. **Trust**: Professional design builds credibility

## 🔧 Technical Stack

- **React 18**: JavaScript library for building UI
- **CSS3**: Modern styling with flexbox and grid
- **HTML5**: Semantic markup
- **Responsive Design**: Mobile-first approach
- **ES6+**: Modern JavaScript features

---

**Created for ApniBus - Bharat Ka #1 Bus Booking App**
