"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * This function is the entry point for the client-side rendered page.
 * Given a subdomain from the URL, it fetches the corresponding therapist data
 * from the API and redirects to the "for-therapists" page if the subdomain is
 * empty or if the therapist doesn't exist. Otherwise, it renders a page with a
 * welcome message and the therapist's data.
 *
 * @param {object} params - The parameters passed in from the URL.
 * @returns {JSX.Element|null} The JSX element representing the page, or null if the
 * subdomain is empty or if the therapist doesn't exist.
 */
function MyPage({ params }: { params: any }) {
  console.log(params);
  const [subdomain, setSubdomain] = useState("");
  const router = useRouter();

  /**
   * Fetches the therapist data from the API given a subdomain and redirects to
   * the "for-therapists" page if the subdomain is empty or if the therapist doesn't
   * exist. Otherwise, it sets the user context with the fetched data.
   *
   * @param {string} subdomain - The subdomain to fetch the therapist data for.
   */
  const fetchData = async (subdomain: string) => {
    const response = await fetch(
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`
    );
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
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
        {
          "You are not supposed to be here"
        }
      </main>
    </div>
  );
}

export default MyPage;