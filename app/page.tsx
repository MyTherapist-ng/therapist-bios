import { useEffect, useState } from "react";
import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import { useUser } from "./context/userContext";
import Head from "next/head";
import { fetchUserData } from "../lib/fetchUserData";

type TherapistProps = {
  subdomain: string;
  userData: any;
};

const MyPage = ({ subdomain }: TherapistProps) => {
  const { setUser } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(subdomain);
        setUser(data);
        setUserData(data);
      } catch (error) {
        window.location.href = "https://mytherapist.ng/for-therapists";
      }
    };

    fetchData();
  }, [subdomain, setUser]);

  if (!subdomain || !userData) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{` ${userData.name} Therapist on Mytherapist.ng`}</title>
        <meta name="description" content={`Learn more about therapist ${userData.name}. a top counselor in Nigeria`} />
        <meta name="keywords" content="therapist, therapy, mental health, counseling" />
      </Head>
      <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
        <User />
        <Info />
        <Footer />
      </main>
    </div>
  );
};

export default MyPage;
