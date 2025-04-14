"use client";
import React, { JSX } from "react";
import Cta from "./Cta";
import Userdetails from "./Userdetails";
import UserProfile from "./UserProfile";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { ITherapistResponseData } from "@/app/types/response.type";
import { STORE_KEYS } from "@/app/configs/store.config";



/**
 * Renders the user component which displays the user's profile, a link to the user's
 * interview, the user's details and a call-to-action component.
 *
 * @returns {JSX.Element} The rendered user component.
 */
const User = (): JSX.Element => {

  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[30px] md:mt-10 mb-[76px]">
      <UserProfile />
      <a href={user?.interview_url} className="text-center underline font-medium text-sm md:text-base md:leading-8 text-grayscale cursor-pointer hover:opacity-60 transition-opacity">
        Read interview
      </a>
      <Userdetails />
      <Cta />
    </div>
  );
};

export default User;
