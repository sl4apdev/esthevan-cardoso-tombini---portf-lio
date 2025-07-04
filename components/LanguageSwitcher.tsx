
import React from 'react';
import { Language } from '../App';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLangChange }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 p-1 bg-brand-green-500/30 backdrop-blur-sm border border-brand-white/10 rounded-full">
      <button 
        onClick={() => onLangChange('pt')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${currentLang === 'pt' ? 'bg-brand-green-200/40 text-white' : 'text-brand-green-100 hover:bg-brand-green-400/20'}`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
      <button 
        onClick={() => onLangChange('en')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${currentLang === 'en' ? 'bg-brand-green-200/40 text-white' : 'text-brand-green-100 hover:bg-brand-green-400/20'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
