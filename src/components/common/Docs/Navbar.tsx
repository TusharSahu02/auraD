import { Command } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { ModeToggle } from "../mode-toggle";
import { CATEGORIES } from "@/constants/reactjs/CategoryConstant";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useSelectedOption } from "@/context/SelectedOptionContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [showKbd, setShowKbd] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);
  const navigate = useNavigate();

  const { selectedOption, setSelectedOption } = useSelectedOption();

  // Toggle between react-js and react-native
  const toggleSwitch = () => {
    setSelectedOption(
      selectedOption === "react-js" ? "react-native" : "react-js"
    );
    navigate(
      selectedOption === "react-js"
        ? "/docs/react-native/components/button"
        : "/docs/reactjs/components/button"
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = CATEGORIES.flatMap((category) => {
      const matchingSubcategories = category.subcategories.filter(
        (subcategory) => subcategory.toLowerCase().includes(searchValue)
      );
      return matchingSubcategories.map((subcategory) => ({
        name: category.name,
        subcategories: [subcategory],
      }));
    });
    setFilteredCategories(filtered);
    setSearchInput(searchValue);
  };

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

  useEffect(() => {
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
          <Link to="/" className="w-[70px]">
            <img src="/auratypo.svg" alt="" className="dark:hidden invert" />
            <img src="/auratypo.svg" alt="" className="hidden dark:block" />
          </Link>
          <div className="hidden lg:block ml-7">
            <ul className="flex items-center gap-x-6">
              <Link to={"/docs/reactjs/introduction"}>
                <li className=" text-sm text-gray-500">Docs</li>
              </Link>
              <Link to="/docs/reactjs/components/button">
                <li className=" text-sm text-gray-500">Components</li>
              </Link>
              <Link to={"/templates/landing-pages"}>
                <li className=" text-sm text-gray-500">Templates</li>
              </Link>
              {/*
              <li className=" text-sm text-gray-500">Blocks</li>
              <li className=" text-sm text-gray-500">Examples</li>
              <li className=" text-sm text-gray-500">Pro</li> */}
            </ul>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-3 hidden relative">
          <div className="flex gap-2 text-gray-600 mr-2 text-sm">
            <p>React JS</p>
            <Switch onCheckedChange={toggleSwitch} />
            <p>React Native</p>
          </div>
          <div className=" border dark:bg-gray-400/30 bg-gray-100/70 rounded-lg px-3 flex items-center ">
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
          </div>
          {filteredCategories.length > 0 && searchInput && (
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
          )}

          <div className="flex items-center gap-x-2">
            <a href="https://x.com/auraD_UI" target="_blank" rel="noreferrer">
              <FaXTwitter className="size-5 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white  transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/aura-d"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="size-5 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
            </a>
          </div>
          <ModeToggle />
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
