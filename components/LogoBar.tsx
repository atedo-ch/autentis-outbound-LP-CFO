import React from 'react';

const logos = [
  {
    name: "Zürcher Kantonalbank",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Z%C3%BCrcher_Kantonalbank_logo.svg"
  },
  {
    name: "Bank Avera",
    src: "https://bank-avera.ch/application/files/4716/0146/6057/BankAvera_wir_verstehen_uns.svg"
  },
  {
    name: "Swissgrid",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Swissgrid-logo.svg"
  },
  {
    name: "Die Mobiliar",
    src: "https://www.mobiliar.ch/logos/mobiliar-de.svg"
  },
  {
    name: "SBB CFF FFS",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/70/SBB_CFF_FFS_logo.svg"
  },
  {
    name: "Manor",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_Manor.svg"
  }
];

// Duplicate the array to ensure seamless infinite scrolling
const sliderLogos = [...logos, ...logos];

export const LogoBar: React.FC = () => {
  return (
    <section id="logos" className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase">
          Vertrauen durch Präzision bei führenden Schweizer Unternehmen
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-max animate-scroll">
          {sliderLogos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="mx-8 md:mx-12 flex items-center justify-center min-w-[120px] md:min-w-[160px]"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-10 md:h-12 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: '180px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};