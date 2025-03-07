import { type FC, useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
  children: React.ReactNode;
}

const ZoomParallax: FC<Props> = ({ children, classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      // src: "https://res.cloudinary.com/dnbsn9kwr/video/upload/v1732951960/1_-_Made_with_Clipchamp_iwkkzw.mp4",
      src: "https://wallpapercave.com/wp/3i6dLrF.jpg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
      // isVideo: true,
    },
    {
      src: "https://images.unsplash.com/photo-1561905199-e7adfe8aa7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale2,
      classes:
        "relative lg:top-[-30%] -top-[20%] left-[5%] w-[35%] lg:h-[30%] h-[10%]",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale3,
      classes:
        "relative lg:top-[-29%] -top-[22%] left-[-25%] w-[20%] lg:h-[28%] h-[15%]",
    },
    {
      src: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1575996861161-bd683a0b4b93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative h-[200vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              // style={{ scale: picture.scale }}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              {/* <div className={picture.classes}>
                {picture.isVideo ? (
                  <video
                    src={picture.src}
                    autoPlay
                    muted
                    loop
                    className=" h-full w-full object-cover "
                  />
                ) : (
                  <img
                    src={picture.src}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                )}
              </div> */}
              <div className={classes}>
                <img
                  src={src}
                  // biome-ignore lint/a11y/noRedundantAlt: <explanation>
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="h-[100vh] leading-[0]" />
      {children}
    </section>
  );
};

export default ZoomParallax;

export const ZoomParallaxPreviewModal = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <img
        src="/components/zoom-parallax1.gif"
        alt=""
        className="h-full w-full rounded-md"
      />
    </div>
  );
};
