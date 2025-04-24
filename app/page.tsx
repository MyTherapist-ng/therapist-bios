import { useUser } from "./context/userContext";



function MyPage({ subdomain, userData }: { subdomain: string; userData: any }) {
  /**
   * Renders a page component for a therapist profile.
   *
   * @param {Object} props - An object containing the subdomain and user data.
   * @param {string} props.subdomain - The subdomain for the therapist.
   * @param {any} props.userData - The user data for the therapist.
   *
   * @returns {JSX.Element|Object} A redirect object if no subdomain is provided,
   * otherwise a JSX element representing the page.
   */
  const { setUser } = useUser();

  if (!subdomain) {
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }

  setUser(userData);

  return (
    <div>
      <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
        You are not supposed to be here
      </main>
    </div>
  );
}

/**
 * Fetches data for a therapist given a subdomain and returns a Next.js
 * redirect or props object.
 *
 * @param {Object} context - The context object containing the request.
 *
 * @returns {Object} A redirect object or a props object with the subdomain and
 * user data.
 */
export async function fetchTherapistData(context: any) {
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