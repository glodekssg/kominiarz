import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    "Certyfikowani Mistrzowie Kominiarscy",
    "Szybki czas reakcji i terminowość",
    "Nowoczesny sprzęt diagnostyczny",
    "Pełna dokumentacja powykonawcza"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedSection animation="fadeInLeft" className="order-2 lg:order-1">
            <h2 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">O Firmie GS Instal</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Eksperci, którym możesz zaufać. Od lat dbamy o Wasze bezpieczeństwo.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Firma <strong>GS Instal Sp. z o.o.</strong> to zespół doświadczonych specjalistów z branży kominiarskiej i gazowej. Naszym priorytetem jest najwyższa jakość świadczonych usług oraz zapewnienie spokoju i bezpieczeństwa naszym klientom.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Dowiedz się więcej
            </button>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/team.png" 
                alt="Nasi profesjonalni kominiarze" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm uppercase tracking-wider font-semibold">Lat Doświadczenia</div>
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};

export default About;
