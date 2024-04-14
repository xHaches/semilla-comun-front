import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

interface InputCurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

const InputCurrency = ({
  className,
  label,
  errorText,
  onChange,
  ...props
}: InputCurrencyProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const numberRegex = /^[0-9]+$/;
    if (numberRegex.test(e.target.value)) {
      onChange?.(e);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          onKeyDown={(e) => {
            const numberRegex = /^[0-9]+$/;

            if (e.key === "Backspace") {
              return;
            }

            if (!numberRegex.test(e.key)) {
              return e.preventDefault();
            }
          }}
          onChange={handleChange}
          {...props}
        />
      </div>
      <span className="mt-1 text-sm leading-6 text-red-600">{errorText}</span>
    </div>
  );
};

export default InputCurrency;
