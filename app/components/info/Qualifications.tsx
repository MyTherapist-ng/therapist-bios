"use client";
import React, { JSX } from "react";
import Qualification from "./Qualification";
import { grotesk } from "@/app/utils/font";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { ITherapistResponseData } from "@/app/types/response.type";
import { STORE_KEYS } from "@/app/configs/store.config";

/**
 * Qualifications renders a div with a heading and a list of the user's educational
 * qualifications, obtained from the user's data stored in local storage.
 *
 * @returns {JSX.Element} The JSX element representing the user's qualifications.
 */
const Qualifications = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);


  const Qualifications = user?.qualifications?.split(",");

  return (
    <div className="mb-16 first-letter:mb-[120px]">
      <h1
        className={` ${grotesk.className} font-bold text-xl md:text-[32px] md:leading-10 text-[#1F242C] mb-5 md:mb-7`}
      >
        Educational Qualifications
      </h1>
      <div className="space-y-4">
        {Qualifications?.map((qualification: string) => (
          <Qualification qualification={qualification} key={qualification} />
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
