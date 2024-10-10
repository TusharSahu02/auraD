import { NavLink, useLocation } from "react-router-dom";
import { CATEGORIES, GETTING_STARTED } from "../../constants/CategoryConstant";
import Category from "../Category";
import { useState, useEffect, useRef } from "react";
import { normalizeURL } from "../../utils/util";
import { DocHighlightConstant } from "../../constants/DocHighlightConstant";

const Docs = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [currentSections, setCurrentSections] = useState<{ id: string; title: string }[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);


  useEffect(() => {
    const path = location.pathname.split('/');
    const componentName = path[path.length - 1];
    const sections = DocHighlightConstant[componentName as keyof typeof DocHighlightConstant];
    setCurrentSections(sections || []);


    // Reset active section when changing pages
    setActiveSection(null);
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

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
  return (
    <div className=" h-[calc(100vh-55px)] w-full flex items-center justify-center mt-[55px]  ">
      <div className="xl:container px-4 lg:px-0 flex  items-center justify-center  w-full h-full">
        <div className="xl:w-[20%] lg:w-[30%] lg:pl-10 pl-6 w-[40%] hidden md:block h-full py-3 overflow-y-scroll customScrollBar">
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
                          to={`/docs/${normalizeURL(
                            subcategory.toLowerCase()
                          )}`}
                          className={({ isActive }) =>
                            isActive ? "text-black" : "border-gray-700"
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
                            to={`/docs/${category.name.toLowerCase()}/${normalizeURL(
                              subcategory.toLowerCase()
                            )}`}
                            className={({ isActive }) =>
                              isActive ? "text-black" : "border-gray-700"
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
          <p className="font-semibold mb-4">On this page</p>
          {currentSections.length > 0 && (
            <ul className="space-y-1">
              {currentSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`text-sm transition-colors duration-200 ${activeSection === section.id
                      ? 'text-black font-medium'
                      : 'text-gray-500 hover:text-gray-900'
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
  );
};

export default Docs;
