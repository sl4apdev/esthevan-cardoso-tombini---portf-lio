
import React from 'react';
import ComplexButton from './ComplexButton';
import { Language } from '../App';

interface HeaderProps {
  isStarted: boolean;
  onStartClick: () => void;
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ isStarted, onStartClick, language }) => {
  const buttonTexts = {
    pt: { text1: 'Explorar', text2: 'Navegando' },
    en: { text1: 'Explore', text2: 'Navigating' },
  };

  return (
    <header
      className={`relative z-20 flex flex-col items-center transition-all duration-700 ease-in-out text-center ${
        isStarted
          ? 'pt-12 pb-8 animate-slide-in-top'
          : 'justify-center min-h-screen'
      }`}
    >
      <h1 className="text-5xl font-bold md:text-7xl font-dancing-script text-3d">
        Esthevan Cardoso Tombini
      </h1>
      <h2 className="mt-2 text-xl md:text-2xl text-brand-green-100 subtitle-glow">
        Hoop
      </h2>
      {!isStarted && (
        <div className="mt-8">
          <ComplexButton
            onClick={onStartClick}
            text1={buttonTexts[language].text1}
            text2={buttonTexts[language].text2}
          />
        </div>
      )}
    </header>
  );
};

export default Header;