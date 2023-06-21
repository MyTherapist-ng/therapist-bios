import Socials from "./Socials";
import Button from "../reusables/Button";

const Footer = () => {
  return (
    <div className='w-full mx-5'>
      <div className="bg-footer mx-5 md:w-4/5 h-[248px] md:h-[403px] rounded-lg justify-self-center flex flex-col items-center justify-center bg-no-repeat bg-center bg-[#1AB265] my-8 md:my-12">
        <h1 className="font-semibold text-2xl md:text-[40px] leading-10 text-[#f5f6ff]">
          Ready to take action?
        </h1>
        <p className="font-semibold text-base md:text-xl text-[#f5f6ff] mt-4 mb-8">
          Book me for N5,000/hr
        </p>
        <Button color="#1B1D3E" />
      </div>
      <Socials />
    </div>
  );
};

export default Footer;
