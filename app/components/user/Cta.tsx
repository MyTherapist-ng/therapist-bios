"use client";
import React, { ReactNode } from "react";
import Button from "../reusables/Button";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { STORE_KEYS } from "@/app/configs/store.config";
import { ITherapistResponseData } from "@/app/types/response.type";

/**
 * Cta renders a call-to-action component which displays two buttons, namely "Book a session" and "Learn More". The "Book a session" button is a reusable Button component with a custom color and the "Learn More" button links to the therapist's interview page.
 *
 * @returns {ReactNode} The rendered call-to-action component.
 */
const Cta = (): ReactNode => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-3">
      <Button color="#1AB265" />
      <a href={user?.interview_url}>
        <button
          className="font-bold text-base text-grayscale leading-6 text-center bg-#FFFFFF border-grayscale
      border border-solid rounded-lg shadow-boxShadow w-[216px] h-[56px] hover:opacity-60 transition-all hover:scale-105 cursor-pointer">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default Cta;
