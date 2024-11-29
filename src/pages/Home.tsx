import { Link } from "react-router-dom";
import Navbar from "@/common/Home/Navbar";
import Bento from "@/components/reactjs/atoms/Bento";
import { motion } from "framer-motion";
import ZoomParallax from "@/components/reactjs/atoms/zoom-parallax/ZoomParallax";
import AnimatedShinyText from "@/components/reactjs/atoms/text/AnimatedShinyText";
import { cn } from "@/lib/utils";
import {
  AmoungUsPlayButton,
  BackToTopButtonWithAnimation,
  GoldShineOnHoverAnimButton,
  HoverWithContentSlideOutButton,
  MacBookCommandKeyBoardBtn,
  PremiumUnlockButton,
  RotateOnHoverSocialBtn,
  SaveHoverAnimationButton,
  TelegramButton,
} from "@/components/reactjs/atoms/button/CustomButtons";
import DotPattern from "@/components/reactjs/atoms/pattern/DotPattern";
import { TextHoverEffect } from "@/components/reactjs/atoms/text/TextHoverEffect";
import ScrollTranslateHome from "@/components/reactjs/atoms/scroll-translate/ScrollTranslateHome";
// import TailwindCSSIndicator from "@/utils/TailwindCSSIndicator";
// import PerspectiveGrid from "@/components/reactjs/atoms/perspective-grid/PerspectiveGrid";
const Home = () => {
  const components = [
    { component: <TelegramButton /> },
    { component: <SaveHoverAnimationButton /> },
    { component: <PremiumUnlockButton /> },
    { component: <HoverWithContentSlideOutButton /> },
    { component: <AmoungUsPlayButton /> },
    { component: <GoldShineOnHoverAnimButton /> },
    { component: <BackToTopButtonWithAnimation /> },
    { component: <RotateOnHoverSocialBtn /> },
    { component: <MacBookCommandKeyBoardBtn /> },
  ];

  return (
    <>
      <div className="bg-[#090716] w-full min-h-screen relative overflow-x-hidden">
        <Navbar />
        <div className=" py-2 lg:px-10 flex items-center flex-col justify-center z-20 ">
          <div className=" flex px-10 items-center flex-col justify-center pt-24 text-white ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-x-3"
            >
              <div className="h-[1px] bg-gradient-to-r from-gray-900 to-[#ffffffaa] w-[78px]" />
              <h1 className=" font-geistLight text-xl text-gray-400  shiny-text">
                Introducing
              </h1>
              <div className="h-[1px] bg-gradient-to-r from-[#ffffffaa] to-gray-900 w-[78px]" />
            </motion.div>
            {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="shiny-text font-geistBlack text-[100px] mt-1"
          >
            auraD
          </motion.h1> */}
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
              <span className="font-geistBlack text-[100px] mt-1 leading-[135px]">
                auraD
              </span>
            </AnimatedShinyText>
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
              Create stunning React websites in hours, not months, with AuraD
              UI's sleek and animated components. Optimized for speed, simply
              copy, paste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="xl:mt-[85px] z-20  mt-[65px]"
            >
              <Link to="/docs/reactjs/components/button">
                <button
                  type="button"
                  className="border text-sm font-medium relative border-white/[0.2]  text-white px-4 py-2 rounded-full group"
                >
                  <span className="absolute inset-x-0 w-1/2 mx-auto  transition-opacity duration-300  -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100  from-transparent via-blue-500 to-transparent  h-px" />
                  <span>Browse Components</span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/*  PerspectiveGrid  */}
          <div className=" w-full mt-20 ">
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border-b  text-base text-white transition-all ease-in    border-white/5 bg-[#090716]"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
                  <span>Showcase</span>
                </AnimatedShinyText>
              </div>
            </div>
            <ZoomParallax>
              <div className="flex items-center justify-center mt-28">
                <div className=" xl:w-[70%] 2xl:w-[60%] w-full px-10 grid lg:grid-cols-3 gap-6">
                  {components.map((item, index) => (
                    <div key={index} className="relative ">
                      <div className="h-[200px] bg-gray-900/20 flex items-center justify-center border border-white/10 rounded-xl">
                        <div className="absolute z-20">{item?.component}</div>
                      </div>
                      <DotPattern
                        className={cn(
                          "[mask-image:radial-gradient(135px_circle_at_center,white,transparent)]  z-10 "
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ZoomParallax>
          </div>

          <div className=" lg:mt-[800px] mt-[2080px]">
            <ScrollTranslateHome />
          </div>

          {/* bento grid components */}
          <div className=" xl:w-[70%] 2xl:w-[60%] px-2">
            <Bento />
          </div>

          <motion.div
            className="w-[80%] flex items-center justify-center my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link to="/docs/reactjs/components/button">
              <button
                type="button"
                className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full group"
              >
                <span className="absolute inset-x-0 w-1/2 mx-auto transition-opacity duration-300 -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100 from-transparent via-blue-500 to-transparent h-px" />
                <span>See more</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* auraD text hover */}
        <div className=" pt-10 hidden md:block">
          <TextHoverEffect text="AURAD" />
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
              href="https://x.com/BuddyHidden"
              target="_blank"
              rel="noopener noreferrer"
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
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-[130px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-[130px] col-span-2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-[130px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-60"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-60 col-span-2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 h-60"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" border-white/10 h-[80px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-white/10 rounded-3xl h-[80px] col-span-2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" border-white/20 h-[80px]"
          />
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
          />
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
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-r  border-l border-white/10 col-span-6"
            />
          </motion.div>
          <div className="h-[596px]" />
        </motion.div>
      </div>
      {/* <TailwindCSSIndicator /> */}
    </>
  );
};

export default Home;
