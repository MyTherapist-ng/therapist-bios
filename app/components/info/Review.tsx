import Image from "next/image";
import React from "react";
import rating from "../../assets/rating.svg";

type Prop = {
  review: string;
};

const Review = ({ review }: Prop) => {
  return (
    <div className="flex flex-col bg-white p-5 rounded- w-full md:w-[400px]">
      <h3 className="font-bold text-sm leading-6">He was really encouraging</h3>
      <Image
        src={rating}
        alt="education"
        width={49}
        height={19}
        className="my-2"
      />
      <p className="font-medium text-[13px] leading-5 text-[#667085]">{review}</p>
    </div>
  );
};

export default Review;
