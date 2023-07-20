import { Londrina_Outline } from "next/font/google";

const londrina = Londrina_Outline({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <>
      <div className="box h-screen w-screen py-20 px-16 flex justify-center items-center">
        <div className="flex-[3] flex flex-col gap-6">
          <h2>How can i be usefull for your business?</h2>
          <p>
            If innovation and creativity is in your list, I will definitely be
            usefull to you. My strongest suit is the creation of creative
            designs to retain users as well as boost their experience at the
            same time.
          </p>
          <p>
            Creating unique, innovative and creative web app is what separates
            me out from the crowd of front end developers.
          </p>
        </div>
        <div
          className={`text-[70vh] flex justify-end items-center flex-[2] ${londrina.className}`}
        >
          ?
        </div>
      </div>
      <div className="box h-screen w-screen px-16 py-20 grid gap-12 grid-rows-5 grid-cols-6">
        <h2 className="col-span-6 text-center">Why its worth working with me?</h2>
        <div className=" row-span-2 px-6 col-span-3">
          <h3>From scratch</h3>
          <p>
            I develop websites using HTML/CSS/JS, creat-react-app or next.js
            depending upon requirement or user needs.I do everything from from
            scratch which allows me to make the webapp look exactly how you want
            it.
          </p>
        </div>
        <div className=" row-span-2 px-6 col-span-3">
          <h3>Tech</h3>
          <p>
            I works with most loved js library out there(react).Also I'm
            familiar with most of the front-end libraries and framework out of
            the box (from tailwindcss, barba.js to three.js).
          </p>
        </div>
        <div className=" row-span-2 px-6 col-span-3">
          <h3>Trends</h3>
          <p>
            If trendy or bleeding edge is your type. Then I can load your web
            app with all new front end trends whether its page transition,
            liquid scroll or cool looking 3d models.
          </p>
        </div>
        <div className=" row-span-2 px-6 col-span-3">
          <h3>Clients</h3>
          <p>
            I work with individual clients, growing startups, medium businesses
            and everything in between.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
