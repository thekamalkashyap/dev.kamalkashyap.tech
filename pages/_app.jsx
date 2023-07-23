import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Alkatra } from "next/font/google";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const alkatra = Alkatra({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.png" type="image/png" />
        <title>kamal kashyap</title>
      </Head>
      <div style={alkatra.style} className="text-white">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Component {...pageProps} />
        </Suspense>
      </div>
    </>
  );
}
