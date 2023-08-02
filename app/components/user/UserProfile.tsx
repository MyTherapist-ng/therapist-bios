import React from "react";
import Image from "next/image";
import profile from "../../assets/profile.svg";
import verified from "../../assets/verified.svg";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
  variable: "--font-grotesk",
});

const UserProfile = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image width={120} height={120} alt="avatar" className='md:w-[186px] md:h-[186px]' src={profile} />
      <div className="flex space-x-2 items-center justify-center mt-7 mb-3">
        <h1 className={` ${grotesk.className} font-semibold text-2xl md:text-[32px] md:leading-10 animate__fadeIn`}>Etinosa Alade Jr</h1>
        <Image
          width={22.75}
          height={22.75}
          alt="verified"
          src={verified}
        />
      </div>
    </div>
  );
};

export default UserProfile;
