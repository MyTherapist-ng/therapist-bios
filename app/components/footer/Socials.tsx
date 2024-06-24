import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import Image from "next/image";
import { useUser } from "@/app/context/userContext";

const Socials = () => {
  const { user } = useUser()

  return (
    <div className="flex space-x-6 mb-10 justify-center items-center">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=Checkout ${user?.name} on Mytherapistng https://${user?.username}.therapistfinder.xyz`} target="_blank" className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={facebook}
          alt="facebook"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>

      <a href={`https://www.linkedin.com/feed/?shareActive=true&text=Checkout ${user?.name} on Mytherapist.ng https://${user?.name}.therapistfinder.xyz %23mytherapistng
`} target="_blank" className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={linkedIn}
          alt="LinkedIn Share Icon"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>

      <a href={} target="_blank" className="hover:opacity-50 transition-all cursor-pointer">
        <Image
          src={linkedIn}
          alt="LinkedIn Share Icon"
          width={36}
          height={36}
          className="md:w-12 md:h-12"
        />
      </a>

      <a href={`https://x.com/intent/tweet?url=https://${user?.username}.therapistfinder.xyz&text=Checkout ${user?.name} on Mytherapist.ng`} target="_blank"  className="hover:opacity-50 transition-all cursor-pointer">
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
