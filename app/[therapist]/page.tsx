import { GetServerSideProps } from "next";
import User from "../components/user/User";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";
import { useUser } from "../context/userContext";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type TherapistProps = {
  therapist: string;
  userData: any;
};

const TherapistPage = ({ therapist, userData }: TherapistProps) => {
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!therapist) {
      router.push("https://mytherapist.ng/for-therapists");
    }
    setUser(userData);
  }, [therapist, userData, router, setUser]);

  if (!therapist) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{`Therapist - ${userData.name}`}</title>
        <meta
          name="description"
          content={`Learn more about therapist ${userData.name}.`}
        />
        <meta
          name="keywords"
          content="therapist, therapy, mental health, counseling"
        />
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
  const { therapist } = context.params!;
  const response = await fetch(
    `https://admin.mytherapist.ng/api/v1/user/therapists/public/${therapist}`
  );

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
      therapist,
      userData,
    },
  };
};

export default TherapistPage;
