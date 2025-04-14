
import { useEffect } from "react";
import { useUser } from "./context/userContext";
import { useRouter } from "next/router";











/**
 * The page for a single therapist's profile.
 *
 * @param {string} subdomain - The subdomain of the therapist's profile.
 * @param {any} userData - The data of the therapist.
 *
 * @returns {JSX.Element} A JSX element representing the page.
 */
function MyPage({ subdomain, userData }: { subdomain: string; userData: any }) {
  const { setUser } = useUser();

  useEffect(() => {
    if (!subdomain) {
      router.push("https://mytherapist.ng/for-therapists");
    } else {
      setUser(userData);
    }
  }, [subdomain, userData, router, setUser]);

  if (!subdomain) return null;

  return (
    <div>
      <main className="flex flex-col items-center justify-between min-h-screen px-5 md:px-0">
        You are not supposed to be here
      </main>
    </div>
  );
}

  /**
   * A server-side function that fetches data for a therapist's profile from the
   * API and redirects if the subdomain is invalid.
   *
   * @param {any} context - The Next.js context object.
   *
   * @returns {Promise<any>} A Promise that resolves with the props for the page.
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
      const userData = await response.json();
      return {
        props: {
          subdomain,
          userData,
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
    console.error("Error fetching data:", error);
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }
}

export default MyPage;
