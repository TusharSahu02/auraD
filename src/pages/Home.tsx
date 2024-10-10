import { Link } from "react-router-dom";
import Navbar from "../components/common/Home/Navbar";
import { motion } from "framer-motion";
import Button from "../components/Button";
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl mt-10 font-geistMedium capitalize"
          >
            copy. paste. ship.
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
            <Link to="/docs/components/button">
              <button className="border text-sm font-medium relative border-white/[0.2]  text-white px-4 py-2 rounded-full group">
                <span className="absolute inset-x-0 w-1/2 mx-auto  transition-opacity duration-300  -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100  from-transparent via-blue-500 to-transparent  h-px" />
                <span>Browse Components</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* bento grid components */}
        <motion.div
          className="grid lg:grid-cols-3 grid-cols-1 gap-5 xl:w-[70%] 2xl:w-[60%] mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`border border-white/[0.2] group cursor-pointer ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-2"
              } ${
                index === 3 ? "md:col-span-1" : ""
              } flex items-center justify-start flex-col rounded-lg p-3 space-y-2`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 1.4 + index * 0.2 },
                },
              }}
            >
              <div className="border border-white/[0.1] bg-[#1e1e1e3e] overflow-hidden h-[200px] w-full rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full h-full object-cover rounded-lg group-hover:scale-[102%] transition-all duration-300"
                />
              </div>
              <div className="px-1 group-hover:pl-3 transition-all duration-300">
                <h1 className="text-white">Testing</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  animi in sunt illum quae deleniti omnis voluptatibus dolorum
                  autem eligendi.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      <div className="lg:grid grid-cols-4 hidden  absolute top-[130px] w-full   left-1/2 -translate-x-1/2">
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
      <div className="lg:grid grid-cols-4 hidden  mt-[57px] absolute top-0 w-full  left-1/2 -translate-x-1/2">
        <div className="h-[603px]"></div>
        <div className="col-span-2 rounded-b-3xl  border-l border-r border-white/10 grid grid-cols-8 ">
          <div></div>
          <div className="border-r  border-l border-white/10 col-span-6"></div>
        </div>
        <div className="h-[603px] "></div>
      </div>
    </div>
  );
};

export default Home;
