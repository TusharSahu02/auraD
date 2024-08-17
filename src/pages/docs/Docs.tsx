import { NavLink } from "react-router-dom";
import { CATEGORIES, GETTING_STARTED } from "../../constants/CategoryConstant";
import Category from "../Category";
import { useState } from "react";

const Docs = () => {
  const [active, setActive] = useState(false);
  return (
    <div className=" h-[calc(100vh-55px)] w-full flex items-center justify-center mt-[55px] ">
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
                        onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                        className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                      >
                        <NavLink
                          to={`/docs/${subcategory.toLowerCase()}`}
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
                    {/* {category.subcategories.map((subcategory: string) => {
                      return (
                        <li
                          key={subcategory}
                          onClick={() => setActive(!active)}
                          className={`hover:border-l-2 w-max border-gray-600 transition-colors duration-300 px-3
                          ${active && "border-l-2"}
                          `}
                        >
                          <Link
                            to={`/docs/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                          >
                            {subcategory}
                          </Link>
                        </li>
                      );
                    })} */}
                    {category.subcategories.map((subcategory: string) => {
                      return (
                        <li
                          key={subcategory}
                          onClick={() => setActive(!active)} // Keep this if you're using the active state elsewhere.
                          className="transition-colors duration-300 px-3 text-gray-500 text-sm hover:border-l-2 border-gray-500 w-max"
                        >
                          <NavLink
                            to={`/docs/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
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
        <div className="w-[20%] h-full hidden p-4 xl:block ">
          <p>on this page</p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
