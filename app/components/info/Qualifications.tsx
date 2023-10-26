import React from "react";
import Specialty from "./Specialty";
import Qualification from "./Qualification";
import copy from "@/app/utils/copy";
import { grotesk } from "@/app/utils/font";
import { useUser } from "@/app/context/userContext";

const Qualifications = () => {
  const { user } = useUser();

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
