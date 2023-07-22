import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-16 text-center flex justify-center items-center bg-[#162126] w-screen">
      <Link href="/" className="z-10 hover:underline" scroll={false}>
        kamalkashyap.tech
      </Link>{" "}
      &nbsp; - © 2023 Kamal kumar. All rights reserved
    </footer>
  );
};

export default Footer;
