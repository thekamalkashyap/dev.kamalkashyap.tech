import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Alkatra } from "next/font/google";

const alkatra = Alkatra({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.png" type="image/png" />
        <title>kamal kashyap</title>
      </Head>
      <div className={`text-white ${alkatra.className}`}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
