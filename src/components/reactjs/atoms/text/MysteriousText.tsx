import { useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "@/utils/SplitText";

const MysteriousText = () => {
  useEffect(() => {
    const heading = document.querySelector(".heading") as HTMLElement;
    const headingSplitText = new SplitText(heading, { type: "chars" });
    const headingChars = headingSplitText.chars as HTMLElement[];

    gsap.from(headingChars, {
      filter: "blur(0.12em)",
      stagger: {
        from: "start",
        each: 0.1,
      },
      duration: (i) => 1.25 + i * 0.75,
      ease: "power2.inOut",
    });

    gsap.from(headingChars, {
      xPercent: (i) => (i + 1) * 20,
      opacity: 0,
      stagger: {
        from: "start",
        each: 0.1,
      },
      duration: (i) => 1 + i * 0.85,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className=" flex items-center justify-center ">
      <h1
        className="heading dark:text-white text-center uppercase transform origin-center text-3xl font-bold"
        aria-label="nebula"
      >
        AuraD UI
      </h1>
    </div>
  );
};

export default MysteriousText;
