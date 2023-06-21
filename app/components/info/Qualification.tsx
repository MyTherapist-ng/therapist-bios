import Image from "next/image";
import React from "react";
import education from "../../assets/education.svg";

type Prop = {
  qualification: string;
};

const Qualification = ({ qualification }: Prop) => {
  return (
    <div className="flex space-x-[10px] bg-white px-7 py-6 max-w-full md:max-w-[841px] rounded-[28px]"> 
      <Image src={education} alt="education" width={24} height={21} className="flex self-start" />
      <p className="font-normal text-base leading-7">{qualification}</p>
    </div>
  );
};

export default Qualification;
