import Image from "next/image";
import React from "react";
import rating from "../../assets/rating.svg";
import 'animate.css'

type Prop = {
  review: any;
};

const Review = ({ review }: Prop) => {
  return (
    <div className="flex flex-col bg-white p-5 rounded-lg w-full md:w-[400px] hover:animate-pulse">
      <Image
        src={rating}
        alt="education"
        width={49}
        height={19}
        className="my-2"
      />
      <p className="font-medium text-[13px] leading-5 text-[#667085]">{review?.title}</p>
    </div>
  );
};

export default Review;
