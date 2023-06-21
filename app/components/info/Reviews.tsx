import React from "react";
import Review from "./Review";
import copy from "@/app/utils/copy";

const Reviews = () => {
  const { review1, review2, review3, review4 } = copy;

  const Reviews = [review1, review2, review3, review4];
  return (
    <div className="mb-4 md:mb-[120px]">
      <h1 className="font-bold text-xl text-[32px] md:leading-10 text-[#1F242C] mb-1 md:mb-7">
        Featured Client Reviews
      </h1>
      <p className="font-normal text-sm md:text-base leading-7 text-[#333B49] mb-4 md:mb-7">
        Names are hidden for privacy*
      </p>
      <div className="flex flex-wrap gap-[30px] items-center">
        {Reviews.map((review: string) => (
          <Review review={review} key={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
