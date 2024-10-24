import Button from "@/components/atoms/Button";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Test = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="h-[550px] w-[400px]  rounded-lg border px-16 flex-col flex gap-2 items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"> */}
      <div className="h-[550px] w-[400px]  shadow-lg rounded-3xl p-5 border-2 border-white/20  flex flex-col gap-2 items-center justify-center backdrop-filter backdrop-blur-[20px] bg-opacity-5 bg-white transform translate-x-[40%">
        <h1 className=" text-2xl font-semibold mb-3">Welcome to</h1>
        <Button
          variant="primary"
          className="w-full bg-[#8046b6] hover:bg-[#512c74]"
        >
          Continue with email
        </Button>
        <div className="flex items-center gap-3 my-3 w-full">
          <div className="w-full h-px bg-gray-500"></div>
          <p className=" min-w-max text-gray-500">or continue with</p>
          <div className="w-full h-px bg-gray-500"></div>
        </div>
        <Button variant="outline" className="w-full" icon={<FaGithub />}>
          Github
        </Button>
        <Button variant="outline" className="w-full" icon={<FaGoogle />}>
          Google
        </Button>
      </div>
    </div>
  );
};

export default Test;
