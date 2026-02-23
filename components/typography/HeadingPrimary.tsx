import React from "react";

function HeadingPrimary({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[530px] h-[134px] flex justify-center items-center font-fredoka font-medium text-[55.42px] leading-[100%] tracking-[0%] text-center opacity-100"
    >
      {children}
    </div>
  );
}

export default HeadingPrimary;
