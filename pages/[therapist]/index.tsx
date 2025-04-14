import User from "../../app/components/user/User";
import Info from "../../app/components/info/Info";
import Footer from "../../app/components/footer/Footer";
import { setLocalStorageItem } from "@/app/utils/local-storage/localStorage";
import { STORE_KEYS } from "@/app/configs/store.config";

/**
 * Server-side rendering for a therapist's page.
 *
 * Given a therapist's slug, redirects to the "for-therapists" page if the slug is
 * empty or if the therapist doesn't exist. Otherwise, fetches the therapist's data
 * from the API and returns it as a prop.
 *
 * @param {object} context - The context object containing request information.
 * @param {string} context.params.therapist - The therapist's slug.
 * @returns {object} An object containing the therapist data as a prop, or a redirect instruction.
 */
export async function getServerSideProps(context: any) {
  const { therapist } = context.params;

  if (!therapist) {
    return {
      redirect: {
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(
      `https://admin.mytherapist.ng/api/v1/user/therapists/public/${therapist}`
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log(data)
      return {
        props: {
          therapistData: data,
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

/**
 * Renders a page for a specific therapist using the provided therapist data.
 * If no therapist data is available, renders nothing.
 *
 * @param {Object} props - The properties for the component.
 * @param {Object} props.therapistData - The data for the therapist to be displayed.
 * @returns {JSX.Element|null} The JSX element representing the therapist page, or null if no data is available.
 */
function MyPage({ therapistData }: { therapistData: any }) {
  if (!therapistData) {
    return null;
  }

  setLocalStorageItem(STORE_KEYS.USER, therapistData);

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
