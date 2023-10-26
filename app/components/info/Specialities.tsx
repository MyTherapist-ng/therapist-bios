import React from "react";
import Specialty from "./Specialty";
import { grotesk } from "@/app/utils/font";
import { useUser } from "@/app/context/userContext";

const Specialities = () => {
  const { user } = useUser();
  const specialities = user?.specialized_in?.split(",");
  return (
    <div className="my-16 md:my-[120px]">
      <h1
        className={` ${grotesk.className} font-bold text-xl md:text-[32px] md:leading-10 text-[#1F242C] mb-5 md:mb-7`}
      >
        Specialities
      </h1>
      <div className="flex flex-wrap items-center">
        {specialities?.map((specialty: string) => (
          <Specialty specialty={specialty} key={specialty} />
        ))}
      </div>
    </div>
  );
};

export default Specialities;
