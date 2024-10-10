// import { useEffect, useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" py-4 lg:px-10 px-4 flex items-center justify-center border-b border-white/10  bg-[#090716]">
      <div
        className={`w-[1024px] lg:px-16 flex items-center lg:justify-between justify-center text-white`}
      >
        <h1 className="hidden lg:block">auraD</h1>
        <div>Logo</div>
        <div className="lg:flex hidden items-center gap-x-3">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            {/* <Twitter className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" /> */}
            <FaXTwitter className="size-5 cursor-pointer text-gray-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            {/* <Linkedin className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" /> */}
            <FaLinkedinIn className="size-5 cursor-pointer text-gray-500 hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
