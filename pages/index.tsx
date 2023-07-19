import Globe from "@/components/Globe";
import { Canvas } from "@react-three/fiber";
import { Alkatra } from "next/font/google";

const markazi = Alkatra({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 bg-[#fddb18]">
        <Canvas>
          <Globe />
        </Canvas>
      </div>
      <div className={`absolute top-0 text-white ${markazi.className}`}>
        <div className=" min-h-screen w-screen py-24 flex">
          <div className="flex-[3] flex flex-col justify-start items-center">
            <div>
              <h1 className="font-bold text-8xl">Kamal Kashyap</h1>
              <h2 className="font-bold text-5xl">Creative developer</h2>
            </div>
          </div>
          <div className="flex-[2] pr-10 flex gap-4 flex-col justify-start items-start">
            <p className=" font-medium text-2xl">
              I am Kamal kashyap, a creative developer with a passion for people
              and establishing meaningful connections. I specialise in crafting
              digital experiences that leave a lasting impact.
            </p>
            <button className="font-semibold text-xl py-2 px-4 transition-colors duration-500 border-[3px] hover:bg-transparent hover:text-white border-white bg-white text-[#fddb18] rounded-lg">
              About me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
