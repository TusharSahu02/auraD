import { useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useMemo } from "react";
import { ComponentMap } from "../constants/reactjs/ComponentMap";
import { ChevronRight } from "lucide-react";
import { ReactNativeComponentMap } from "@/constants/react-native/ReactNativeComponentMap";

type ComponentMapType = typeof ComponentMap;
type ReactNativeComponentMapType = typeof ReactNativeComponentMap;

const LazyFallback = () => (
  <div className="text-center py-10">Loading component...</div>
);

const Category = () => {
  const location = useLocation();
  const selectedOption = useMemo(
    () => location.pathname.split("/")[2],
    [location]
  );

  const { category, subcategory, instruction } = useParams<{
    category?: keyof ComponentMapType | keyof ReactNativeComponentMapType;
    subcategory?: keyof ComponentMapType;
    instruction?: keyof ComponentMapType;
  }>();

  // Utility to fetch the correct component based on the map and key
  const getComponent = <T, K extends keyof T>(map: T, key: K | undefined) =>
    key ? map[key] : undefined;

  // Lazy loading components to optimize load time
  const SubcategoryComponent = useMemo(
    () => getComponent(ComponentMap, subcategory),
    [subcategory]
  );
  const InstructionComponent = useMemo(
    () => getComponent(ComponentMap, instruction),
    [instruction]
  );

  const ReactNativeSubcategoryComponent = useMemo(
    () =>
      getComponent(
        ReactNativeComponentMap,
        subcategory as keyof ReactNativeComponentMapType
      ),
    [subcategory]
  );
  const ReactNativeInstructionComponent = useMemo(
    () =>
      getComponent(
        ReactNativeComponentMap,
        instruction as keyof ReactNativeComponentMapType
      ),
    [instruction]
  );

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [category, subcategory, instruction]);

  const renderComponent = (subtitle: string | undefined) => (
    <div className="flex gap-x-1 justify-start items-center">
      <p className="capitalize text-gray-500 text-sm">{category}</p>
      <ChevronRight
        className="w-[16px] text-gray-500 text-sm"
        aria-hidden="true"
      />
      <p className="capitalize text-sm">{subtitle}</p>
    </div>
  );

  const renderContent = () => {
    const isReactNative = selectedOption === "react-native";

    const SubcategoryToRender = isReactNative
      ? ReactNativeSubcategoryComponent
      : SubcategoryComponent;
    const InstructionToRender = isReactNative
      ? ReactNativeInstructionComponent
      : InstructionComponent;

    if (SubcategoryToRender || InstructionToRender) {
      return (
        <>
          {SubcategoryToRender && (
            <div>
              {renderComponent(subcategory)}
              <h1 className="capitalize text-6xl font-black">{subcategory}</h1>
              <Suspense fallback={<LazyFallback />}>
                <SubcategoryToRender />
              </Suspense>
            </div>
          )}
          {InstructionToRender && (
            <div>
              {renderComponent(instruction)}
              <h1 className="capitalize text-6xl font-black mb-1">
                {instruction}
              </h1>
              <Suspense fallback={<LazyFallback />}>
                <InstructionToRender />
              </Suspense>
            </div>
          )}
        </>
      );
    }

    return (
      <div className="w-full flex items-center justify-center py-20">
        <p className="text-center text-gray-600">
          This component is currently under development. Follow us for updates:
          <br />
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-3 underline"
            aria-label="Follow us on Twitter"
          >
            Twitter
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-3 underline"
            aria-label="Follow us on LinkedIn"
          >
            LinkedIn
          </a>
        </p>
      </div>
    );
  };

  return (
    <div ref={contentRef} className="mt-5 md:mt-2" role="main">
      {renderContent()}
    </div>
  );
};

export default Category;
