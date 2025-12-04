import React from 'react';
import { Button } from './Button';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { ROICalculator } from './ROICalculator';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="generated_image_0.png" 
          alt="Professionelles Business-Gespräch in modernem Büro" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 lg:bg-gradient-to-r lg:from-white lg:via-white/90 lg:to-white/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold tracking-wide uppercase mb-6 border border-green-200">
              <TrendingUp size={14} className="mr-2" />
              Amortisation meist &lt; 6 Monate
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Investitionsschutz für Ihr <span className="text-blue-700">Personalbudget</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Fehlbesetzungen kosten Sie zwischen 30.000 und 130.000 CHF. Minimieren Sie finanzielle Risiken und sichern Sie Ihren ROI durch wissenschaftlich fundierte Eignungsdiagnostik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-4 text-lg" onClick={scrollToContact}>
                Termin vereinbaren
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500 flex items-center">
              <CheckCircle size={16} className="text-green-600 mr-2" />
              Wissenschaftlich validiert & datengestützt
            </p>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  );
};