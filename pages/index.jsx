import Globe from "@/components/Globe";
import { Canvas } from "@react-three/fiber";
import { Hero, About, Footer } from "@/components/Home";
import { useWindowScroll, useShallowEffect } from "@mantine/hooks";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useDraw } from "@/utils/useDraw";
import { useElementSize } from "@mantine/hooks";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [scroll, scrollTo] = useWindowScroll();
  const SlidesContainerRef = useRef();
  const { ref, width, height } = useElementSize();
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  // drawing canvas logic
  function drawLine({ prevPoint, currentPoint, ctx }) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = "#0091f7";
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  // horizontal scroll logic
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
          end: () => "+=" + SlidesContainerRef.current?.offsetWidth,
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* background */}
      <div className="h-screen w-screen bg-blur fixed top-0">
        <Canvas>
          <Globe scroll={scroll.y} />
        </Canvas>
      </div>
      {/* drawing area  */}
      <div>
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          width={width}
          height={height}
          className="absolute cursor-pen top-0 z-10"
        />
        <img
          onClick={clear}
          className="fixed top-6 right-6 z-50 cursor-pointer"
          src="/erase.svg"
          alt="erase"
        />
      </div>
      {/* main content  */}
      <div
        ref={ref}
        className={`absolute scroll-smooth top-0 w-screen overflow-hidden`}
      >
        <Hero />
        <div ref={SlidesContainerRef} className="flex h-screen w-[200vw]">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
