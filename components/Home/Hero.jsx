import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-screen px-16 py-24 flex">
      <div className="flex-[3] flex flex-col justify-end items-start">
        <div>
          <h1 className="font-bold font-anim text-8xl">Kamal Kashyap</h1>
          <h2>Creative developer</h2>
        </div>
      </div>
      <div className="flex-[2] flex gap-4 flex-col justify-start items-end">
        <p className="text-justify">
          I am Kamal kashyap, a creative developer with a passion for people and
          establishing meaningful connections. I specialise in crafting digital
          experiences that leave a lasting impact.
        </p>
        <button className="font-semibold text-2xl py-2 px-12 transition-colors duration-500 border-[3px] hover:bg-transparent hover:text-white border-white bg-white text-[#162126] rounded-lg">
          About me
        </button>
      </div>
    </div>
  );
};

export default Hero;
