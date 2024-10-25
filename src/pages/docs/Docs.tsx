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
import { useState, useEffect, useRef } from "react";
import { normalizeURL } from "../../utils/util";
import { DocHighlightConstant } from "../../constants/reactjs/DocHighlightConstant";
import { useSelectedOption } from "@/context/SelectedOptionContext";

const Docs = () => {
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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    currentSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

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
        <div className="h-[calc(100vh-60px)] w-full flex items-center justify-center mt-[60px] ">
          <div className="xl:container px-4 lg:px-0 flex  items-center justify-center  w-full h-full">
            <div className="xl:w-[20%] mt-5 lg:w-[30%] lg:pl-10 pl-6 w-[40%] hidden md:block h-full py-3 overflow-y-scroll customScrollBar">
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
            </div>
            <div className="xl:w-[55%] w-full md:p-4  h-full md:border-l xl:border-r overflow-y-scroll hideScrollBar">
              {/* <Category /> */}
              <p className="text-center mt-5">comming soon...</p>
            </div>
            <div className="w-[20%] h-full hidden p-4 xl:block">
              <p className="font-semibold mb-4 mt-2">On this page</p>

              {/* iPhone */}

              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white/20">
                  <div className="mt-5">
                    <h1>Heading</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ========================= REACT JS =========================
  return (
    <>
      <div className="h-[calc(100vh-60px)] w-full flex items-center justify-center mt-[60px] ">
        {/* <div className=" h-[calc(100vh-60px)] w-full flex items-center justify-center mt-[55px] relative  bg-red-500 "> */}
        <div className="xl:container px-4 lg:px-0 flex  items-center justify-center  w-full h-full">
          <div className="xl:w-[20%] pt-5 lg:w-[30%] lg:pl-10 pl-6 w-[40%] hidden md:block h-full py-3 overflow-y-scroll customScrollBar">
            {GETTING_STARTED.map(
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
                          className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
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
                            {subcategory}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
            {CATEGORIES.map(
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
                            onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                            className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                          >
                            <NavLink
                              to={`/docs/reactjs/${category.name.toLowerCase()}/${normalizeURL(
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
          </div>
          <div className="xl:w-[55%] w-full md:p-4  h-full md:border-l xl:border-r overflow-y-scroll hideScrollBar">
            <Category />
          </div>
          <div className="w-[20%] h-full hidden p-4 xl:block">
            <p className="font-semibold mb-4 mt-2">On this page</p>
            {currentSections.length > 0 && (
              <ul className="space-y-1">
                {currentSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-sm transition-colors duration-200 ${
                        activeSection === section.id
                          ? "text-black dark:text-white font-medium"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
