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
import { useSelectedOption } from "@/context/SelectedOptionContext";
import {
  CATEGORIES_REACT_NATIVE,
  GETTING_STARTED_REACT_NATIVE,
} from "@/constants/react-native/CategoryConstant";

const SidebarMenu = () => {
  // const { setTheme } = useTheme();
  const { selectedOption } = useSelectedOption();

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

      {selectedOption === "react-native" ? (
        <>
          {GETTING_STARTED_REACT_NATIVE.map(
            (category: { name: string; subcategories: string[] }) => {
              return (
                <div key={category.name} className="mb-5">
                  <h1 className="text-md font-geistSemiBold mb-3">
                    {category.name}
                  </h1>
                  <ul className="ml-2 space-y-2">
                    {category.subcategories.map((subcategory: string) => (
                      <li
                        key={subcategory}
                        onClick={() => setActive(!active)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActive(!active);
                          }
                        }}
                        className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                      >
                        <NavLink
                          to={`/docs/react-native/${normalizeURL(
                            subcategory.toLowerCase()
                          )}`}
                          className={({ isActive }) =>
                            isActive
                              ? "dark:text-white text-black"
                              : "border-gray-700"
                          }
                        >
                          {subcategory}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}
          {CATEGORIES_REACT_NATIVE.map(
            (category: { name: string; subcategories: string[] }) => {
              return (
                <div key={category.name} className="mb-5">
                  <h1 className="text-md font-geistSemiBold mb-3">
                    {category.name}
                  </h1>
                  <ul className="ml-2 space-y-2">
                    {category.subcategories.map((subcategory: string) => {
                      return (
                        <li
                          key={subcategory}
                          // onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                          className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                        >
                          <NavLink
                            to={`/docs/react-native/${category.name.toLowerCase()}/${normalizeURL(
                              subcategory.toLowerCase()
                            )}`}
                            className={({ isActive }) =>
                              isActive
                                ? "text-black dark:text-white"
                                : "border-gray-700"
                            }
                          >
                            {subcategory}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          )}
        </>
      ) : (
        <>
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
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActive(!active);
                          }
                        }}
                        className="transition-colors duration-300  text-gray-500 text-sm border-gray-500 w-max"
                      >
                        <NavLink
                          to={`/docs/reactjs/${normalizeURL(
                            subcategory.toLowerCase()
                          )}`}
                          className={({ isActive }) =>
                            isActive
                              ? "dark:text-white text-black"
                              : "border-gray-700"
                          }
                        >
                          <SheetPrimitive.Close>
                            {subcategory}
                          </SheetPrimitive.Close>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}
          {CATEGORIES.map((category) => {
            return (
              <div key={category.name} className="mb-5">
                <h1 className="text-md font-geistSemiBold mb-3">
                  {category.name}
                </h1>
                <ul className="ml-2 space-y-2">
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li
                        key={subcategory.name}
                        onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                        className="transition-colors flex gap-x-3 duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActive(!active);
                          }
                        }}
                      >
                        <NavLink
                          to={`/docs/reactjs/${category.name.toLowerCase()}/${normalizeURL(
                            subcategory.name.toLowerCase()
                          )}`}
                          className={({ isActive }) =>
                            isActive
                              ? "text-black dark:text-white"
                              : "border-gray-700"
                          }
                        >
                          {subcategory.name}
                        </NavLink>
                        {subcategory.isNew && (
                          <p className="bg-green-300/20 border border-green-300 text-green-300 px-3 rounded-md text-xs -py-2 leading-none flex items-center justify-center">
                            new
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </>
      )}

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
                rel="noreferrer"
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
