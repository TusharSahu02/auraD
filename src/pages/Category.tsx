import { useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useMemo } from "react";
import { ComponentMap } from "../constants/reactjs/ComponentMap";
import { ChevronRight } from "lucide-react";
import { ReactNativeComponentMap } from "@/constants/react-native/ReactNativeComponentMap";
import { replaceHyphensWithSpaces } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

type ComponentMapType = typeof ComponentMap;
type ReactNativeComponentMapType = typeof ReactNativeComponentMap;

const LazyFallback = () => (
  <div className="py-10 text-center">Loading component...</div>
);

const Category = () => {
  const location = useLocation();
  const selectedOption = useMemo(
    () => location.pathname.split("/")[2],
    [location],
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
    [subcategory],
  );
  const InstructionComponent = useMemo(
    () => getComponent(ComponentMap, instruction),
    [instruction],
  );

  const ReactNativeSubcategoryComponent = useMemo(
    () =>
      getComponent(
        ReactNativeComponentMap,
        subcategory as keyof ReactNativeComponentMapType,
      ),
    [subcategory],
  );
  const ReactNativeInstructionComponent = useMemo(
    () =>
      getComponent(
        ReactNativeComponentMap,
        instruction as keyof ReactNativeComponentMapType,
      ),
    [instruction],
  );

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [category, subcategory, instruction]);

  const generateMetadata = () => {
    const isReactNative = selectedOption === "react-native";
    const baseTitle = isReactNative ? "React Native" : "React.js";
    const baseDescription = `${baseTitle} documentation and guides`;

    let title = `${baseTitle} Documentation`;
    let description = baseDescription;

    // Prioritize instruction over subcategory
    const currentItem = instruction || subcategory;
    if (currentItem) {
      const formattedItem = replaceHyphensWithSpaces(currentItem);
      title = `${formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1)} | ${baseTitle} Documentation`;
      description = `Detailed guide and documentation for ${formattedItem} in ${baseTitle}`;
    }

    return { title, description };
  };

  const renderComponent = (subtitle: string | undefined) => (
    <div className="flex items-center justify-start gap-x-1">
      <p className="text-sm capitalize text-gray-500">{category ?? "Docs"}</p>
      <ChevronRight
        className="w-[16px] text-sm text-gray-500"
        aria-hidden="true"
      />
      <p className="text-sm capitalize">
        {replaceHyphensWithSpaces(subtitle ?? "")}
      </p>
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
      const { title, description } = generateMetadata();
      return (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link
              rel="canonical"
              href={`https://aurad.vercel.app/${location.pathname}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
          </Helmet>
          {SubcategoryToRender && (
            <div>
              {renderComponent(subcategory)}
              <h1 className="text-6xl font-black capitalize">
                {replaceHyphensWithSpaces(subcategory ?? "")}
              </h1>
              <Suspense fallback={<LazyFallback />}>
                <SubcategoryToRender />
              </Suspense>
            </div>
          )}
          {InstructionToRender && (
            <div>
              {renderComponent(instruction)}
              <h1 className="mb-1 text-6xl font-black capitalize">
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
      <div className="flex w-full items-center justify-center py-20">
        <p className="text-center text-gray-600">
          This component is currently under development. Follow us for updates:
          <br />
          <a
            href="https://x.com/auraD_UI"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-3 underline"
            aria-label="Follow us on Twitter"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/aura-desgins"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-3 underline"
            aria-label="Follow us on LinkedIn"
          >
            Github
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/tusharsahu-rghp"
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
