import React, { useState } from 'react';
import './Therapies.css';

const therapiesData = {
  dental: [
    { 
      name: 'Teeth Whitening', 
      desc: 'Achieve a radiant, picture-perfect smile with our advanced laser whitening technology. We eliminate years of stubborn stains in a single session without compromising your enamel.', 
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Orthodontics', 
      desc: 'Discreetly straighten your teeth with state-of-the-art clear aligners. We map out your entire alignment journey using 3D scanning to guarantee the perfect bite and aesthetic.', 
      duration: 'Varies',
      image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Root Canal', 
      desc: 'A completely painless and highly precise endodontic therapy designed to save your natural tooth. We utilize microscopic technology to ensure maximum comfort and success.', 
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Smile Design', 
      desc: 'A holistic aesthetic makeover. We customize veneers, contouring, and alignment tailored specifically to your facial structure for a truly transformative, natural-looking smile.', 
      duration: 'Consultation',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Dental Implants', 
      desc: 'The gold standard for missing teeth. Our biocompatible titanium implants fuse seamlessly with your jawbone, providing a permanent, durable, and indistinguishable replacement.', 
      duration: 'Surgery',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80'
    },
  ],
  skincare: [
    { 
      name: 'HydraFacial', 
      desc: 'A multi-step restorative treatment that deeply cleanses, exfoliates, extracts impurities, and infuses your skin with intensive hydrating serums for an instant, undeniable glow.', 
      duration: '30 mins',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Chemical Peels', 
      desc: 'Accelerate cellular turnover and reveal baby-soft skin. Our medical-grade peels safely strip away dead layers to drastically improve texture, hyperpigmentation, and fine lines.', 
      duration: '40 mins',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'LED Light Therapy', 
      desc: 'Harness the healing power of specialized light frequencies. Blue light banishes acne-causing bacteria, while red light stimulates collagen production to reverse the signs of aging.', 
      duration: '20 mins',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Anti-Ageing Treatments', 
      desc: 'Subtle, expert-administered injectables including Botox and premium dermal fillers. We smooth wrinkles and restore lost volume while preserving your natural facial expressions.', 
      duration: '30 mins',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Acne Treatment', 
      desc: 'A comprehensive protocol combining clinical extractions, targeted laser therapy, and bespoke topical regimens to clear stubborn breakouts and permanently reduce scarring.', 
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80'
    },
  ],
  fatloss: [
    { 
      name: 'Cryolipolysis', 
      desc: 'A non-invasive alternative to liposuction. We safely freeze and permanently destroy localized, stubborn fat cells without needles, surgery, or any required downtime.', 
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'RF Body Contouring', 
      desc: 'Utilizing targeted radiofrequency energy, this treatment heats the dermal layers to melt fat cells while simultaneously tightening the skin, resulting in a firm, sculpted silhouette.', 
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Ultrasound Cavitation', 
      desc: 'High-frequency sound waves create micro-bubbles that break down deep adipose tissue into a liquid form, which is then naturally and safely eliminated by your lymphatic system.', 
      duration: '40 mins',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Dietary Counselling', 
      desc: 'Holistic and sustainable weight management. Our expert nutritionists design heavily personalized meal plans tailored strictly to your metabolic rate, goals, and lifestyle.', 
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Laser Lipo', 
      desc: 'Low-level laser therapy precisely penetrates the skin to shrink fat cells. It effectively reduces inches in targeted problem areas while smoothing out the appearance of cellulite.', 
      duration: '30 mins',
      image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=500&q=80'
    },
  ]
};

const Therapies = () => {
  const [activeTab, setActiveTab] = useState('dental');

  return (
    <section id="therapies" className="therapies">
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Therapies Deep-Dive</h2>
          <p className="section-subtitle">Explore our specialized treatments tailored to your unique needs.</p>
        </div>

        <div className="tabs-container reveal fade-up">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'dental' ? 'active' : ''}`}
              onClick={() => setActiveTab('dental')}
            >
              Dental
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skincare' ? 'active' : ''}`}
              onClick={() => setActiveTab('skincare')}
            >
              Skincare
            </button>
            <button 
              className={`tab-btn ${activeTab === 'fatloss' ? 'active' : ''}`}
              onClick={() => setActiveTab('fatloss')}
            >
              Fat Loss
            </button>
            <div className={`tab-indicator ${activeTab}`}></div>
          </div>

          <div className="tab-content">
            <div className="therapies-grid">
              {therapiesData[activeTab].map((therapy, index) => (
                <div className="therapy-card" key={index}>
                  <div className="therapy-image">
                    <img src={therapy.image} alt={therapy.name} />
                  </div>
                  <div className="therapy-card-content">
                    <h4>{therapy.name}</h4>
                    <p>{therapy.desc}</p>
                    <div className="therapy-meta">
                      <span className="duration">⏱ {therapy.duration}</span>
                      <a href="#booking" className="learn-more">Learn More →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapies;
