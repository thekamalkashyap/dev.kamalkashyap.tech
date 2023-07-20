import Globe from "@/components/Globe";
import { Canvas } from "@react-three/fiber";
import { Alkatra } from "next/font/google";
import { Hero, About } from "@/components/Home";
import { useWindowScroll, useShallowEffect } from "@mantine/hooks";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Suspense, useRef } from "react";
import Link from "next/link";

const markazi = Alkatra({
  subsets: ["latin"],
});

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();
  gsap.registerPlugin(ScrollTrigger);
  const indexRef = useRef();
  const SlidesContainerRef = useRef();

  useShallowEffect(() => {
    let ctx = gsap.context(() => {
      let cards = gsap.utils.toArray(".box");
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: SlidesContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + SlidesContainerRef.current.offsetWidth,
        },
      });
    }, indexRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div className="h-screen w-screen bg-[#162126] bg-blur fixed top-0 ">
        <Canvas>
          <Suspense fallback={null}>
            <Globe scroll={scroll.y} />
          </Suspense>
        </Canvas>
      </div>
      <div
        ref={indexRef}
        className={`absolute top-0 w-screen overflow-x-hidden text-white ${markazi.className}`}
      >
        <header className="flex justify-center items-center">
          <div className=" w-[50vw] h-16 flex justify-between px-6 items-center z-50 border border-[#324a56] fixed top-4 bg-[rgba(42,43,56,.5)] backdrop-blur-md rounded-2xl ">
            <Link className=" font-black text-3xl" href={"/"}>kamalkashyap</Link>
            <ul></ul>
          </div>
        </header>
        <Hero />
        <div ref={SlidesContainerRef} className="flex h-screen w-[200vw]">
          <About />
        </div>
        <footer className=" h-16 text-center flex justify-center items-center bg-blur bg-[#162126] w-screen">
          <Link href="/" className="z-10 hover:underline" scroll={false}>
            kamalkashyap.tech
          </Link>{" "}
          &nbsp; - © 2023 Kamal kumar. All rights reserved
        </footer>
      </div>
    </>
  );
}
