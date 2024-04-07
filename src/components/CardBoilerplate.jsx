import React from "react";

export const CardBoilerplate = ({ children }) => {
  return (
    <div className="bg-prot bg-[url('/img/fondo_card.png')] w-screen h-screen bg-contain bg-no-repeat bg-center">
      <div className="w-full h-full flex relative justify-center items-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};
