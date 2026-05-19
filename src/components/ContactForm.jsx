import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 bg-surface" id="kontakt-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Kontakt</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Napisz do nas</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Wiadomość wysłana!</h4>
              <p className="text-slate-600">Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Imię i nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Numer telefonu</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="123 456 789"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Rodzaj usługi</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                >
                  <option value="przeglad">Przegląd kominiarski</option>
                  <option value="czyszczenie">Czyszczenie przewodów</option>
                  <option value="gaz">Kontrola instalacji gazowej</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Wiadomość (opcjonalnie)</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                  placeholder="Opisz swój problem..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all flex items-center justify-center disabled:opacity-70"
              >
                {status === 'loading' ? 'Wysyłanie...' : (
                  <>
                    Wyślij wiadomość <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ContactForm;
