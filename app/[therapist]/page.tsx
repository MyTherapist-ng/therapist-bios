"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import User from "../components/user/User";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";
import { useUser } from "../context/userContext";

function MyPage({ params }: { params: any }) {
  const { therapist } = params;
  const router = useRouter();
  const { setUser } = useUser();

  const fetchData = async (subdomain: string) => {
    const response = await fetch(
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${therapist}`
    );
    console.log(response);
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
