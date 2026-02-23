import React from "react";

function ParaPrimary({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[571px] h-[132px] bg-background flex justify-center items-center font-poppins font-normal text-[22px] leading-[100%] tracking-[1%] text-center opacity-100"
    >
      {children}
    </div>
  );
}

export default ParaPrimary;
