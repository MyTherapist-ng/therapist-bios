import Socials from "./Socials";
import Button from "../reusables/Button";
import { grotesk } from "@/app/utils/font";
import { useUser } from "@/app/context/userContext";

const Footer = () => {
  const { user } = useUser();
  
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
