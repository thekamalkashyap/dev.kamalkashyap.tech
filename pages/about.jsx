import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SpaceBoi from "@/components/SpaceBoi";
import Loader from "../components/Loader";

const about = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="h-screen flex justify-start items-center w-screen bg-black fixed top-0 ">
          <Canvas>
            <SpaceBoi />
          </Canvas>
        </div>
        <div
          className={`absolute top-0 px-20 flex justify-end items-center w-screen overflow-x-hidden`}
        >
          <div className=" h-screen flex flex-col gap-6 justify-center items-center w-1/2 ">
            <p>
              The name is kamal (which is short for kamal kumar or kamal
              kashyap, depending on where you know me from). I am a 19-year-old
              North Indian with a tech sort of background and a lot to say about
              the trends and direction of the scientific world.
            </p>
            <p>
              I'm very dedicated to learn new things and to truly belive that
              you should never stop learning. I enjoy creating different things,
              whether that be websites, application or even non technical stuff
              like paintings and sketches.
            </p>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default about;
