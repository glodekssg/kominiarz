import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h4 className="text-2xl font-black text-white tracking-tight mb-6">
              GS INSTAL<span className="text-orange-500">.</span>
            </h4>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Profesjonalne usługi kominiarskie i gazowe. Zaufaj ekspertom z wieloletnim doświadczeniem. Twój spokój to nasza praca.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Szybkie linki</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">O firmie</a></li>
              <li><a href="#uslugi" className="text-slate-400 hover:text-orange-500 transition-colors">Usługi kominiarskie</a></li>
              <li><a href="#uslugi" className="text-slate-400 hover:text-orange-500 transition-colors">Instalacje gazowe</a></li>
              <li><a href="#opinie" className="text-slate-400 hover:text-orange-500 transition-colors">Opinie klientów</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Kontakt</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-400">ul. Kominiarska 15<br />00-123 Warszawa</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="tel:+48123456789" className="text-slate-400 hover:text-white transition-colors">+48 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="mailto:biuro@gsinstal.pl" className="text-slate-400 hover:text-white transition-colors">biuro@gsinstal.pl</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Godziny otwarcia</h5>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between"><span>Poniedziałek - Piątek:</span> <span>8:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sobota:</span> <span>9:00 - 14:00</span></li>
              <li className="flex justify-between text-orange-500"><span>Niedziela:</span> <span>Zamknięte</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GS Instal Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
