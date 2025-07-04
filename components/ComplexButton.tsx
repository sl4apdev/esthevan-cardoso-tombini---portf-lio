
import React from 'react';

interface ComplexButtonProps {
  onClick: () => void;
  text1: string;
  text2: string;
}

const renderChars = (text: string, stateClass: string) => (
  <span className={`char ${stateClass}`}>
    {text.split('').map((char, index) => (
      <span key={index} data-label={char} style={{ '--i': index + 1 } as React.CSSProperties}>
        {char}
      </span>
    ))}
  </span>
);

const ComplexButton: React.FC<ComplexButtonProps> = ({ onClick, text1, text2 }) => {
  return (
    <button className="complex-button" onClick={onClick} autoFocus>
      <div className="bg"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 342 208"
        height="208"
        width="342"
        className="splash"
      >
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M50.8 100.5C50.8 100.5 38.5 93.2 25.3 99.8C12.1 106.4 2.5 100.5 2.5 100.5"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M292.3 100.5C292.3 100.5 304.6 93.2 317.8 99.8C331 106.4 339.5 97.8 339.5 97.8"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.35"
          d="M280.2 66.8C280.2 66.8 287.5 52.3 301.5 51.2C315.5 50.1 317.8 40.8 317.8 40.8"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.35"
          d="M280.2 143.2C280.2 143.2 287.5 157.7 301.5 158.8C315.5 159.9 317.8 169.2 317.8 169.2"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M228.5 59.2C228.5 59.2 223.8 44.8 233.5 34.2C243.2 23.6 241.5 17.8 241.5 17.8"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M228.5 151.8C228.5 151.8 223.8 166.2 233.5 176.8C243.2 187.4 241.5 193.2 241.5 193.2"
        ></path>
      </svg>

      <div className="wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 221 42"
          height="42"
          width="221"
          className="path"
        >
          <path
            strokeLinecap="round"
            strokeWidth="3"
            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
          ></path>
        </svg>

        <div className="outline"></div>
        <div className="content">
          {renderChars(text1, 'state-1')}

          <div className="icon">
            <div></div>
          </div>

          {renderChars(text2, 'state-2')}
        </div>
      </div>
    </button>
  );
};

export default ComplexButton;
