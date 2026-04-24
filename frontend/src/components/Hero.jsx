import React from 'react';
import { MapPin, ChefHat } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-[var(--color-neutral)] text-white overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Image (Using generated image) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/premium-hero-bg.png")' }}
      />
      
      {/* Gradient Overlay for Fade Effect - darkened so text pops, fades to light at the very bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neutral-light)] from-0% via-black/70 via-30% to-black/80 to-100% z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
          <span className="text-sm font-[var(--font-label)] text-white/90">47 restaurants live</span>
          <span className="text-white/30 mx-1">|</span>
          <span className="text-sm font-[var(--font-label)] text-white/90">1,200+ users currently dining</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-[var(--font-headline)] tracking-tight mb-6">
          Skip the Wait. <br />
          <span className="text-[var(--color-primary)]">Reserve Your<br/>Table.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl font-[var(--font-body)] text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          DineGrid is your premium culinary concierge. We bridge the gap between hungry diners and the city's finest tables, offering live queue tracking and exclusive midnight rewards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-xl font-[var(--font-label)] text-lg transition-all w-full sm:w-auto shadow-lg shadow-[var(--color-primary)]/20">
            <MapPin className="w-5 h-5" />
            Find Restaurants Near You
          </button>
          <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-[var(--font-label)] text-lg transition-all w-full sm:w-auto border border-white/10">
            <ChefHat className="w-5 h-5" />
            For the Restaurateur
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
