import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Comparison: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Vom Kostenrisiko zum strategischen Investment
          </h2>
          <p className="section-subtitle">
            Der Unterschied zwischen intuitiver Auswahl und diagnostischer Präzision in Zahlen.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Risk Side */}
          <div className="comparison-card risk">
            <h3 className="comparison-card-title">
              <span className="indicator-dot"></span>
              Traditionelle Auswahl
            </h3>
            <ul className="comparison-list">
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                  <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Hohes Risiko für "False Positives" (Blender)</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Versteckte Kosten durch Fluktuation</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Lange Einarbeitungszeiten (Kostenfalle)</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Entscheidung basierend auf Bauchgefühl</span>
              </li>
            </ul>
          </div>

          {/* Benefit Side */}
          <div className="comparison-card benefit">
            <div className="comparison-tag">
              Empfohlen
            </div>
            <h3 className="comparison-card-title">
              <span className="indicator-dot"></span>
              Mit Autentis Diagnostik
            </h3>
            <ul className="comparison-list">
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                  <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">98% Prognosesicherheit bei Besetzungen</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Sofortiger ROI durch Leistungsträger</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Objektive, auditsichere Entscheidung</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Nachhaltige kulturelle Passung</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="comparison-cta">
          <Button onClick={scrollToContact} className="btn-lg">
            Risiko jetzt minimieren – Demo vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};