import { useParams } from "react-router-dom";
import { ComponentMap } from "../constants/ComponentMap";
import { ChevronRight } from "lucide-react";

const Category = () => {
  const { category, subcategory, instruction } = useParams();

  const SubcategoryComponent =
    ComponentMap[subcategory as keyof typeof ComponentMap];
  const SubcategoryComponent2 =
    ComponentMap[instruction as keyof typeof ComponentMap];

  return (
    <div>
      {SubcategoryComponent && (
        <>
          <div className="flex gap-x-1 justify-start items-center">
            <p className="capitalize text-gray-500 text-sm">{category}</p>
            <ChevronRight className="w-[16px] text-gray-500 text-sm" />
            <p className=" capitalize text-sm">{subcategory}</p>
          </div>
          <h1 className=" capitalize text-6xl font-black">{subcategory}</h1>
          <SubcategoryComponent />
        </>
      )}
      {SubcategoryComponent2 && <SubcategoryComponent2 />}
      {!SubcategoryComponent && !SubcategoryComponent2 && (
        <div className="w-full flex items-center justify-center py-[100px]">
          <p className=" text-center">
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
      )}
    </div>
  );
};

export default Category;
