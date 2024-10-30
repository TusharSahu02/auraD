import LoaderText from "@/components/atoms/text/LoaderText";

const LoaderTextDoc = () => {
  return (
    <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
      <LoaderText />
    </div>
  );
};

export default LoaderTextDoc;
