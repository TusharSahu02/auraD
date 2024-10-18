import { useParams } from "react-router-dom";
import { ComponentMap } from "../constants/templates/ComponentMap";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const TemplateCategory = () => {
  const { category } = useParams();

  const SubcategoryComponent =
    ComponentMap[category as keyof typeof ComponentMap];

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [category]);

  return (
    <div ref={contentRef} className="mt-5 md:mt-2">
      {SubcategoryComponent && (
        <>
          <div className="flex gap-x-1 justify-start items-center">
            <p className="capitalize text-gray-500 text-sm">templates</p>
            <ChevronRight className="w-[16px] text-gray-500 text-sm" />
            <p className=" capitalize text-sm">{category}</p>
          </div>
          <h1 className=" capitalize text-6xl font-black mb-5">{category}</h1>
          <SubcategoryComponent />
        </>
      )}
      {/* {SubcategoryComponent2 && <SubcategoryComponent2 />} */}
      {!SubcategoryComponent && (
        <div className="w-full flex items-center justify-center py-[100px]">
          <p className=" text-center">
            This component is work in progress. <br />
            Follow us on{" "}
            <a
              href="https://x.com/auraD_UI"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline"
            >
              Twitter
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/company/aura-d"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline"
            >
              Linkedin
            </a>{" "}
            for regular updates.
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplateCategory;
