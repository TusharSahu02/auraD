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
import HomeGridPattern from "@/common/HomeGridPattern";
import ScrollTranslateHome from "@/components/reactjs/atoms/scroll-translate/ScrollTranslateHome";
import { memo } from "react";


const Home = memo(() => {
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
      <div className="relative min-h-screen w-full bg-[#090716]">
        <Navbar />
        <div className="z-20 flex flex-col items-center justify-center py-2 lg:px-10">
          <div className="flex flex-col items-center justify-center px-10 pt-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-x-3"
            >
              <div className="h-[1px] w-[78px] bg-gradient-to-r from-gray-900 to-[#ffffffaa]" />
              <h1 className="shiny-text font-geistLight text-xl text-gray-400">
                Introducing
              </h1>
              <div className="h-[1px] w-[78px] bg-gradient-to-r from-[#ffffffaa] to-gray-900" />
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
              <span className="mt-1 font-geistBlack text-[100px] leading-[135px]">
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
              className="mt-10 text-center font-geistMedium text-2xl capitalize md:text-3xl lg:text-4xl"
            >
              Design. Develop. Deploy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-5 text-center text-gray-500 md:w-1/2 lg:w-[35%] xl:w-[45%]"
            >
              Create stunning React websites in hours, not months, with AuraD
              UI's sleek and animated components. Optimized for speed, simply
              copy, paste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="z-20 mt-[65px] xl:mt-[85px]"
            >
              <Link to="/docs/reactjs/components/button">
                <button
                  type="button"
                  className="group relative rounded-full border border-white/[0.2] px-4 py-2 text-sm font-medium text-white"
                >
                  <span className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span>Browse Components</span>
                  <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/*  PerspectiveGrid  */}
          <div className="mt-20 w-full">
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border-b border-white/5 bg-[#090716] text-base text-white transition-all ease-in",
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
                  <span>Showcase</span>
                </AnimatedShinyText>
              </div>
            </div>
            <ZoomParallax>
              <div className="mt-28 flex items-center justify-center">
                <div className="grid w-full gap-6 px-10 lg:grid-cols-3 xl:w-[70%] 2xl:w-[60%]">
                  {components.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex h-[200px] items-center justify-center rounded-xl border border-white/10 bg-gray-900/20">
                        <div className="absolute z-20">{item?.component}</div>
                      </div>
                      <DotPattern
                        className={cn(
                          "z-10 [mask-image:radial-gradient(135px_circle_at_center,white,transparent)]",
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ZoomParallax>
          </div>

          {/* Scroll Translate GSAP */}
          <div className="mt-[2080px] overflow-x-hidden lg:mt-[800px]">
            <ScrollTranslateHome />
          </div>

          {/* bento grid components */}
          <div className="px-2 xl:w-[70%] 2xl:w-[60%]">
            <Bento />
          </div>

          <motion.div
            className="my-6 flex w-[80%] items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link to="/docs/reactjs/components/button">
              <button
                type="button"
                className="group relative rounded-full border border-white/[0.2] px-4 py-2 text-sm font-medium text-white"
              >
                <span className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span>See more</span>
                <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="hidden pt-10 md:block">
          <TextHoverEffect text="AURAD" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="w-full py-10 text-center text-sm text-gray-400"
        >
          All rights reserved © 2024 auraD |
          <span className="ml-1">
            <a
              href="https://x.com/BuddyHidden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline underline-offset-2"
            >
              Tushar Sahu
            </a>
          </span>
        </motion.h1>

        {/* background pattern designs */}
        <HomeGridPattern />
      </div>
      {/* <TailwindCSSIndicator /> */}
    </>
  );
});

export default Home;
