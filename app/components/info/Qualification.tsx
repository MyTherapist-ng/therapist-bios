import Image from "next/image";
import React, { JSX } from "react";
import education from "../../assets/education.svg";
import "animate.css";

type Prop = {
  qualification: string;
};

/**
 * Qualification renders a div with an image and a text. The div is a link to nowhere.
 * The image is an icon of a graduation cap.
 * The text is the qualification of the user. The text is rendered in a paragraph tag.
 * The div is styled with tailwind classes to give it a blue background and rounded corners.
 * The div also has a hover animation that pulses the background color.
 * @param {string} qualification The qualification of the user to be rendered.
 * @returns {JSX.Element} The JSX element representing the Qualification component.
 */
const Qualification = ({ qualification }: Prop): JSX.Element => {
  return (
    <div className="hover:animate-pulse flex space-x-[10px] bg-white px-7 py-6 max-w-full md:max-w-[841px] rounded-[28px]">
      <Image
        src={education}
        alt="education"
        width={24}
        height={21}
        className="flex self-start"
      />
      <p className="text-base font-normal leading-7">{qualification}</p>
    </div>
  );
};

export default Qualification;
