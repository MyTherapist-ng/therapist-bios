"use client";
import User from "../app/components/user/User";
import Info from "../app/components/info/Info";
import Footer from "../app/components/footer/Footer";

import { useEffect } from "react";
import { useUser } from "../app/context/userContext";
import { useRouter } from "next/navigation";

/**
 * The page for a given therapist subdomain, which fetches the data for that
 * therapist from the API and displays it. If the subdomain doesn't exist, it
 * redirects to the "for-therapists" page.
 *
 * @param {Object} props
 * @prop {string} subdomain the subdomain to fetch and display
 * @prop {Object|null} therapistData the fetched therapist data
 */
function MyPage({ subdomain, therapistData }: { subdomain: string; therapistData: any | null }) {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    if (therapistData) {
      setUser(therapistData);
    } else {
      router.push("https://mytherapist.ng/for-therapists");
    }
  }, [therapistData, setUser, router]);

  if (!subdomain) return null;

  return (
    <div>
      <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
        {therapistData ? (
          <>
            {/* <User />
            <Info />
            <Footer /> */}
            <h1>Welcome to {subdomain}&apos;s page</h1>
          </>
        ) : (
          "You are not supposed to be here"
        )}
      </main>
    </div>
  );
}

/**
 * Fetches therapist data based on the subdomain from the server-side.
 * If a subdomain exists, it attempts to fetch the data for the respective therapist from the API.
 * If the API call is successful and data is retrieved, it returns the subdomain and therapist data as props.
 * If the API call fails or no subdomain is present, it redirects to the "for-therapists" page.
 *
 * @param {object} context - The context object containing request information.
 * @returns {object} An object containing the therapist data as props or a redirect instruction.
 */
export async function getServerSideProps(context: any) {
  const { req } = context;
  const hostname = req.headers.host || "";
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : null;

  if (!subdomain) {
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`
    );

    if (response.status === 200) {
      const therapistData = await response.json();
      return {
        props: {
          subdomain,
          therapistData,
        },
      };
    } else {
      return {
        redirect: {
          destination: "https://mytherapist.ng/for-therapists",
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching therapist data:", error);
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }
}

export default MyPage;
