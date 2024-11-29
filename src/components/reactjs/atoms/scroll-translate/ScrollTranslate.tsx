import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollTranslate = () => {
  useEffect(() => {
    const animationsConfig = [
      {
        leftX: -800,
        rightX: 800,
        leftRotation: -30,
        rightRotation: 30,
        yOffset: 100,
      },
      {
        leftX: -900,
        rightX: 900,
        leftRotation: -20,
        rightRotation: 20,
        yOffset: -150,
      },
      {
        leftX: -400,
        rightX: 400,
        leftRotation: -35,
        rightRotation: 35,
        yOffset: -400,
      },
    ];

    const scrollTriggerBase = {
      trigger: ".main",
      start: "top center",
      end: "150% bottom",
      scrub: true,
    };

    gsap.utils.toArray<HTMLElement>(".row").forEach((row, index) => {
      const cardLeft = row.querySelector<HTMLElement>(".card-left");
      const cardRight = row.querySelector<HTMLElement>(".card-right");
      const { leftX, rightX, leftRotation, rightRotation, yOffset } =
        animationsConfig[index];

      if (cardLeft && cardRight) {
        const updateTransform = (
          progress: number,
          el: HTMLElement,
          x: number,
          y: number,
          rotation: number
        ) => {
          el.style.transform = `translateX(${progress * x}px) translateY(${
            progress * y
          }px) rotate(${progress * rotation}deg)`;
        };

        ScrollTrigger.create({
          ...scrollTriggerBase,
          onUpdate: (self) => {
            const progress = self.progress;
            updateTransform(progress, cardLeft, leftX, yOffset, leftRotation);
            updateTransform(
              progress,
              cardRight,
              rightX,
              yOffset,
              rightRotation
            );
          },
        });
      }
    });

    // Logo Animation
    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Text Animation
    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Cleanup
    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill();
      }
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1575996861161-bd683a0b4b93?q=80&w=640",
    "https://images.unsplash.com/photo-1621776887753-fe3c3239555a?q=80&w=640",
    "https://images.unsplash.com/photo-1620010501690-c28b1673b689?q=80&w=640",
    "https://images.unsplash.com/photo-1654034177579-9bab10f4843f?q=80&w=640",
    "https://images.unsplash.com/photo-1575732905607-3d12d01218bf?q=80&w=640",
    "https://images.unsplash.com/photo-1655628266959-12ec3f839a46?q=80&w=640",
  ];

  const generateRows = () =>
    Array.from({ length: 3 }).map((_, index) => (
      <div
        className="row relative w-[100vw] lg:my-[1em] mb-6 flex justify-center gap-4"
        key={index.toString()}
      >
        {["card-left", "card-right"].map((position, cardIndex) => (
          <div
            key={position}
            className={`${position} card relative w-[40%] h-[250px] lg:h-[360px] rounded-xl overflow-hidden will-change-transform`}
          >
            <img
              src={images[index * 2 + cardIndex]}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    ));

  return (
    <>
      <section className="hero relative w-[100vw] flex items-center justify-center h-[100vh]">
        <div className="img h-[300px] ">
          <img
            src="/aurad.svg"
            alt=""
            className=" h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="main relative w-[100vw] lg:h-[150vh] h-dvh flex-col flex items-center justify-center">
        <div className="main-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="logo size-[150px] border-2 border-white rounded-full overflow-hidden ">
            <img
              src="/aurad.svg"
              alt=""
              className=" h-full w-full object-cover "
            />
          </div>
          <div className="copy my-[2em] flex flex-col justify-center items-center">
            <div className="line relative my-[0.5em] w-max h-7 clip">
              <p className=" relative text-xl translate-y-[30px]">Design.</p>
            </div>
            <div className="line relative my-[0.5em] w-max h-7 clip">
              <p className=" relative text-xl translate-y-[30px]">Develop.</p>
            </div>
            <div className="line relative my-[0.5em] w-max h-7 clip">
              <p className=" relative text-xl translate-y-[30px]">Deploy.</p>
            </div>
          </div>
        </div>

        {generateRows()}
      </section>
      <section className="footer relative w-[100vw] h-[50vh] flex items-center justify-center">
        <a href="https://x.com/BuddyHidden" className=" lg:text-7xl text-white">
          your content goes here
        </a>
      </section>
    </>
  );
};

export default ScrollTranslate;

export const ScrollTranslatePreview = () => {
  return (
    <div className=" w-full h-full overflow-hidden">
      <video
        src="https://res.cloudinary.com/dnbsn9kwr/video/upload/v1732851522/twitter_jnqqdx.mp4"
        autoPlay
        muted
        loop
        className="rounded-md"
      />
    </div>
  );
};
