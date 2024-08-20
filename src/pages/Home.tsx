import { Link } from "react-router-dom";
import Navbar from "../components/common/Home/Navbar";
const Home = () => {
  return (
    <>
      <div className="bg-[#090716] w-full min-h-screen relative">
        <Navbar />
        <div className=" py-2 px-10 flex items-center flex-col justify-center z-20 relative ">
          <div className=" flex items-center flex-col justify-center pt-24 text-white ">
            <div className="flex items-center gap-x-3">
              <div className="h-[1px] bg-gradient-to-r from-gray-900 to-[#ffffffaa] w-[78px]"></div>
              <h1 className=" font-geistLight text-xl text-gray-400  shiny-text">
                Introducing
              </h1>
              <div className="h-[1px] bg-gradient-to-r from-[#ffffffaa] to-gray-900 w-[78px]"></div>
            </div>
            <h1 className="shiny-text font-geistBlack text-[100px] mt-1">
              auraD
            </h1>
            <p className="text-4xl mt-10 font-geistMedium capitalize">
              copy. paste. ship.
            </p>
            <p className="text-gray-500 text-center mt-5 w-[35%]">
              Create stunning React websites in hours, not months, with AuraD
              UI's sleek and animated components. Optimized for speed and SEO,
              simply copy, paste, and customize to deliver a high-performance
              site with ease. 🚀
            </p>

            <Link to="/docs/components/button" className="mt-[85px]">
              <div className="border  border-opacity-10 shiny-text border-white/25 px-4 py-2 rounded-full text-sm">
                Browse Components
              </div>
            </Link>
          </div>

          <div className=" w-[60%] rounded-lg  flex items-center mt-20 flex-col ">
            <h1 className="text-white mb-8">Components</h1>

            <div className="grid grid-cols-3 gap-5 w-[80%]">
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
              <div className="border border-white/10 rounded-xl h-40 cursor-pointer"></div>
            </div>

            <div className="w-[80%] flex items-center justify-center my-6">
              <Link to="/docs/components/button">
                <div className="border  border-opacity-10 shiny-text border-white/25 px-4 py-2 rounded-full text-sm">
                  See more
                </div>
              </Link>
            </div>
            <h1 className="text-gray-400/60 my-10 text-sm">
              &copy; 2024
              <span className="ml-1">
                <Link to={"/about-me"}>Tushar Sahu</Link>
              </span>
              . All rights reserved.
            </h1>
          </div>
        </div>

        {/* background pattern designs */}
        <div className="grid grid-cols-4 absolute top-[130px] w-full  left-1/2 -translate-x-1/2">
          <div className="  h-[80px] "></div>
          <div className="border-t border-white/10 border-b h-[80px] col-span-2"></div>
          <div className=" border-white/10  h-[80px]"></div>
          <div className="border-b border-white/10 h-[130px]"></div>
          <div className="border-b border-white/10 h-[130px] col-span-2"></div>
          <div className="border-b border-white/10 h-[130px]"></div>
          <div className="border-b border-white/10 h-60"></div>
          <div className="border-b border-white/10 h-60 col-span-2"></div>
          <div className="border-b border-white/10 h-60"></div>
          <div className=" border-white/10 h-[80px]"></div>
          <div className="border-b border-white/10 rounded-3xl h-[80px] col-span-2"></div>
          <div className=" border-white/10 h-[80px]"></div>
        </div>
        <div className="grid grid-cols-4  mt-[57px] absolute top-0 w-full  left-1/2 -translate-x-1/2">
          <div className="h-[603px]"></div>
          <div className="col-span-2 rounded-b-3xl  border-l border-r border-white/10 grid grid-cols-8 ">
            <div></div>
            <div className="border-r  border-l border-white/10 col-span-6"></div>
          </div>
          <div className="h-[603px] "></div>
        </div>

        {/* <div className=" radial size-[90vh] rounded-full blur-[100px] opacity-30 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
        {/* 
        <div className="hero__spotlights w-full ">
          <div className="spotlight_spotlight__6lNkv rotate-[15deg] absolute top-[100px] left-1/2 -translate-x-1/2 w-[200px] h-[700px] opacity-60 "></div>
          <div className="spotlight_spotlight__6lNkv -rotate-[15deg] absolute top-[100px] left-1/2 w-[200px] h-[700px] opacity-60 -translate-x-1/2"></div>
          <div className="spotlight_spotlight__6lNkv rotate-0 absolute top-[100px] left-1/2 w-[200px] h-[700px] opacity-60 -translate-x-1/2"></div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
