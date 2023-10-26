import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import Image from "next/image";
import { useUser } from "@/app/context/userContext";

const Socials = () => {
  const { user } = useUser()

  return (
    <div className="flex space-x-6 mb-10 justify-center items-center">
      <a href={user?.linked_url} target="_" className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={facebook}
          alt="facebook"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>

      <a href={user?.linked_url} target="_" className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={linkedIn}
          alt="aedIn"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>

      <a href={user?.linked_url} target="_"  className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={twitter}
          alt="twitter"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>
    </div>
  );
};

export default Socials;
