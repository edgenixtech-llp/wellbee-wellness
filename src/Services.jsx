import React, { useRef, useState } from 'react';
import './Services.css';

const ServiceCard = ({ image, title, desc }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0, mx: 50, my: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Position for glow
    const mx = (x / rect.width) * 100;
    const my = (y / rect.height) * 100;

    // Perspective calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation 15 deg
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setStyle({ rotateX, rotateY, mx, my });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({ rotateX: 0, rotateY: 0, mx: 50, my: 50 });
  };

  return (
    <div 
      className="service-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mx': `${style.mx}%`,
        '--my': `${style.my}%`,
        transform: `perspective(900px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="card-glow" style={{ opacity: isHovered ? 1 : 0 }}></div>
      <div 
        className="service-image"
        style={{
          transform: `translateZ(40px) translate(${style.rotateY * -1.5}px, ${style.rotateX * 1.5}px)`,
          transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <img src={image} alt={title} />
      </div>
      <h3 style={{ transform: 'translateZ(30px)' }}>{title}</h3>
      <p style={{ 
        transform: `translateZ(20px) translateY(${isHovered ? '0px' : '15px'})`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: isHovered ? 'auto' : 'none'
      }}>
        {desc}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Discover our comprehensive range of specialized treatments.</p>
        </div>
        
        <div className="services-grid reveal stagger-children">
          <ServiceCard 
            image="https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=150&h=150&q=80"
            title="Dental Care"
            desc="State-of-the-art cosmetic and restorative dentistry to architect your perfect smile using biocompatible materials and extreme precision."
          />
          <ServiceCard 
            image="https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=150&h=150&q=80"
            title="Skincare Therapies"
            desc="Medical-grade facials, peels, and light therapies formulated to resurface, hydrate, and reverse the biological markers of aging."
          />
          <ServiceCard 
            image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=150&h=150&q=80"
            title="Fat Loss Programs"
            desc="Non-invasive body contouring utilizing ultrasound cavitation and cryolipolysis to safely destroy localized adipose tissue."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
