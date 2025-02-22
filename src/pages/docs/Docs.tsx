import { NavLink, useLocation } from "react-router-dom";

import {
  CATEGORIES,
  GETTING_STARTED,
} from "../../constants/reactjs/CategoryConstant";
import {
  CATEGORIES_REACT_NATIVE,
  GETTING_STARTED_REACT_NATIVE,
} from "@/constants/react-native/CategoryConstant";

import Category from "../Category";
import { useState, useEffect, useRef, memo } from "react";
import { normalizeURL } from "../../utils/util";
import { DocHighlightConstant } from "../../constants/reactjs/DocHighlightConstant";
import { useSelectedOption } from "@/context/SelectedOptionContext";
import Iphone from "@/components/reactjs/atoms/Iphone";
import { InputWithLabel } from "@/components/reactjs/atoms/Input";
import TailwindCSSIndicator from "@/utils/TailwindCSSIndicator";

const Docs = memo(() => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [currentSections, setCurrentSections] = useState<
    { id: string; title: string }[]
  >([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { selectedOption } = useSelectedOption();

  useEffect(() => {
    const path = location.pathname.split("/");
    // const type = path[path.length - 3];
    // const category = path[path.length - 2];
    const componentName = path[path.length - 1];
    const sections =
      DocHighlightConstant[componentName as keyof typeof DocHighlightConstant];
    setCurrentSections(sections || []);

    // Reset active section when changing pages
    setActiveSection(null);
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    for (const section of currentSections) {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentSections]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  // ========================= REACT NATIVE EXPO =========================
  if (selectedOption === "react-native") {
    return (
      <>
        <div className="mt-[60px] flex h-[calc(100vh-60px)] w-full items-center justify-center bg-[#090716]">
          <div className="flex h-full w-full items-center justify-center px-4 xl:container lg:px-0">
            <div className="customScrollBar hidden h-full w-[40%] overflow-y-scroll py-3 pl-6 md:block lg:w-[30%] lg:pl-10 xl:w-[20%]">
              {GETTING_STARTED_REACT_NATIVE.map(
                (category: { name: string; subcategories: string[] }) => {
                  return (
                    <div key={category.name} className="mb-5">
                      <h1 className="text-md mb-3 font-geistSemiBold">
                        {category.name}
                      </h1>
                      <ul className="ml-2 space-y-2">
                        {category.subcategories.map((subcategory: string) => (
                          <li
                            key={subcategory}
                            onClick={() => setActive(!active)}
                            className="w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                setActive(!active);
                              }
                            }}
                          >
                            <NavLink
                              to={`/docs/react-native/${normalizeURL(
                                subcategory.toLowerCase(),
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
                        ))}
                      </ul>
                    </div>
                  );
                },
              )}
              {CATEGORIES_REACT_NATIVE.map(
                (category: { name: string; subcategories: string[] }) => {
                  return (
                    <div key={category.name} className="mb-5">
                      <h1 className="text-md mb-3 font-geistSemiBold">
                        {category.name}
                      </h1>
                      <ul className="ml-2 space-y-2">
                        {category.subcategories.map((subcategory: string) => {
                          return (
                            <li
                              key={subcategory}
                              // onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                              className="w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                            >
                              <NavLink
                                to={`/docs/react-native/${category.name.toLowerCase()}/${normalizeURL(
                                  subcategory.toLowerCase(),
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
                },
              )}
            </div>
            <div className="hideScrollBar h-full w-full overflow-y-scroll md:border-l md:p-4 xl:w-[55%] xl:border-r">
              {/* <Category /> */}
              <Category />
            </div>
            <div className="w-25%] hidden h-full items-center justify-center pl-4 xl:flex">
              {/* iPhone */}
              <Iphone>
                {/* <div /> */}
                <InputWithLabel />
              </Iphone>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ========================= REACT JS =========================
  return (
    <>
      <div className="mt-[60px] flex h-[calc(100vh-60px)] w-full items-center justify-center bg-[#090716]">
        {/* <div className=" h-[calc(100vh-60px)] w-full flex items-center justify-center mt-[55px] relative  bg-red-500 "> */}
        <div className="flex h-full w-full items-center justify-center px-4 xl:container lg:px-10">
          {/* Left aside */}
          <div className="hideScrollBar hidden h-full w-[40%] overflow-y-scroll py-3 pl-6 pt-5 md:block lg:w-[30%] lg:pl-0 xl:w-[20%]">
            {GETTING_STARTED.map(
              (category: { name: string; subcategories: string[] }) => {
                return (
                  <div key={category.name} className="mb-5">
                    <h1 className="text-md mb-3 font-geistSemiBold">
                      {category.name}
                    </h1>
                    <ul className="ml-2 space-y-2">
                      {category.subcategories.map((subcategory: string) => (
                        <li
                          key={subcategory}
                          onClick={() => setActive(!active)}
                          className="w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setActive(!active);
                            }
                          }}
                        >
                          <NavLink
                            to={`/docs/reactjs/${normalizeURL(
                              subcategory.toLowerCase(),
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
                      ))}
                    </ul>
                  </div>
                );
              },
            )}
            {CATEGORIES.map((category) => {
              return (
                <div key={category.name} className="mb-5">
                  <h1 className="text-md mb-3 font-geistSemiBold">
                    {category.name}
                  </h1>
                  <ul className="ml-2 space-y-2">
                    {category.subcategories.map((subcategory) => {
                      return (
                        <li
                          key={subcategory.name}
                          onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                          className="flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setActive(!active);
                            }
                          }}
                        >
                          <NavLink
                            to={`/docs/reactjs/${category.name.toLowerCase()}/${normalizeURL(
                              subcategory.name.toLowerCase(),
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
                            <p className="-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300">
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
          </div>

          {/* Main Content */}
          <div className="hideScrollBar h-full w-full overflow-y-scroll md:border-l md:p-4 xl:w-[70%] xl:border-r">
            <Category />
          </div>

          {/* Right side */}
          <aside className="hidden h-full w-[15%] p-4 xl:block">
            <p className="mb-4 mt-2 font-semibold">On this page</p>
            {currentSections.length > 0 && (
              <ul className="space-y-1">
                {currentSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-sm transition-colors duration-200 ${
                        activeSection === section.id
                          ? "font-medium text-black dark:text-white"
                          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={() => handleSectionClick(section.id)}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>
      <TailwindCSSIndicator />
    </>
  );
});

export default Docs;
