export const getPerspectiveGridCodeString = () => {
  return `
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const images = [
  "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=640",
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=640",
  "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=640",
  "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?q=80&w=640",
  "https://images.unsplash.com/photo-1527826507412-72e447368aa1?q=80&w=640",
  "https://images.unsplash.com/photo-1483206048520-2321c1a5fb36?q=80&w=640",
  "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=640",
  "https://images.unsplash.com/photo-1531000604546-0f62e21efc55?q=80&w=640",
];

const PerspectiveGrid = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const gridWrap = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP();

  const applyAnimation = contextSafe(() => {
    if (!grid.current || !gridWrap.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".grid_wrap",
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true, // Optional: for debugging
      },
    });

    Object.assign(grid.current.style, {
      perspective: "1300px",
      height: "200%",
      width: "115%",
    });

    Object.assign(gridWrap.current.style, {
      width: "105%",
      gridTemplateColumns: "repeat(6, minmax(4, 1fr))",
    });

    timeline
      .set(".grid_item", {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-4000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: "brightness(0%)",
      })
      .to(
        ".grid_item",
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          filter: "brightness(200%)",
        },
        0
      )
      .to(
        ".grid_wrap",
        {
          z: 6500,
        },
        0
      )
      .fromTo(".grid_item-inner", { scale: 1.5 }, { scale: 0.5 }, 0);
  });

  // useLenis();

  useGSAP(
    () => {
      // Register Scroll Triggren
      gsap.registerPlugin(ScrollTrigger);
      window.scrollTo({ top: 0 });
      applyAnimation();
    },
    { scope: grid.current!, dependencies: [] }
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="z-10 w-full overflow-clip">
        <h1 className="h-[30%] pb-10 pt-20 text-center text-4xl">
          Scroll Down
        </h1>
        <div className="relative w-full py-[20vh]">
          <div
            ref={grid}
            className="grid w-full place-items-center"
            style={{ perspective: "1200px" }}
          >
            <div
              ref={gridWrap}
              style={{ transformStyle: "preserve-3d" }}
              className="grid_wrap grid h-auto w-full grid-cols-4 gap-[2vw]"
            >
              {Array(7)
                .fill(images)
                .flat()
                .map((src, index) => (
                  <div
                    key={index}
                    className="grid_item relative grid aspect-[1.5] h-auto w-full place-items-center overflow-hidden rounded-md"
                  >
                    <img
                      src={src}
                      className="grid_item-inner relative h-auto min-w-[300px] object-cover"
                      alt="perspective_grid_image"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerspectiveGrid;

    `;
};

export const getSmoothScrollCodeString = () => {
  return `
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;

  `;
};

export const getPerspectiveGridImportCodeString = () => {
  return `
import PerspectiveGrid from "@/perspective-grid/PerspectiveGrid";
import SmoothScrolling from "@/utils/SmoothScroll";

const App = () => {
  return (
    <SmoothScrolling>
      <PerspectiveGrid />
      <div className=" flex items-center justify-center">
        <h1 className=" text-center">Your Content Goes Here</h1>
      </div>
    </SmoothScrolling>
  );
};

export default App;
  `;
};
