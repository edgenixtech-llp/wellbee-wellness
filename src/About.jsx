import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const CountUp = ({ end, duration, label, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <div className="stat-item">
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image-wrapper reveal fade-right image-wrapper">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic Interior" />
        </div>
        
        <div className="about-content">
          <h2 className="section-title reveal fade-left">A Clinic Built on Care & Craft</h2>
          <p className="reveal fade-left" style={{ animationDelay: '0.2s' }}>
            At Wellbee Wellness, we believe that true beauty stems from a foundation of holistic health. 
            Our premium clinic offers a sanctuary where advanced science and deep serenity converge.
          </p>
          <p className="reveal fade-left" style={{ animationDelay: '0.3s' }}>
            Whether you are seeking state-of-the-art dental care, transformative skincare therapies, 
            or tailored fat loss programs, our expert team is dedicated to curating a personalized 
            wellness journey for you.
          </p>
          
          <div className="stats-container reveal fade-up" ref={statsRef} style={{ animationDelay: '0.4s' }}>
            <CountUp end={5000} duration={2000} label="Patients" isVisible={statsVisible} />
            <CountUp end={12} duration={1500} label="Experts" isVisible={statsVisible} />
            <CountUp end={8} duration={1500} label="Years of Excellence" isVisible={statsVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
