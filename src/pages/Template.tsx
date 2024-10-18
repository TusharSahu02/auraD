import Tooltip from "@/components/atoms/Tooltip";
import { TEMPLATES_CATEGORIES } from "@/constants/templates/CategoryConstant";
import { normalizeURL } from "@/utils/util";
import { NavLink } from "react-router-dom";
import BugReport from "./docs/BugReport";
import TemplateCategory from "./TemplateCategory";

const Template = () => {
  return (
    <>
      {" "}
      <div className=" h-[calc(100vh-60px)] w-full flex items-center justify-center mt-[60px] relative  ">
        <div className="xl:container px-4 lg:px-0 flex  items-center justify-center  w-full h-full">
          <div className="xl:w-[20%] pt-5 text-white lg:w-[30%] lg:pl-10 pl-6 w-[40%] hidden md:block h-full py-3 overflow-y-scroll customScrollBar">
            {TEMPLATES_CATEGORIES.map(
              (category: { name: string; subcategories: string[] }) => {
                return (
                  <div key={category.name} className="mb-5">
                    <h1 className="text-md font-geistSemiBold mb-3 text-black dark:text-white">
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
                              to={`/${category.name.toLowerCase()}/${normalizeURL(
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
          <div className="xl:w-full w-full md:p-4  h-full md:border-l  overflow-y-scroll hideScrollBar">
            <TemplateCategory />
          </div>
        </div>
      </div>
      <Tooltip>
        <BugReport />
      </Tooltip>
    </>
  );
};

export default Template;
