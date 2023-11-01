import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO: India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/banner1.webp"}
            alt="banner1"
            width={2000}
            height={2000}
            className="h-60 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.webp"}
            alt="banner1"
            width={2000}
            height={2000}
            className="h-30 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
