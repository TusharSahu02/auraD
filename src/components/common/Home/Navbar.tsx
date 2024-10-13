import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" py-4 lg:px-10 px-4 flex items-center justify-center border-b border-white/10  bg-[#090716]">
      <div
        className={`w-[1024px] lg:px-16 flex items-center lg:justify-between justify-center text-white`}
      >
        <h1 className="hidden lg:block w-[80px]">
          <img src="/auratypo.svg" alt="" />
        </h1>
        <div className="w-[30px]">
          <img src="/aurad.svg" alt="" />
        </div>
        <div className="lg:flex hidden items-center gap-x-3">
          <a href="https://x.com/auraD_UI" target="_blank" rel="noreferrer">
            <FaXTwitter className="size-5 cursor-pointer text-gray-500 hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/company/aura-d"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="size-5 cursor-pointer text-gray-500 hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
