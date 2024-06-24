import Image from "next/image";
import React from "react";
import arrowForward from "../../assets/arrow-forward.svg";
import { useUser } from "@/app/context/userContext";

type ButtonProp = {
  color: string;
};

const Button = ({ color }: ButtonProp) => {
  const user = useUser();
  return (
    <a href="https://mytherapistng.app.link"> 
      <button
      style={{ backgroundColor: `${color}` }}
      className={`rounded-lg shadow-boxShadow w-[216px] h-[56px] hover:opacity-60 hover:scale-105 transition-all`}
    >
      <div className="flex justify-center items-center space-x-5">
        <p className="font-bold text-base text-white leading-6">
          Book a session
        </p>
        <Image width={14} height={14} alt="book a session" src={arrowForward} />
      </div>
    </button>
      </a>
  );
};

export default Button;
