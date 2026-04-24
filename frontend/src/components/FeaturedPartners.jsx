import React from 'react';

const FeaturedPartners = () => {
  const partners = ["THE RITZ", "LE BERNARDIN", "NOMA", "ELEVEN MADISON", "OSTERIA FRANCESCANA", "ALINEA", "GORDON RAMSAY", "NOBU"];
  
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-[var(--font-label)] text-gray-400 tracking-widest uppercase">Trusted by the world's finest</p>
      </div>
      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-16 px-8 items-center">
          {/* Render the list twice for seamless looping (-50% translation) */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={index} className="text-2xl md:text-3xl font-bold text-gray-200 hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer select-none">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;
