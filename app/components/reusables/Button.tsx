import Image from "next/image";
import React from "react";
import arrowForward from "../../assets/arrow-forward.svg";

type ButtonProp = {
  color: string;
};

const Button = ({ color }: ButtonProp) => {
    console.log(color)
  return (
    <button style={{ backgroundColor: `${color}` }}
      className={`rounded-lg shadow-boxShadow w-[216px] h-[56px]`}
    >
      <div className="flex justify-center items-center space-x-5">
        <p className="font-bold text-base text-white leading-6">
          Book a session
        </p>
        <Image width={14} height={14} alt="book a session" src={arrowForward} />
      </div>
    </button>
  );
};

export default Button;
