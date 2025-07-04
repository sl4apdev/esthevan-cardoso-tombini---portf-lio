
import React, { useState, useEffect } from 'react';
import { SECTIONS_DATA } from './constants';
import Header from './components/Header';
import Navigation from './components/Navigation';
import InfoCard from './components/InfoCard';
import LanguageSwitcher from './components/LanguageSwitcher';
import { SectionData } from './types';

export type Language = 'pt' | 'en';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('pt');

  const handleStart = () => {
    setIsStarted(true);

    setTimeout(() => {
      setShowContent(true);

      setActiveSection(SECTIONS_DATA[0].id);
    }, 700);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(prev => (prev === sectionId ? null : sectionId));
  };

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-jetbrains-mono text-brand-white">
      <LanguageSwitcher currentLang={language} onLangChange={handleLangChange} />
      <Header isStarted={isStarted} onStartClick={handleStart} language={language} />

      <main className="relative z-10 flex flex-col items-center w-full px-4 pb-16">
        {showContent && (
          <div className="w-full max-w-5xl animate-fade-in">
            <Navigation
              sections={SECTIONS_DATA}
              activeSection={activeSection}
              onNavClick={handleNavClick}
              language={language}
            />
            <div className="mt-8 space-y-8">
              {SECTIONS_DATA.map((section) => (
                <InfoCard
                  key={section.id}
                  section={section}
                  isVisible={activeSection === section.id}
                  language={language}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;