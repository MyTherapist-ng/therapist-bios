import React, { JSX } from "react";
import Specialty from "./Specialty";
import { grotesk } from "@/app/utils/font";
import { STORE_KEYS } from "@/app/configs/store.config";
import { ITherapistResponseData } from "@/app/types/response.type";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";







/**
 * Specialities renders a div with a heading and a list of the user's specialities
 * obtained from the user's data stored in local storage. The list of specialities
 * is mapped over and each one is rendered as a Specialty component.
 *
 * @returns {JSX.Element} The JSX element representing the user's specialities.
 */
const Specialities = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  const specialities = user?.specialized_in?.split(",");
  return (
    <div className="my-16 md:my-[120px]">
      <h1
        className={` ${grotesk.className} font-bold text-xl md:text-[32px] md:leading-10 text-[#1F242C] mb-5 md:mb-7`}
      >
        Specialities
      </h1>
      <div className="flex flex-wrap items-center">
        {specialities?.map((specialty: string) => (
          <Specialty specialty={specialty} key={specialty} />
        ))}
      </div>
    </div>
  );
};

export default Specialities;
