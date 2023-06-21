import React from "react";

type Props = {
  specialty: string;
}
const Specialty = ({ specialty }: Props) => {
  return (
    <div className="flex mr-3">
      <p className="font-normal text-base leading-7 px-5 py-2 bg-white rounded-3xl">
        {specialty}
      </p>
    </div>
  );
};

export default Specialty;
