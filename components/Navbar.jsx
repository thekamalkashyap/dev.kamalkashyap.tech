import { useRef } from "react";
import Link from "next/link";
import { Alkatra } from "next/font/google";

const alkatra = Alkatra({
  subsets: ["latin"],
});

const navLinkArr = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Portfolio", url: "/portfolio" },
];

const socialLinkArr = [
  { title: "insta", url: "https://www.instagram.com/kamalkashyap.tech/" },
  { title: "whatsapp", url: "https://wa.me/9805056793" },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/kamal-kashyap-a38040250/",
  },
  { title: "github", url: "https://github.com/thekamalkashyap/" },
];

const Navbar = () => {
  const hamRef = useRef();
  const menuRef = useRef();
  return (
    <header
      className={`flex relative text-white justify-center items-center ${alkatra.className}`}
    >
      <div className=" w-[50vw] h-16 flex justify-between px-6 items-center z-50 border border-[#324a56] fixed top-4 bg-[rgba(42,43,56,.5)] backdrop-blur-md rounded-2xl ">
        <Link className=" font-black text-3xl" href={"/"}>
          kamalkashyap
        </Link>
        <div
          onClick={() => {
            hamRef.current.classList.toggle("is-active");
            menuRef.current.classList.toggle("translate-x-[-100vw]");
          }}
          ref={hamRef}
          id="hamburger-9"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <nav
        ref={menuRef}
        className="h-screen p-20 w-screen grid grid-rows-6 grid-cols-1 fixed top-0 z-20 transition-all duration-500 ease-in-out bg-[#162126] translate-x-[-100vw]"
      >
        <div className="col-span-1 row-span-5 flex justify-center items-center">
          <ul className="text-3xl flex flex-col gap-6 font-bold">
            {navLinkArr.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => {
                    hamRef.current.classList.remove("is-active");
                    menuRef.current.classList.add("translate-x-[-100vw]");
                  }}
                  className="hover:pl-4 p-0 transition-all "
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-span-1 col-span-1 flex justify-start items-center gap-8">
          {socialLinkArr.map((link, index) => (
            <Link key={index} href={link.url}>
              <img src={link.title + ".svg"} alt={link.title} />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
