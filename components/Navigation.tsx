
import React from 'react';
import { SectionData } from '../types';
import { Language } from '../App';

interface NavigationProps {
  sections: SectionData[];
  activeSection: string | null;
  onNavClick: (sectionId: string) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onNavClick, language }) => {
  return (
    <nav className="sticky top-5 z-30 flex justify-center w-full">
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-brand-green-500/30 backdrop-blur-sm border border-brand-white/10 rounded-full">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onNavClick(section.id)}
            className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base font-bold text-brand-white border rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-brand-green-100 ${
              activeSection === section.id
                ? 'bg-brand-green-200/40 border-brand-green-100 scale-105 shadow-lg'
                : 'bg-brand-green-500/40 border-brand-white/20 hover:bg-brand-green-400/50 hover:border-brand-white/40'
            }`}
          >
            {section.title[language]}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;