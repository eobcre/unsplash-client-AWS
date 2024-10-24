import React from 'react';

interface ButtonProps {
  buttonName: string;
  buttonStyle: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName, buttonStyle }) => {
  return <button className={buttonStyle}>{buttonName}</button>;
};

export default Button;
