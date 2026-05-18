import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Therapies from './Therapies';
import Testimonials from './Testimonials';
import Booking from './Booking';
import Footer from './Footer';
import { useScrollReveal } from './useScrollReveal';

function App() {
  const revealRef = useScrollReveal();

  return (
    <div className="app" ref={revealRef}>
      <Navbar />
      <main>
        <Hero />
        <Services />
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
