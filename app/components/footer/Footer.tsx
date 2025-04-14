"use client";
import Socials from "./Socials";
import Button from "../reusables/Button";
import { grotesk } from "@/app/utils/font";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { STORE_KEYS } from "@/app/configs/store.config";
import { JSX } from "react";
import { ITherapistResponseData } from "@/app/types/response.type";



/**
 * Footer renders the footer section of the therapist's page. It contains a call to action section
 * and social media links.
 *
 * The call to action section is a container with a background image, a heading, a text, and a button.
 * The heading asks the user to take an action, which is to book a session with the therapist.
 * The text provides more information about the price of the session.
 * The button is a reusable Button component with a custom color.
 *
 * The social media links are rendered by the Socials component.
 * The Socials component renders a list of social media links with their corresponding icons.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  return (
    <div className="w-full">
      <div className="bg-footer bg-cover w-full md:w-4/5 h-[248px] md:h-[403px] rounded-lg mx-auto justify-self-center flex flex-col items-center justify-center bg-no-repeat bg-center bg-[#1AB265] my-8 md:my-12">
        <h1
          className={` ${grotesk.className}font-semibold text-2xl md:text-[40px] leading-10 text-[#f5f6ff]`}
        >
          Ready to take action?
        </h1>
        <a className="font-semibold decoration-none text-base md:text-xl text-[#f5f6ff] mt-4 mb-8 ml-8">
          Book {user?.name} for as low as {user?.price?.display} / Session
        </a>
        <Button color="#1B1D3E" />
      </div>
      <Socials />
    </div>
  );
};

export default Footer;
