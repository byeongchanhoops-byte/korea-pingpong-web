import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Facilities } from './components/Facilities';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;