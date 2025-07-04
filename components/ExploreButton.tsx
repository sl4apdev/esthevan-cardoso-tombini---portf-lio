
import React from 'react';

interface ExploreButtonProps {
  onClick: () => void;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className="text-container">
        <span className="text up">Navegar</span>
        <span className="text down">Explorar</span>
      </div>
      <div className="svg-container">
        <svg
          className="line-path"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path d="M 10,10 L 90,10" />
        </svg>
        <svg
          className="arrow-path"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="20"
          height="20"
        >
          <path d="M 10,2 L 18,10 L 10,18 M 2,10 L 18,10" />
        </svg>
      </div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ExploreButton;
