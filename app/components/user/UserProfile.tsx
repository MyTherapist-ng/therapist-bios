import React from "react";
import Image from "next/image";
import verified from "../../assets/verified.svg";
import { grotesk } from "@/app/utils/font";
import { useUser } from "@/app/context/userContext";


/**
 * UserProfile
 *
 * A React component that renders a user's profile information in a neat format.
 *
 * @returns A JSX element representing the user's profile.
 */
const UserProfile = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col justify-center items-center">

      <Image
        width={120}
        height={120}
        alt="avatar"
        style={{ objectFit: "cover" }}
        className="md:w-[186px] md:h-[186px] rounded-full"
        src={user?.avatar}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkyM//DwADVAHnfjgCmgAAAABJRU5ErkJggg=="
      />
      <div className="flex space-x-2 items-center justify-center mt-7 mb-3">
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
