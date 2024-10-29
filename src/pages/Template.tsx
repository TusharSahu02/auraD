import ResizeView from "@/components/templates/resize-view";

const Template = () => {
  return (
    <div className="h-full w-full mt-[60px] flex  justify-center ">
      <div className="container max-w-[1400px] px-5">
        <div className="px-5">
          <div className=" my-32">
            <h1 className=" text-5xl font-black">
              Building Blocks for the Web
            </h1>
            <p className="mt-2 text-xl text-gray-500">
              Beautifully designed. Copy and paste into your apps.
            </p>
          </div>
        </div>
        <div className=" pb-20">
          <ResizeView>fewfewfwef</ResizeView>
        </div>
        <div className=" pb-20">
          <ResizeView>fwfwe</ResizeView>
        </div>
      </div>
    </div>
  );
};

export default Template;
