import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Therapies from './components/Therapies';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const revealRef = useScrollReveal();

  return (
    <div className="app" ref={revealRef}>
      <Navbar />
      <main>
        <Hero />

        <About />
        <Therapies />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
