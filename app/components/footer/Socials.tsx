import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";

const Socials = () => {
  return (
    <div className='flex space-x-6 mb-10 justify-center items-center'>
      <Link href="/">
        <Image src={facebook} alt="facebook" width={36} height={36} className='md:w-12 md:h-12' />
      </Link>

      <Link href="/">
        <Image src={linkedIn} alt="linkedIn" width={36} height={36} className='md:w-12 md:h-12' />
      </Link>

      <Link href="/">
        <Image src={twitter} alt="twitter" width={36} height={36} className='md:w-12 md:h-12' />
      </Link>
    </div>
  );
};

export default Socials;
