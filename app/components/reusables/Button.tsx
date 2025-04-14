"use client";
import Image from "next/image";
import React from "react";
import arrowForward from "../../assets/arrow-forward.svg";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { ITherapistResponseData } from "@/app/types/response.type";
import { STORE_KEYS } from "@/app/configs/store.config";









type ButtonProp = {
  color: string;
};

/**
 * Button renders a button component with a custom color.
 * The button is a link to https://mytherapistng.app.link and has a text "Book a session" and an arrow icon.
 * The button has a rounded-lg shadow-boxShadow and is 216px wide and 56px tall.
 * When hovered, the button has an opacity of 60 and scales up by 5%.
 * @param {string} color The color of the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ color }: ButtonProp) => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

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
