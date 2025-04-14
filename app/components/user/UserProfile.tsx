"use client";
import React, { JSX } from "react";
import Image from "next/image";
import verified from "../../assets/verified.svg";
import { grotesk } from "@/app/utils/font";
import { STORE_KEYS } from "@/app/configs/store.config";
import { ITherapistResponseData } from "@/app/types/response.type";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";



/**
 * UserProfile component displays the user's avatar and name. The avatar is
 * rendered as a circular image with a blur placeholder. The user's name is

 * styled with specific typography and is accompanied by a verified icon.
 *
 * @returns {JSX.Element} The JSX element representing the user's profile section.
 */
const UserProfile = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);


  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        width={120}
        height={120}
        alt="avatar"
        style={{ objectFit: "cover" }}
        className="md:w-[186px] md:h-[186px] rounded-full"
        src={user?.avatar as any}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkyM//DwADVAHnfjgCmgAAAABJRU5ErkJggg=="
        loading={"lazy"}

      />
      <div className="flex items-center justify-center mb-3 space-x-2 mt-7">
        <h1
          className={` ${grotesk.className} font-semibold text-2xl md:text-[32px] md:leading-10 animate__fadeIn`}
        >
          {user?.name}
        </h1>
        <Image width={22.75} height={22.75} alt="verified" src={verified} />
      </div>
    </div>
  );
};

export default UserProfile;
