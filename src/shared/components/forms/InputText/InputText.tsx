import React, { InputHTMLAttributes } from "react";

import "./InputText.css";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

const InputText = ({
  className,
  label,
  errorText,
  ...props
}: InputTextProps) => {
  return (
    <div className="w-[100%]">
      <label className="text-start block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input {...props} className={`input-text ${className}`} />
      </div>
      <span className="mt-1 text-sm leading-6 text-red-600">{errorText}</span>
    </div>
  );
};

export default InputText;
