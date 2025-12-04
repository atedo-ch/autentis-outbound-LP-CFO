import React from 'react';

interface LogoProps {
  className?: string;
  withSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', withSubtitle = true }) => {
  return (
    <svg 
      viewBox="0 0 300 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Autentis Logo"
    >
      {/* Icon: Yellow Triangle */}
      <path 
        d="M35 10 L65 65 L5 65 Z" 
        fill="#FDB94E" 
      />
      
      {/* Main Text: autentis */}
      <text 
        x="80" 
        y="52" 
        fontFamily="Inter, sans-serif" 
        fontWeight="bold" 
        fontSize="56" 
        fill="#2E3A8C"
        letterSpacing="-1"
      >
        autentis
      </text>
      <circle cx="288" cy="18" r="6" fill="#2E3A8C" />

      {/* Subtitle: talent acquisition & development */}
      {withSubtitle && (
        <text 
          x="82" 
          y="74" 
          fontFamily="Inter, sans-serif" 
          fontWeight="400" 
          fontSize="14" 
          fill="#2E3A8C"
          letterSpacing="0.5"
        >
          talent acquisition &amp; development
        </text>
      )}
    </svg>
  );
};