import { FC } from 'react';

interface LogoProps {
  className?: string;
  withSubtitle?: boolean;
}

export const Logo: FC<LogoProps> = ({ className = '', withSubtitle = true }) => {
  return (
    <svg 
      viewBox="0 0 360 85" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Autentis Logo"
      role="img"
    >
      {/* Icon: Yellow Triangle */}
      <path 
        d="M35 10 L65 65 L5 65 Z" 
        fill="#FDB94E" 
      />
      
      {/* Main Text: autentis */}
      <text 
        x="80" 
        y="54" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="700" 
        fontSize="56" 
        fill="#2E3A8C"
        letterSpacing="-2"
      >
        autentis
      </text>

      {/* Subtitle: talent acquisition & development */}
      {withSubtitle && (
        <text 
          x="82" 
          y="76" 
          fontFamily="'Inter', sans-serif" 
          fontWeight="400" 
          fontSize="14" 
          fill="#2E3A8C"
          letterSpacing="0.2"
        >
          talent acquisition &amp; development
        </text>
      )}
    </svg>
  );
};