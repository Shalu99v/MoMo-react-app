import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import PricingSection from './components/PricingSection/PricingSection';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import FeatureHighlights from './components/FeatureHighlights/FeatureHighlights';
const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <HeroSection />
        <BenefitsSection />
        <FeatureHighlights />
        <PricingSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
