import Image from "next/image";
import React from "react";
import video from "../../assets/video.svg";

const Video = () => {
  return (
    <div className='mt-4 md:mt-[56px]'>
      <Image src={video} alt="video" width={840} height={451} className='rounded-[10px]' />
    </div>
  );
};

export default Video;
