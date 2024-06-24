import React from "react";
import Video from "./Video";
import Specialities from "./Specialities";
import Qualifications from "./Qualifications";
import Reviews from "./Reviews";

const Info = () => {
  return (
    <div className="w-full md:w-4/5 rounded-lg bg-[#f7f7f7] mb-7 px-4 md:px-[84px]">
      {/* <Video /> */}
      <Specialities />
      <Qualifications />
      <Reviews />
    </div>
  );
};

export default Info;
