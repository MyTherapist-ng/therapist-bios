import Footer from "../components/footer/Footer";
import Info from "../components/info/Info";
import User from "../components/user/User";


export default function Home() {
  return (
    <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
      <User />
      <Info />
      <Footer />
    </main>
  );
}
