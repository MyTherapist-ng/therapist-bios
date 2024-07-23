import { GetServerSideProps } from "next";
import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import { useUser } from "./context/userContext";
import Head from "next/head";

type TherapistProps = {
  subdomain: string;
  userData: any;
};

const MyPage = ({ subdomain, userData }: TherapistProps) => {
  const { setUser } = useUser();

  if (!subdomain) {
    return null;
  }

  setUser(userData);

  return (
    <div>
      <Head>
        <title>{`Therapist - ${userData.name}`}</title>
        <meta name="description" content={`Learn more about therapist ${userData.name}.`} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hostname = context.req.headers.host || "";
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : "";

  if (!subdomain) {
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }

  const response = await fetch(`https://admin.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`);

  if (response.status !== 200) {
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }

  const userData = await response.json();

  return {
    props: {
      subdomain,
      userData,
    },
  };
};

export default MyPage;
