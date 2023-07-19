import Globe from "@/components/Globe";
import { Canvas } from "@react-three/fiber";
import { Alkatra } from "next/font/google";
import { Hero, About } from "@/components/Home";
import { useWindowScroll, useShallowEffect } from "@mantine/hooks";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

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
      <div className="h-screen w-screen bg-blur fixed top-0 ">
        <Canvas>
          <Globe scroll={scroll.y} />
        </Canvas>
      </div>
      <div
        ref={indexRef}
        className={`absolute top-0 w-screen overflow-x-hidden text-white ${markazi.className}`}
      >
        <Hero />
          <div
            ref={SlidesContainerRef}
            className="flex h-screen w-[200vw]"
          >
            <About />
          </div>
      </div>
    </>
  );
}
