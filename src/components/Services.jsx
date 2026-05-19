import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, variants } from './AnimatedSection';
import { ShieldCheck, Wrench, Wind, Flame, Camera, FileCheck } from 'lucide-react';

const servicesList = [
  {
    title: "Okresowe kontrole",
    desc: "Zadbaj o bezpieczeństwo. Przeprowadzamy regularne kontrole przewodów kominowych zgodnie z wymogami prawa.",
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Wkłady kominowe",
    desc: "Profesjonalny montaż wkładów kominowych, które zabezpieczają komin przed kwasami i wilgocią.",
    icon: <Wrench className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Nasady kominowe",
    desc: "Montaż nasad poprawiających ciąg kominowy i chroniących przed warunkami atmosferycznymi.",
    icon: <Wind className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Instalacje gazowe",
    desc: "Kompleksowa kontrola szczelności i bezpieczeństwa domowych instalacji gazowych.",
    icon: <Flame className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Kamera inspekcyjna",
    desc: "Dokładne badanie przewodów kominowych za pomocą zaawansowanej kamery inspekcyjnej.",
    icon: <Camera className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Opiniowanie",
    desc: "Wydajemy profesjonalne opinie kominiarskie dla nadzoru budowlanego oraz gazowni.",
    icon: <FileCheck className="w-10 h-10 text-orange-500" />
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-surface" id="uslugi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Nasze Usługi</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Pełen zakres usług kominiarskich</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </AnimatedSection>

        <AnimatedSection animation="staggerContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={variants.staggerItem}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Services;
