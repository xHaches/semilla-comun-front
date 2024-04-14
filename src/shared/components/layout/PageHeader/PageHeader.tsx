import React from "react";

const PageHeader = ({ text }: { text: string }) => {
  return (
    <div className="shadow bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
