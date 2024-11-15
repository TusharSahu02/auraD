import IncrementDecrementNF from "@/pages/docs/Components/reactjs/number-flow/IncrementDecrementNF";
import IncrementLoaderNF from "@/pages/docs/Components/reactjs/number-flow/IncrementLoaderNF";

const Test = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-screen ">
        <div className="grid grid-cols-2 gap-4">
          <div className=" border h-[200px] w-[400px] rounded-lg flex items-center justify-center">
            <IncrementLoaderNF />
          </div>
          <div className=" border h-[200px] w-[400px] rounded-lg flex items-center justify-center">
            <IncrementDecrementNF />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
