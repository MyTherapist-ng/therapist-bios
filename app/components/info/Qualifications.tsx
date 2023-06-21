import React from "react";
import Specialty from "./Specialty";
import Qualification from "./Qualification";
import copy from "@/app/utils/copy";

const Qualifications = () => {
  const { qualification1, qualification2, qualification3, qualification4 } = copy;
  const Qualifications = [qualification1, qualification2, qualification3, qualification4];
  return (
    <div className="mb-16 first-letter:mb-[120px]">
      <h1 className="font-bold text-xl md:text-[32px] md:leading-10 text-[#1F242C] mb-5 md:mb-7">
        Educational Qualifications
      </h1>
      <div className="space-y-4">
        {Qualifications.map((qualification: string) => (
          <Qualification qualification={qualification} key={qualification} />
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
