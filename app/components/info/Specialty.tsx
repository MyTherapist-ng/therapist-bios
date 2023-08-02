import React from "react";
import 'animate.css';

type Props = {
  specialty: string;
}
const Specialty = ({ specialty }: Props) => {
  return (
    <div className="mr-3 mb-2 flex hover:animate-pulse">
      <p className="font-normal text-base leading-7 px-5 py-2 bg-white rounded-3xl">
        {specialty}
      </p>
    </div>
  );
};

export default Specialty;
