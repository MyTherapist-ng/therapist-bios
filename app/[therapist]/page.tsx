"use client";

import { useEffect, use } from "react";
import { useRouter } from "next/navigation";
import User from "../components/user/User";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";
import { useUser } from "../context/userContext";



/**
 * The page for a single therapist's profile.
 *
 * @param {Object} props - An object with a single property, `params`, which is
 * a Promise that resolves with an object containing a single property, `therapist`, which is the subdomain of the therapist's profile.
 *
 * @returns {JSX.Element} A JSX element representing the page.
 */
function MyPage(props: { params: Promise<any> }) {
  const params = use(props.params);
  const { therapist } = params;
  const router = useRouter();
  const { setUser } = useUser();

  const fetchData = async (subdomain: string) => {
    const response = await fetch(
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${therapist}`
    );
    if (response.status === 200) {
      const data = await response.json();
      setUser(data);
    } else {
      router.push("https://mytherapist.ng/for-therapists");
    }
  };

  useEffect(() => {
    if (!therapist) {
      router.push("https://mytherapist.ng/for-therapists");
    } else {
      fetchData(therapist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!therapist) return null;

  return (
    <div>
      <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
        <User />
        <Info />
        <Footer />
      </main>
    </div>
  );
}

export default MyPage;
