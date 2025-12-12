import { FC } from 'react';
import { Button } from './Button';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { ROICalculator } from './ROICalculator';

export const Hero: FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://raw.githubusercontent.com/atedo-ch/autentis-brandassets/main/Gemini_Generated_Image_kg2lnxkg2lnxkg2l.png" 
          alt="Professionelles Business-Szenario" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          
          <div className="hero-text-col">
            <div className="hero-badge">
              <TrendingUp size={14} style={{ marginRight: '0.5rem' }} />
              Amortisation meist &lt; 6 Monate
            </div>
            
            <h1 className="hero-title">
              Investitionsschutz für Ihr <span>Personalbudget</span>.
            </h1>
            <p className="hero-description">
              Fehlbesetzungen kosten Sie zwischen 30.000 und 130.000 CHF. Minimieren Sie finanzielle Risiken und sichern Sie Ihren ROI durch wissenschaftlich fundierte Eignungsdiagnostik.
            </p>
            
            <div className="hero-actions">
              <Button className="btn-lg" onClick={scrollToContact}>
                Termin vereinbaren
              </Button>
            </div>

            <p className="hero-trust">
              <CheckCircle size={16} color="var(--green-600)" />
              Wissenschaftlich validiert & datengestützt
            </p>
          </div>

          <div className="hero-calc-col">
            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  );
};