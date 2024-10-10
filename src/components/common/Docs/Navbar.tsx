import { Command } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const { pathname } = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [showKbd, setShowKbd] = useState(true);
  const [showSidebar, setShowSideBar] = useState(false);

  useEffect(() => {
    const handleFocusSearch = (event: KeyboardEvent) => {
      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        setShowKbd((prev) => !prev);
        const searchInput =
          document.querySelector<HTMLInputElement>(".searchInput");
        if (searchInput) searchInput.focus();
      }

      if (event.key === "Escape") {
        const searchInput =
          document.querySelector<HTMLInputElement>(".searchInput");
        if (searchInput) searchInput.blur();
        setShowKbd(true);
      }
    };
    window.addEventListener("keydown", handleFocusSearch);
    return () => window.removeEventListener("keydown", handleFocusSearch);
  }, [pathname]);

  if (pathname === "/" || pathname === "/test") return null;

  return (
    <div
      className={
        " flex items-center justify-center py-4 border-b fixed z-10 top-0 w-full backdrop-blur-sm "
      }
    >
      <div className="xl:container flex items-center justify-between w-full px-4 lg:px-10 ">
        <div className="flex gap-x-6 items-center">
          <Link to="/">Logo.</Link>
          <div className="hidden lg:block ml-7">
            <ul className="flex items-center gap-x-6">
              <Link to={"/docs/introduction"}>
                <li className=" text-sm text-gray-500">Docs</li>
              </Link>
              <Link to="/docs/components/button">
                <li className=" text-sm text-gray-500">Components</li>
              </Link>
              <li className=" text-sm text-gray-500">Templates</li>
              <li className=" text-sm text-gray-500">Blocks</li>
              <li className=" text-sm text-gray-500">Examples</li>
              <li className=" text-sm text-gray-500">Pro</li>
            </ul>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-3 hidden">
          <div className=" border bg-gray-100/70 rounded-lg px-3 flex items-center ">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onBlur={() => {
                setSearchInput("");
                setShowKbd(true);
              }}
              className="w-[200px] py-[3px] bg-transparent text-sm focus:outline-none placeholder:text-sm searchInput focus:w-[400px] transition-all duration-300"
            />
            {showKbd && (
              <kbd className="border flex items-center justify-center px-1 text-[10px] gap-1 rounded-lg">
                <Command className="size-[10px] text-gray-500" /> k
              </kbd>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              {/* <Twitter className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" /> */}
              <FaXTwitter className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              {/* <Linkedin className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" /> */}
              <FaLinkedinIn className="size-5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>
        {/* Mobile Menu */}

        <div
          className="lg:hidden"
          onClick={() => {
            setShowSideBar((prev) => !prev);
          }}
        >
          {/* <HamburgerMenu /> */}
          <TbMenuDeep size={26} />
        </div>
        {showSidebar && <SidebarMenu setShowSideBar={setShowSideBar} />}
      </div>
    </div>
  );
};

export default Navbar;
