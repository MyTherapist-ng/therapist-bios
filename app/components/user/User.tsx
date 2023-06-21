import React from "react";
import Cta from "./Cta";
import Userdetails from "./Userdetails";
import UserProfile from "./UserProfile";

const User = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[30px] md:mt-10 mb-[76px]">
      <UserProfile />
      <p className="text-center underline font-medium text-sm md:text-base md:leading-8 text-grayscale">
        Read interview
      </p>
      <Userdetails />
      <Cta />
    </div>
  );
};

export default User;
