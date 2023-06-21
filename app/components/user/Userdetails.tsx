import React from "react";
import copy from "../../utils/copy";

const Userdetails = () => {
  return (
    <div className="w-[90%] md:w-[70%]">
      <p className="text-center font-medium text-base leading-8 text-grayscale my-7">
        {copy.userCopy}
      </p>
    </div>
  );
};

export default Userdetails;
