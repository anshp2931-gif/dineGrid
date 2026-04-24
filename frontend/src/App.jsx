import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmarterWay from './components/SmarterWay';
import CuratedCollections from './components/CuratedCollections';
import ModernEpicurean from './components/ModernEpicurean';
import FeaturedPartners from './components/FeaturedPartners';
import HowItWorks from './components/HowItWorks';
import VIPClub from './components/VIPClub';
import PrivateDining from './components/PrivateDining';
import GiftCards from './components/GiftCards';
import MenuShowcase from './components/MenuShowcase';
import Footer from './components/Footer';
import Login from './components/login';

const LandingPage = () => (
  <div className="min-h-screen bg-[var(--color-neutral-light)]">
    <Navbar />
    <main>
      <Hero />
      <FeaturedPartners />
      <SmarterWay />
      <HowItWorks />
      <CuratedCollections />

      <ModernEpicurean />
      <PrivateDining />
      <GiftCards />
      <VIPClub />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-10">
              <MenuShowcase />
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;