import { Github } from "lucide-react";
import { useState } from "react";
// import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
// import { ModeToggle } from "../mode-toggle";
// import { CATEGORIES } from "@/constants/reactjs/CategoryConstant";
// import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSelectedOption } from "@/context/SelectedOptionContext";
import { FaXTwitter } from "react-icons/fa6";
import ToogleJsToNative from "../Home/ToogleJsToNative";

const Navbar = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  // const [searchInput, setSearchInput] = useState("");
  // const [showKbd, setShowKbd] = useState(true);
  // const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);
  const [active, setActive] = useState(false);

  const { selectedOption } = useSelectedOption();

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchValue = e.target.value.toLowerCase();
  //   const filtered = CATEGORIES.flatMap((category) => {
  //     const matchingSubcategories = category.subcategories.filter(
  //       (subcategory) => subcategory.toLowerCase().includes(searchValue)
  //     );
  //     return matchingSubcategories.map((subcategory) => ({
  //       name: category.name,
  //       subcategories: [subcategory],
  //     }));
  //   });
  //   setFilteredCategories(filtered);
  //   setSearchInput(searchValue);
  // };

  // const handleFocusSearch = (event: KeyboardEvent) => {
  //   if (event.key === "k" && event.ctrlKey) {
  //     event.preventDefault();
  //     setShowKbd((prev) => !prev);
  //     const searchInput =
  //       document.querySelector<HTMLInputElement>(".searchInput");
  //     if (searchInput) searchInput.focus();
  //   }

  //   if (event.key === "Escape") {
  //     const searchInput =
  //       document.querySelector<HTMLInputElement>(".searchInput");
  //     if (searchInput) searchInput.blur();
  //     setShowKbd(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleFocusSearch);
  //   return () => window.removeEventListener("keydown", handleFocusSearch);
  // }, [pathname]);

  if (pathname === "/" || pathname === "/test") return null;

  // TODO : make the navbar tab highlighed based on the links active

  return (
    <div
      className={
        " flex items-center justify-center py-4 md:py-0 border-b fixed z-10 top-0 w-full backdrop-blur-sm "
      }
    >
      <div className="xl:container flex items-center justify-between w-full px-4 lg:px-10 ">
        <div className="flex gap-x-6 items-center">
          <Link to="/" className="w-[70px]">
            <img src="/auratypo.svg" alt="" className="dark:hidden invert" />
            <img src="/auratypo.svg" alt="" className="hidden dark:block" />
          </Link>
          <div className="hidden lg:block ml-7">
            <ul className="flex items-center gap-x-6">
              <Link
                to={`/docs/${
                  selectedOption === "react-js" ? "reactjs" : "react-native"
                }/introduction`}
                className={
                  location.pathname.includes(
                    selectedOption === "react-js"
                      ? "docs/reactjs"
                      : "docs/react-native"
                  ) && !location.pathname.includes("/components")
                    ? "text-sm text-white"
                    : "text-sm text-white"
                }
              >
                <li>Docs</li>
              </Link>
              <Link
                to={`/docs/${
                  selectedOption === "react-js" ? "reactjs" : "react-native"
                }/components/button`}
                className={
                  location.pathname.includes(
                    selectedOption === "react-js"
                      ? "docs/reactjs/components"
                      : "docs/react-native/components"
                  )
                    ? "text-sm text-white"
                    : "text-sm text-white"
                }
              >
                <li>Components</li>
              </Link>
              {/* <Link
                to={"/templates/landing"}
                className={
                  location.pathname.includes("/templates")
                    ? "text-sm text-white"
                    : "text-sm text-white"
                }
              >
                <li>Templates</li>
              </Link> */}
            </ul>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-3 hidden relative">
          <ToogleJsToNative active={active} setActive={setActive} />

          {/* <div className=" border dark:bg-gray-400/30 bg-gray-100/70 rounded-lg px-3 flex items-center ">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearch}
              onBlur={(e) => {
                if (
                  !e.relatedTarget ||
                  !e.relatedTarget.classList.contains("filtered-categories")
                ) {
                  setSearchInput("");
                  setShowKbd(true);
                }
              }}
              className="w-[200px] py-[3px] bg-transparent text-sm focus:outline-none placeholder:text-sm searchInput focus:w-[400px] transition-all duration-300"
            />
            {showKbd && (
              <kbd className="border flex items-center justify-center px-1 text-[10px] gap-1 rounded-lg">
                <Command className="size-[10px] text-gray-500" /> k
              </kbd>
            )}
          </div> */}
          {/* {filteredCategories.length > 0 && searchInput && (
            <Link
              to={`/docs/${filteredCategories[0].name.toLowerCase()}/${filteredCategories[0].subcategories[0].toLowerCase()}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: "20%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "30%" }}
                transition={{ duration: 0.5 }}
                className="absolute w-[500px]  bg-white dark:bg-gray-800 right-[106px] top-[40px] p-2 rounded-lg filtered-categories"
              >
                {filteredCategories.map((category, index) => (
                  <div key={category.name + index}>
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={subcategory}
                        className="dark:bg-gray-400/30 mb-3 p-2 w-full rounded-md cursor-pointer"
                      >
                        <h2 className="text-lg font-bold">{category.name}</h2>
                        <ul>
                          <li>{subcategory}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </Link>
          )} */}

          <div className="flex items-center gap-x-2">
            <a href="https://x.com/auraD_UI" target="_blank" rel="noreferrer">
              <FaXTwitter className="size-5 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white  transition-colors duration-300" />
            </a>
            {/* <a
              href="https://www.linkedin.com/company/aura-d"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="size-5 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
            </a> */}
            <a
              href="https://github.com/aura-desgins"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-5 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
            </a>
          </div>
          {/* <ModeToggle /> */}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <TbMenuDeep size={26} />
          </SheetTrigger>
          <SheetContent>
            <SidebarMenu />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
