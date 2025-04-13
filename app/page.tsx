"use client";
import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

import { useEffect, useState, use } from "react";
import { useUser } from "./context/userContext";
import { useRouter } from "next/navigation";

/**
 * The page for a given therapist subdomain, which fetches the data for that
 * therapist from the API and displays it. If the subdomain doesn't exist, it
 * redirects to the "for-therapists" page.
 *
 * @param {Object} props
 * @prop {Promise<any>} props.params the subdomain to fetch and display
 */
function MyPage(props: { params: Promise<any> }) {
  const params = use(props.params);
  console.log(params);
  const [subdomain, setSubdomain] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  const fetchData = async (subdomain: string) => {
    const response = await fetch(
  /**
   * Fetches the therapist data for the given subdomain from the API, and
   * updates the user state to that data if the response is successful. If
   * the response is not successful, redirects to the "for-therapists" page.
   *
   * @param {string} subdomain the subdomain to fetch and display
   */
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!subdomain) return null;

  return (
    <div>
      <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
        {/* <User />
        <Info />
        <Footer /> */}
        You are not supposed to be here
      </main>
    </div>
  );
}

export default MyPage;
