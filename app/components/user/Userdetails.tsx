import React from "react";
import { useUser } from "@/app/context/userContext";

const Userdetails = () => {
  const { user } = useUser();
  return (
    <div className="w-[90%] md:w-[70%]">
      <p className="text-center font-medium text-base leading-8 text-grayscale my-7">
        {user?.bio}
      </p>
    </div>
  );
};

export default Userdetails;
