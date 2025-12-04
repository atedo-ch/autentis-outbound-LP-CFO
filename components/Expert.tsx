import React from 'react';

export const Expert: React.FC = () => {
  return (
    <section id="expert" className="expert-section">
      {/* Background pattern */}
      <div className="expert-bg-pattern"></div>
      
      <div className="container expert-content-wrapper">
        <div className="expert-grid">
          <div>
            <h2 className="expert-quote">
              "Würden Sie ein Hochhaus ohne Statik bauen? Warum tun Sie es bei Ihrem Team?"
            </h2>
            <div className="expert-text">
              <p>
                In der Finanzwelt prüfen wir jede Anlage auf Herz und Nieren. Wir analysieren Bilanzen, bewerten Risiken und prognostizieren Renditen.
              </p>
              <p>
                Bei der wichtigsten Ressource – dem Personal – verlassen sich jedoch viele Führungskräfte noch immer auf das Bauchgefühl. Eignungsdiagnostik ist die Statik für Ihr Unternehmen. Sie berechnet Tragfähigkeit, Belastbarkeit und Stabilität, bevor Sie das Fundament legen.
              </p>
            </div>
            <div className="expert-profile">
              <p className="expert-name">Bernhard Kurth</p>
              <p className="expert-role">Geschäftsführer Autentis</p>
            </div>
          </div>
          <div className="expert-image-col">
            <div className="expert-img-container">
              <div className="expert-glow"></div>
              <img 
                src="https://autentis.ch/wp-content/uploads/2024/11/kurth.jpg" 
                alt="Bernhard Kurth" 
                className="expert-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};