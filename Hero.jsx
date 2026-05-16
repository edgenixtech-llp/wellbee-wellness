import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      if(blobsRef.current.length >= 3) {
        blobsRef.current[0].style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        blobsRef.current[1].style.transform = `translate(${x * -60}px, ${y * -60}px)`;
        blobsRef.current[2].style.transform = `translate(${x * 30}px, ${y * -30}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-noise"></div>
      <div className="blobs-container">
        <div className="blob blob-1" ref={el => blobsRef.current[0] = el}></div>
        <div className="blob blob-2" ref={el => blobsRef.current[1] = el}></div>
        <div className="blob blob-3" ref={el => blobsRef.current[2] = el}></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-text-side">
          <div className="hero-label reveal fade-up">Elevate Your Being</div>
          <h1 className="hero-headline reveal fade-up" style={{ animationDelay: '0.1s' }}>
            Artistry in<br/>Wellness & Beauty
          </h1>
          <p className="hero-desc reveal fade-up" style={{ animationDelay: '0.2s' }}>
            Experience cutting-edge cosmetic dentistry, advanced skincare, and targeted fat loss therapies in a sanctuary designed for your ultimate transformation.
          </p>
          <div className="hero-ctas reveal fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#booking" className="btn btn-primary cta-glow-btn">Begin Your Journey</a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
        </div>

        <div className="hero-cards-side reveal fade-left" style={{ animationDelay: '0.4s' }}>
          <div className="expand-card">
            <div className="card-inner-content">
              <h3 className="expand-card-title">Dental Artistry</h3>
              <p className="expand-card-desc">Masterful cosmetic and restorative dentistry tailored for a breathtaking, natural smile.</p>
              <div className="expand-pills">
                <span className="expand-pill">Veneers</span>
                <span className="expand-pill">Whitening</span>
              </div>
            </div>
          </div>
          <div className="expand-card">
            <div className="card-inner-content">
              <h3 className="expand-card-title">Clinical Skincare</h3>
              <p className="expand-card-desc">Medical-grade resurfacing and hydration therapies to reverse the signs of aging.</p>
              <div className="expand-pills">
                <span className="expand-pill">HydraFacial</span>
                <span className="expand-pill">Peels</span>
              </div>
            </div>
          </div>
          <div className="expand-card">
            <div className="card-inner-content">
              <h3 className="expand-card-title">Body Sculpting</h3>
              <p className="expand-card-desc">Non-invasive cryolipolysis and RF contouring to refine your silhouette safely.</p>
              <div className="expand-pills">
                <span className="expand-pill">Fat Loss</span>
                <span className="expand-pill">Contour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
