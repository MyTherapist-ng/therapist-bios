"use client";
import React, { JSX } from "react";
import Review from "./Review";
import { grotesk } from "@/app/utils/font";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { ITherapistResponseData } from "@/app/types/response.type";
import { STORE_KEYS } from "@/app/configs/store.config";


/**
 * Renders the reviews section of a therapist's page. This component retrieves
 * the therapist's reviews from local storage and renders each review as a
 * Review component. The reviews are wrapped in a container with a heading and
 * a paragraph of text explaining that the names are hidden for privacy.
 *
 * @returns {JSX.Element} The rendered reviews component.
 */
const Reviews = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  return (
    <div className="mb-4 md:mb-[120px]">
      <h1
        className={`${grotesk.className} font-bold text-xl text-[32px] md:leading-10 text-[#1F242C] mb-1 md:mb-7`}
      >
        Featured Client Reviews
      </h1>
      <p className="font-normal text-sm md:text-base leading-7 text-[#333B49] mb-4 md:mb-7">
        Names are hidden for privacy*
      </p>
      <div className="flex flex-wrap gap-[30px] items-center">
        {Reviews && Reviews.length > 0 ? (
          user?.reviews.map((review) => (
            <Review review={review} key={review?.comment} />
          ))
        ) : (
          <p>No Reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
