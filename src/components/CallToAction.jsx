import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const CallToAction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-125"
        style={{
          backgroundImage: 'url("/parallax-bg.png")',
          y
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Twój komin w dobrych rękach
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Od ponad dekady dostarczamy profesjonalne rozwiązania, dbając o czyste powietrze i bezpieczeństwo w domach naszych klientów.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all text-lg transform hover:-translate-y-1 cursor-pointer">
            Zarezerwuj termin
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
