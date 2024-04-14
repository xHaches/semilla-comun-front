import React, { InputHTMLAttributes } from "react";

interface InputTextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorText?: string;
}

const TextBox = ({
  className,
  label,
  errorText,
  ...props
}: InputTextBoxProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
          {...props}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-red-600">{errorText}</p>
    </div>
  );
};

export default TextBox;
