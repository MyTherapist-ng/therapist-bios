import React from "react";
import Cta from "./Cta";
import Userdetails from "./Userdetails";
import UserProfile from "./UserProfile";
import { useUser } from "@/app/context/userContext";


const User = () => {
  
  const user = useUser();
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
