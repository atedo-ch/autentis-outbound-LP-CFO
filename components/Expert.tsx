import React from 'react';

export const Expert: React.FC = () => {
  return (
    <section id="expert" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              "Würden Sie ein Hochhaus ohne Statik bauen? Warum tun Sie es bei Ihrem Team?"
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                In der Finanzwelt prüfen wir jede Anlage auf Herz und Nieren. Wir analysieren Bilanzen, bewerten Risiken und prognostizieren Renditen.
              </p>
              <p>
                Bei der wichtigsten Ressource – dem Personal – verlassen sich jedoch viele Führungskräfte noch immer auf das Bauchgefühl. Eignungsdiagnostik ist die Statik für Ihr Unternehmen. Sie berechnet Tragfähigkeit, Belastbarkeit und Stabilität, bevor Sie das Fundament legen.
              </p>
            </div>
            <div className="mt-10">
              <p className="font-semibold text-white text-xl">Bernhard Kurth</p>
              <p className="text-blue-400">Geschäftsführer Autentis</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://autentis.ch/wp-content/uploads/2024/11/kurth.jpg" 
                alt="Bernhard Kurth" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};