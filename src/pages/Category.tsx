import { useLocation, useParams } from "react-router-dom";
import { ComponentMap } from "../constants/reactjs/ComponentMap";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ReactNativeComponentMap } from "@/constants/react-native/ReactNativeComponentMap";

const Category = () => {
  const location = useLocation();
  const selectedOption = location.pathname.split("/")[2];

  const { category, subcategory, instruction } = useParams();

  const getComponent = (map , key) => map[key as keyof typeof map];

  // ReactJS
  const SubcategoryComponent = getComponent(ComponentMap, subcategory);
  const SubcategoryComponent2 = getComponent(ComponentMap, instruction);

  // React Native
  const SubcategoryComponent3 = getComponent(
    ReactNativeComponentMap,
    subcategory
  );
  const SubcategoryComponent4 = getComponent(
    ReactNativeComponentMap,
    instruction
  );

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [category, subcategory, instruction]);

  const renderComponent = (component, title, subtitle) => (
    <div className="flex gap-x-1 justify-start items-center">
      <p className="capitalize text-gray-500 text-sm">{subtitle}</p>
      <ChevronRight className="w-[16px] text-gray-500 text-sm" />
      <p className="capitalize text-sm">{title}</p>
    </div>
  );

  const renderContent = () => {
    if (selectedOption === "react-native") {
      return (
        <>
          {SubcategoryComponent3 && (
            <div>
              {renderComponent(SubcategoryComponent3, subcategory, category)}
              <h1 className="capitalize text-6xl font-black">{subcategory}</h1>
              <SubcategoryComponent3 />
            </div>
          )}
          {SubcategoryComponent4 && (
            <div>
              {renderComponent(SubcategoryComponent4, instruction, "docs")}
              <h1 className="capitalize text-6xl font-black mb-1">
                {instruction}
              </h1>
              <SubcategoryComponent4 />
            </div>
          )}
        </>
      );
    }
    return (
      <>
        {SubcategoryComponent && (
          <div>
            {renderComponent(SubcategoryComponent, subcategory, category)}
            <h1 className="capitalize text-6xl font-black">{subcategory}</h1>
            <SubcategoryComponent />
          </div>
        )}
        {SubcategoryComponent2 && (
          <div>
            {renderComponent(SubcategoryComponent2, instruction, "docs")}
            <h1 className="capitalize text-6xl font-black mb-1">
              {instruction}
            </h1>
            <SubcategoryComponent2 />
          </div>
        )}
      </>
    );
  };

  return (
    <div ref={contentRef} className="mt-5 md:mt-2">
      {renderContent()}
      {(!SubcategoryComponent && !SubcategoryComponent2) ||
        (!SubcategoryComponent3 && !SubcategoryComponent4 && (
          <div className="w-full flex items-center justify-center py-[100px]">
            <p className="text-center">
              This component is work in progress. <br />
              Follow us on{" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-3 underline"
              >
                Twitter
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-3 underline"
              >
                Linkedin
              </a>{" "}
              for regular updates.
            </p>
          </div>
        ))}
    </div>
  );
};

export default Category;
