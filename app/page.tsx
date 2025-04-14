import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

import { useEffect } from "react";
import { useUser } from "./context/userContext";
import { useRouter } from "next/router";

function MyPage({ subdomain, userData }: { subdomain: string; userData: any }) {
  const router = useRouter();
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
        {/* Uncomment these components if needed */}
        {/* <User />
        <Info />
        <Footer /> */}
        You are not supposed to be here
      </main>
    </div>
  );
}

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
