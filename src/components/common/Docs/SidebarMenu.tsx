import {
  CATEGORIES,
  GETTING_STARTED,
} from "@/constants/reactjs/CategoryConstant";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import * as SheetPrimitive from "@radix-ui/react-dialog";

// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useTheme } from "@/components/common/theme-provider";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { normalizeURL } from "@/utils/util";
import ToogleJsToNative from "../Home/ToogleJsToNative";

const SidebarMenu = () => {
  // const { setTheme } = useTheme();

  const [active, setActive] = useState(false);

  // const theme = localStorage.getItem("aurad-theme");

  return (
    <div className="mt-3 h-full relative">
      {/* <Tabs
        defaultValue={theme ?? ""}
        className="w-full mt-3 mb-6 flex items-center justify-center"
      >
        <TabsList className="w-full flex items-center justify-evenly">
          <TabsTrigger value="light" onClick={() => setTheme("light")}>
            light
          </TabsTrigger>
          <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
            dark
          </TabsTrigger>
          <TabsTrigger value="system" onClick={() => setTheme("system")}>
            system
          </TabsTrigger>
        </TabsList>
      </Tabs> */}
      <SheetPrimitive.Close>
        <ToogleJsToNative active={active} setActive={setActive} />
      </SheetPrimitive.Close>

      {GETTING_STARTED.map(
        (category: { name: string; subcategories: string[] }) => {
          return (
            <div key={category.name} className="mb-3">
              <h1 className="text-md font-geistSemiBold mb-1">
                {category.name}
              </h1>
              <ul className="space-y-1">
                {category.subcategories.map((subcategory: string) => (
                  <li
                    key={subcategory}
                    onClick={() => {
                      setActive(!active);
                    }}
                    className="transition-colors duration-300  text-gray-500 text-sm border-gray-500 w-max"
                  >
                    <NavLink
                      to={`/docs/${normalizeURL(subcategory.toLowerCase())}`}
                      className={({ isActive }) =>
                        isActive
                          ? "dark:text-white text-black"
                          : "border-gray-700"
                      }
                    >
                      <SheetPrimitive.Close>{subcategory}</SheetPrimitive.Close>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}

      {CATEGORIES.map((category: { name: string; subcategories: string[] }) => {
        return (
          <div key={category.name} className="mb-3">
            <h1 className="text-md font-geistSemiBold mb-1">{category.name}</h1>
            <ul className=" space-y-1">
              {category.subcategories.map((subcategory: string) => {
                return (
                  <li
                    key={subcategory}
                    onClick={() => setActive(!active)}
                    className="transition-colors duration-300  text-gray-500 text-sm border-gray-500 w-max"
                  >
                    <NavLink
                      to={`/docs/${category.name.toLowerCase()}/${normalizeURL(
                        subcategory.toLowerCase()
                      )}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black dark:text-white"
                          : "border-gray-700"
                      }
                    >
                      <SheetPrimitive.Close>{subcategory}</SheetPrimitive.Close>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className=" absolute bottom-3 right-0 z-20 w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
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
          <h1 className="dark:text-gray-400">
            made with ❤ by{" "}
            <span className="underline underline-offset-2">
              <a
                href="https://www.linkedin.com/in/tusharsahu-rgh/"
                target="_blank"
              >
                Tushar
              </a>
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
