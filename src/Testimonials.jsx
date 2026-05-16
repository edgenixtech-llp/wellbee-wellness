import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  { name: "Sarah J.", rating: 5, text: "The skincare therapy completely changed my complexion. The clinic feels like a luxury spa." },
  { name: "Michael T.", rating: 5, text: "My smile design journey was flawless. The staff is professional and the results are stunning." },
  { name: "Emma W.", rating: 5, text: "Lost 15 pounds with their fat loss program. The nutritional counseling was a game changer." },
  { name: "David L.", rating: 5, text: "Zero pain during my root canal. Truly state-of-the-art equipment and exceptional care." },
  { name: "Olivia R.", rating: 5, text: "The HydraFacial gave me an instant glow before my wedding. Highly recommend Wellbee!" },
];

const Testimonials = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    // Clone the testimonials for infinite scroll effect
    if (trackRef.current) {
      const track = trackRef.current;
      const originalContent = track.innerHTML;
      track.innerHTML = originalContent + originalContent;
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Patient Stories</h2>
          <p className="section-subtitle">Hear from those who have transformed their wellness journey with us.</p>
        </div>
      </div>

      <div className="carousel-container reveal fade-up">
        <div className="carousel-track" ref={trackRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="quote-mark">"</div>
              <div className="stars">
                {[...Array(t.rating)].map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
