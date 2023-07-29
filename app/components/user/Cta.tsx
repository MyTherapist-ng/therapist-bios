import Image from "next/image";
import React from "react";
import Button from "../reusables/Button";

const Cta = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-3">
      <Button color="#1AB265" />
      <button
        className="font-bold text-base text-grayscale leading-6 text-center bg-#FFFFFF border-grayscale
      border border-solid rounded-lg shadow-boxShadow w-[216px] h-[56px] hover:opacity-60 transition-all hover:scale-105 cursor-pointer"
      >
        learn more
      </button>
    </div>
  );
};

export default Cta;
