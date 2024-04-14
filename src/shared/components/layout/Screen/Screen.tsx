import React, { ReactNode } from "react";

import "./Screen.css";

const Screen = ({
  children,
  className,
}: {
  children: ReactNode | ReactNode[] | boolean;
  className?: string;
}) => {
  return (
    <div
      className={`screen mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Screen;
