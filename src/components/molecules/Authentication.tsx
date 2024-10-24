import { FaGithub, FaGoogle } from "react-icons/fa6";
import Button from "../atoms/Button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Authentication = () => {
  const [visibleEye, setVisibleEye] = useState(true);
  const [inputVisible, setInputVisible] = useState("password");

  const handleVisibleEye = () => {
    setVisibleEye(!visibleEye);
    if (inputVisible === "password") {
      setInputVisible("text");
    } else {
      setInputVisible("password");
    }
  };

  return (
    <div className=" mt-10">
      {/* Welcome Card */}
      <div className="py-16 border  flex items-center justify-center">
        {/* <div className=" h-[350px]  rounded-md  border "> */}
        <div className="h-[550px] w-[400px]  shadow-lg rounded-3xl py-5 px-12 border-2 border-white/20  flex flex-col gap-2 items-center justify-center backdrop-filter backdrop-blur-[20px] bg-opacity-5 bg-white transform ">
          <h1 className=" text-2xl font-semibold mb-3">Welcome to</h1>
          <Button
            variant="primary"
            className="w-full bg-[#8046b6] hover:bg-[#512c74] py-3"
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

      {/* Login Form */}
      <div className="py-16 border  flex items-center justify-center">
        <div className="h-[550px] w-[400px]  shadow-lg rounded-3xl py-5 px-12 border-2 border-white/20  flex flex-col gap-2 items-center justify-center backdrop-filter backdrop-blur-[20px] bg-opacity-5 bg-white transform ">
          <h1 className=" text-2xl font-semibold mb-3">Log in</h1>
          <input
            type="text"
            className=" bg-transparent px-4 py-2 border border-white/20 rounded-md w-full"
            placeholder="Phone, email or username"
          />
          <div className="flex items-center justify-center px-2  border border-white/20 focus-within:outline-1 focus-within:outline rounded-md w-full">
            <input
              type={inputVisible}
              className=" bg-transparent px-2 py-2 focus:outline-none w-full"
              placeholder="Password"
            />
            {visibleEye ? (
              <Eye onClick={handleVisibleEye} className=" cursor-pointer" />
            ) : (
              <EyeOff onClick={handleVisibleEye} className=" cursor-pointer" />
            )}
          </div>
          <Button
            variant="primary"
            className="w-full bg-[#8046b6] hover:bg-[#512c74] my-3 py-3"
          >
            Log in
          </Button>
          <p>
            Don't have an account?{" "}
            <span className="text-[#925cbe] cursor-pointer">Signup</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
