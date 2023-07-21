import Globe from "@/components/Globe";
import { Canvas } from "@react-three/fiber";
import { Hero, About } from "@/components/Home";
import { useWindowScroll, useShallowEffect } from "@mantine/hooks";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Suspense, useRef } from "react";
import Link from "next/link";

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
      <div className="h-screen w-screen bg-blur fixed top-0 ">
        <Canvas>
          <Suspense fallback={null}>
            <Globe scroll={scroll.y} />
          </Suspense>
        </Canvas>
      </div>
      <div
        ref={indexRef}
        className={`absolute top-0 w-screen overflow-x-hidden`}
      >
        <Hero />
        <div ref={SlidesContainerRef} className="flex h-screen w-[200vw]">
          <About />
        </div>
        <footer className=" h-16 text-center flex justify-center items-center bg-[#162126] w-screen">
          <Link href="/" className="z-10 hover:underline" scroll={false}>
            kamalkashyap.tech
          </Link>{" "}
          &nbsp; - © 2023 Kamal kumar. All rights reserved
        </footer>
      </div>
    </>
  );
}
