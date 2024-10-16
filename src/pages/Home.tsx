import { Link } from "react-router-dom";
import Navbar from "../components/common/Home/Navbar";
import Bento from "@/components/atoms/Bento";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="bg-[#090716] w-full min-h-screen relative">
      <Navbar />
      <div className=" py-2 px-10 flex items-center flex-col justify-center z-20 ">
        <div className=" flex items-center flex-col justify-center pt-24 text-white ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-x-3"
          >
            <div className="h-[1px] bg-gradient-to-r from-gray-900 to-[#ffffffaa] w-[78px]"></div>
            <h1 className=" font-geistLight text-xl text-gray-400  shiny-text">
              Introducing
            </h1>
            <div className="h-[1px] bg-gradient-to-r from-[#ffffffaa] to-gray-900 w-[78px]"></div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="shiny-text font-geistBlack text-[100px] mt-1"
          >
            auraD
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl mt-10 font-geistMedium capitalize"
          >
            copy. paste. ship.
          </motion.p> */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:text-4xl mt-10 md:text-3xl font-geistMedium capitalize text-2xl text-center"
          >
            Design. Develop. Deploy.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-500 text-center mt-5 lg:w-[35%] xl:w-[45%] md:w-1/2"
          >
            Create stunning React websites in hours, not months, with AuraD UI's
            sleek and animated components. Optimized for speed, simply copy,
            paste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="xl:mt-[85px] z-20  mt-[65px]"
          >
            <Link to="/docs/reactjs/components/button">
              <button className="border text-sm font-medium relative border-white/[0.2]  text-white px-4 py-2 rounded-full group">
                <span className="absolute inset-x-0 w-1/2 mx-auto  transition-opacity duration-300  -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100  from-transparent via-blue-500 to-transparent  h-px" />
                <span>Browse Components</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* bento grid components */}
        <div className=" xl:w-[70%] 2xl:w-[60%] mt-20">
          <Bento />
        </div>

        <motion.div
          className="w-[80%] flex items-center justify-center my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          <Link to="/docs/components/button">
            <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full group">
              <span className="absolute inset-x-0 w-1/2 mx-auto transition-opacity duration-300 -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100 from-transparent via-blue-500 to-transparent h-px" />
              <span>See more</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="text-gray-400 text-center text-sm py-10 w-full "
      >
        All rights reserved © 2024 auraD |
        <span className="ml-1">
          <a
            href="https://github.com/TusharSahu02"
            target="_blank"
            className=" underline text-gray-300 underline-offset-2"
          >
            Tushar Sahu
          </a>
        </span>
      </motion.h1>

      {/* background pattern designs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:grid grid-cols-4 hidden  absolute top-[130px] w-full   left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[80px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-white/10 border-b h-[80px] col-span-2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" border-white/10  h-[80px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-[130px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-[130px] col-span-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-[130px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-60"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-60 col-span-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 h-60"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" border-white/10 h-[80px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-b border-white/10 rounded-3xl h-[80px] col-span-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" border-white/20 h-[80px]"
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="lg:grid grid-cols-4 hidden  mt-[63px] absolute top-0 w-full  left-1/2 -translate-x-1/2"
      >
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.3, delay: 0.2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-2 rounded-b-3xl  border-l border-r border-white/10 grid grid-cols-8 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border-r  border-l border-white/10 col-span-6"
          ></motion.div>
        </motion.div>
        <div className="h-[596px] "></div>
      </motion.div>
    </div>
  );
};

export default Home;
