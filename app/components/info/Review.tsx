import Image from "next/image";
import React from "react";
import star from "../../assets/star.svg";
import "animate.css";

type Prop = {
  review: any;
};

const Review = ({ review }: Prop) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-lg w-full md:w-[400px] hover:animate-pulse">
      <div className="px-1.5 py-[1px] bg-[#EAECF0] flex items-center w-fit gap-2 space-between rounded-[21px] ">
        <p className="text-xs font-medium ">{review?.rating}</p>
        <Image src={star} alt="review" width={12} height={12} />
      </div>
      <h1 className="font-bold text-sm text-[#1D2939]">{review?.title}</h1>
      <p className="font-medium text-[13px] leading-5 text-[#667085]">
        {review?.comment}
      </p>
    </div>
  );
};

export default Review;
