"use client";
import React, { JSX } from "react";
import { STORE_KEYS } from "@/app/configs/store.config";
import { ITherapistResponseData } from "@/app/types/response.type";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";





/**
 * Userdetails component fetches and displays the user's bio from local storage.
 * The bio is displayed as a centered paragraph with specific styling.
 *
 * @returns {JSX.Element} The JSX element representing the user's details section.
 */
const Userdetails = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  return (
    <div className="w-[90%] md:w-[70%]">
      <p className="text-center font-medium text-base leading-8 text-grayscale my-7">
        {user?.bio}
      </p>
    </div>
  );
};

export default Userdetails;
