import React from 'react';
import { Search, MapPin, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Discover",
      desc: "Browse our curated list of the city's top-rated restaurants, hidden gems, and exclusive pop-ups."
    },
    {
      icon: <MapPin className="w-8 h-8 text-[var(--color-secondary)]" />,
      title: "Join the Queue",
      desc: "Add yourself to the waitlist from anywhere. Track your live position and estimated seating time."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[var(--color-tertiary)]" />,
      title: "Dine & Earn",
      desc: "Arrive right when your table is ready. Earn exclusive points for every successful reservation."
    }
  ];

  return (
    <section className="py-24 bg-white text-[var(--color-neutral)] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-[var(--font-headline)] mb-6 tracking-tight">The Seamless Experience</h2>
          <p className="text-lg font-[var(--font-body)] text-gray-600">
            DineGrid removes the friction from dining out. From discovery to dessert, we've optimized every step of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50 flex items-center justify-center mb-8 transform hover:-translate-y-2 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-[var(--font-headline)] mb-4">{step.title}</h3>
              <p className="text-gray-600 font-[var(--font-body)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
