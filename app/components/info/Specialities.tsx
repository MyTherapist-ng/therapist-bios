import React from "react";
import Specialty from "./Specialty";
import { grotesk } from "@/app/utils/font";

const Specialities = () => {
  const specialities = [
    "ADHD",
    "Trauma",
    "Depression",
    "PTSD",
    "Anxiety",
    "Bipolar Disorder",
  ];
  return (
    <div className='my-16 md:my-[120px]'>
      <h1 className={` ${grotesk.className} font-bold text-xl md:text-[32px] md:leading-10 text-[#1F242C] mb-5 md:mb-7`}>
        Specialities
      </h1>
      <div className="flex flex-wrap items-center space-y-2">
        {specialities.map((specialty: string) => (
          <Specialty specialty={specialty} key={specialty} />
        ))}
      </div>
    </div>
  );
};

export default Specialities;
