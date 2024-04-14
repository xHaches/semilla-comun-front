import React, { InputHTMLAttributes } from "react";

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

const InputDate = ({
  className,
  label,
  errorText,
  ...props
}: InputDateProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full">
        <label className="text-start block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            type="date"
            id="datepicker"
            name="datepicker"
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...props}
          />
        </div>
        <span className="mt-1 text-sm leading-6 text-red-600">{errorText}</span>
      </div>
    </div>
  );
};

export default InputDate;
