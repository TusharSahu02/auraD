import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" py-4 px-10 flex items-center justify-center border-b border-white/10 ">
      <div className="w-[1024px] px-16 flex items-center justify-between text-white ">
        
        <h1>auraD</h1>
        <div>Logo</div>
        <div className="flex items-center gap-x-2">
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
