import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import XLogin from './pages/X-login';
import PricingPage from './pages/Pricing';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/X-login" element={<XLogin />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;