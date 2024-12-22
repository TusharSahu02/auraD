import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextParallax = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  return (
    <main className="overflow-hidden">
      <div className="h-[100vh]" />

      <div ref={container}>
        <Slide
          src={"https://wallpapercave.com/wp/3i6dLrF.jpg"}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />

        <Slide
          src={"https://wallpapercave.com/wp/3i6dLrF.jpg"}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />

        <Slide
          src={"https://wallpapercave.com/wp/3i6dLrF.jpg"}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>

      <div className="h-[100vh]" />
    </main>
  );
};

export default TextParallax;

const Slide = (props) => {
  const direction = props.direction === "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction],
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"flex items-center gap-5 px-5"}>
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={src} alt="abcs" />
      </span>
    </div>
  );
};

export const TextParallaxPreview = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <video
        src="https://res.cloudinary.com/dnbsn9kwr/video/upload/v1734883703/auraD-UI---Design-Develop-Deploy-_chlbod.webm"
        autoPlay
        muted
        loop
        className="rounded-md"
      />
    </div>
  );
};
