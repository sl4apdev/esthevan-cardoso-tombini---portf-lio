
import React from 'react';
import { SectionData } from '../types';
import { Language } from '../App';

interface InfoCardProps {
  section: SectionData;
  isVisible: boolean;
  language: Language;
}

const InfoCard: React.FC<InfoCardProps> = ({ section, isVisible, language }) => {
  const { title, paragraphs, imageUrl, skills, socials } = section;

  return (
    <div
      className={`grid transition-all duration-700 ease-in-out ${
        isVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div
          className="group p-1 bg-gradient-to-br from-brand-green-500/80 via-brand-green-500/90 to-brand-green-500/80 backdrop-blur-md border border-brand-white/20 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-green-200/20"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="w-full md:w-1/3 h-64 md:h-auto self-stretch overflow-hidden rounded-xl">
              <img
                src={imageUrl}
                alt={title[language]}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="w-full md:w-2/3 p-4 md:p-2 text-brand-white">
              <h3 className={`text-3xl font-bold text-brand-green-100 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {title[language]}
              </h3>
              {paragraphs[language].map((p, index) => (
                <p
                  key={index}
                  className={`mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  {p}
                </p>
              ))}
              {skills && (
                <div 
                  className={`flex flex-wrap gap-4 mt-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${150 + paragraphs[language].length * 100}ms` }}
                >
                  {skills.map(skill => (
                    <div key={skill.name} className="flex items-center gap-2 bg-brand-green-400/20 p-2 rounded-lg">
                      <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8"/>
                      <span className="font-bold">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
              {socials && (
                <div 
                  className={`flex flex-wrap gap-6 mt-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${150 + paragraphs[language].length * 100}ms` }}
                >
                  {socials.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-brand-green-100 hover:text-brand-white transition-colors group/social"
                    >
                      <img src={social.iconUrl} alt={social.name} className="w-8 h-8 filter grayscale brightness-200 group-hover/social:filter-none transition-all" />
                      <span className="text-lg font-bold">{social.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;