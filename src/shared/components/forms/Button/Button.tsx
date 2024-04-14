import React, { ButtonHTMLAttributes } from "react";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: "primary" | "secondary" | "tertiary";
}

const Button = ({ className, text, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
