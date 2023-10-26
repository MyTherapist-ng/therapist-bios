"use client";
import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

import { useEffect, useState } from "react";
import { useUser } from "./context/userContext";
import { useRouter } from "next/navigation";

function MyPage() {
  const [subdomain, setSubdomain] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  const fetchData = async (subdomain: string) => {
    const response = await fetch(
      `https://be-staging.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`
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
    // Extract the subdomain from the client-side window.location
    const parts = window.location.hostname.split(".");
    const subdomain = parts[parts.length - 2];
    if (!subdomain) {
      router.push("https://mytherapist.ng/for-therapists");
    } else {
      setSubdomain(subdomain);
      fetchData(subdomain);
    }
  }, []);

  if (!subdomain) return null;

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
