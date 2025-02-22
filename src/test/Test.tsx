import Bento from "@/components/reactjs/atoms/Bento";
import SmoothScrolling from "@/utils/SmoothScroll";
import TailwindCSSIndicator from "@/utils/TailwindCSSIndicator";
// import "./test.css";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
// import TextParallax from "@/components/reactjs/atoms/text-parallax/TextParallax";

import { Pane } from "tweakpane";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface Config {
  text: string;
  theme: "system" | "light" | "dark";
  hue: number;
  saturation: number;
  lightness: number;
  speed: number;
}
const Test: React.FC = () => {
  const [config, setConfig] = useState<Config>({
    text: "Design is not just what it looks like and feels like. Design is how it works. People think design is this veneer—like frosting on a cake – Steve Jobs",
    theme: "system",
    hue: 320,
    saturation: 100,
    lightness: 50,
    speed: 0.8,
  });

  const updateStyles = () => {
    document.documentElement.style.setProperty(
      "--text-length",
      `${config.text.length + 1}`,
    );
    document.documentElement.style.setProperty("--cursor-hue", `${config.hue}`);
    document.documentElement.style.setProperty(
      "--cursor-blink",
      `${config.speed}`,
    );
    document.documentElement.style.setProperty(
      "--cursor-saturation",
      `${config.saturation}`,
    );
    document.documentElement.style.setProperty(
      "--cursor-lightness",
      `${config.lightness}`,
    );
    document.documentElement.dataset.theme = config.theme;
  };

  useEffect(() => {
    const pane = new Pane();
    pane.addBinding(config, "hue", { min: 0, max: 359, step: 1 });
    pane.addBinding(config, "saturation", { min: 0, max: 100, step: 1 });
    pane.addBinding(config, "lightness", { min: 0, max: 100, step: 1 });
    pane.addBinding(config, "speed", { min: 0.1, max: 2, step: 0.1 });
    pane.addBinding(config, "text");

    pane.on("change", ({ updatedConfig }: { updatedConfig: Config }) => {
      setConfig((prev) => ({ ...prev, ...updatedConfig }));
    });

    return () => pane.dispose();
  }, [config]);

  useEffect(() => {
    updateStyles();
  }, [config]);

  return (
    <SmoothScrolling>
      {/* <TestComponent />
      <div className="container mx-auto h-[100vh] pt-64 text-center text-6xl">
        yo man! another component starts here
      </div> */}
      {/* <TextParallax /> */}
      {/* <div className="bg-gray-50 font-mono text-gray-800 dark:bg-black dark:text-gray-200">
        <header className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl uppercase">Scroll to type</h1>
        </header>
        <main>
          <section className="sticky top-0 flex min-h-screen items-center justify-center">
            <blockquote>
              <h2 className="text-2xl tracking-wide">
                <span style={{ whiteSpace: "break-spaces" }}>
                  {config.text}
                </span>
              </h2>
            </blockquote>
          </section>
          <section className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
            <p className="text-lg">
              <a
                href="https://craftofui.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Follow along
              </a>
            </p>
            <hr className="w-full max-w-sm border-gray-500" />
            <p>The Craft of UI</p>
          </section>
        </main>
        <footer className="py-4 text-center text-sm text-gray-500">
          ʕ •ᴥ•ʔ &copy; @jh3yy 2024
        </footer>
      </div> */}
      <Bento />
      <TailwindCSSIndicator />
    </SmoothScrolling>
  );
};

export default Test;

// const TestComponent = () => {
//   const gsapRef = useRef();

//   useGSAP(
//     () => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".part-7",
//           start: "50% 50%",
//           end: "300% 50%",
//           pin: true,
//           scrub: 1,
//         },
//       });

//       timeline
//         .to(
//           ".our-work-txt-div",
//           {
//             height: "60vh",
//           },
//           "height",
//         )
//         .to(
//           ".our-work-txt",
//           {
//             height: "60vh",
//           },
//           "height",
//         )
//         .to(
//           ".our",
//           {
//             left: "0%",
//           },
//           "height",
//         )
//         .to(
//           ".work",
//           {
//             right: "0%",
//           },
//           "height",
//         )
//         .to(".scroll-img", {
//           marginTop: "-300%",
//         });
//     },
//     {
//       scope: gsapRef,
//     },
//   );
//   return (
//     <div ref={gsapRef}>
//       <div className="part-7">
//         <div className="our-work-txt">
//           <div className="our">My</div>
//           <div className="work">Works</div>
//         </div>
//         <div className="our-work-txt-div">
//           <div className="scroll-work">
//             <div className="scroll-img">
//               <div className="flex h-[420vh] flex-col items-center justify-between bg-yellow-500 p-10">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Dolorum consequuntur dolore officiis distinctio explicabo
//                   inventore omnis ab id nostrum, non dignissimos, labore
//                   voluptates sit, officia deserunt odio facilis pariatur?
//                   Similique, commodi. Quam blanditiis ratione itaque quo
//                   cupiditate cum, ab incidunt, voluptatibus modi vitae ad.
//                   Nesciunt, cupiditate laboriosam! Dolor atque harum amet ex
//                   itaque veniam tempore magnam in facilis magni aliquid adipisci
//                   alias natus porro rem dolorum laborum saepe quis
//                   necessitatibus quisquam, consequuntur sed! At nemo suscipit
//                   laudantium ipsam saepe fugit quasi. Porro, illum accusantium
//                   in eos temporibus distinctio minima! Voluptatem nobis
//                   voluptatum recusandae iste consequuntur incidunt, ipsa quasi
//                   animi similique asperiores dolor vel ipsam beatae repellendus
//                   mollitia amet veniam sint, commodi necessitatibus eveniet
//                   cupiditate quaerat repellat! Est veritatis distinctio ipsum
//                   accusantium, quasi voluptas quaerat assumenda itaque autem
//                   nihil eveniet facilis perferendis vero ullam voluptatibus!
//                   Molestias minima omnis illum ipsam dolores distinctio quo
//                   deleniti facere repellat assumenda, itaque architecto cumque
//                   dolorem maxime iusto libero ipsum eos, sint ut harum nesciunt.
//                   Debitis maiores laboriosam dolorum adipisci architecto.
//                   Perferendis corporis natus blanditiis ducimus neque quos
//                   sapiente eum temporibus vitae quas dolorem molestias officia
//                   maxime impedit voluptas totam eos, iste libero? Delectus
//                   doloribus harum ipsum nisi quae! Iste voluptatum, ut tempora
//                   magni autem pariatur quisquam nihil alias ea rerum, fugit
//                   deserunt quos labore exercitationem, quibusdam deleniti
//                   necessitatibus officia! Magnam, quae, laudantium laboriosam
//                   labore iure earum sit cupiditate fugiat quis, beatae adipisci?
//                   Quo a fuga repudiandae. Nihil atque saepe distinctio,
//                   consectetur ratione enim assumenda ut quam animi ullam
//                   reiciendis repellat incidunt fugit obcaecati quas! Excepturi,
//                   iste. Porro ab reprehenderit dolores vero assumenda quam
//                   veniam cum? Illum placeat earum saepe, dignissimos officiis
//                   magni hic possimus deleniti consectetur error incidunt dolorum
//                   molestiae sequi sit cupiditate accusamus quos, deserunt
//                   repudiandae est rerum nam optio. Eligendi alias asperiores
//                   laborum distinctio rem modi exercitationem debitis, nobis
//                   veritatis beatae minus quidem?
//                 </p>
//                 <h1 className="text-7xl">Content goes here</h1>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Dolorum consequuntur dolore officiis distinctio explicabo
//                   inventore omnis ab id nostrum, non dignissimos, labore
//                   voluptates sit, officia deserunt odio facilis pariatur?
//                   Similique, commodi. Quam blanditiis ratione itaque quo
//                   cupiditate cum, ab incidunt, voluptatibus modi vitae ad.
//                   Nesciunt, cupiditate laboriosam! Dolor atque harum amet ex
//                   itaque veniam tempore magnam in facilis magni aliquid adipisci
//                   alias natus porro rem dolorum laborum saepe quis
//                   necessitatibus quisquam, consequuntur sed! At nemo suscipit
//                   laudantium ipsam saepe fugit quasi. Porro, illum accusantium
//                   in eos temporibus distinctio minima! Voluptatem nobis
//                   voluptatum recusandae iste consequuntur incidunt, ipsa quasi
//                   animi similique asperiores dolor vel ipsam beatae repellendus
//                   mollitia amet veniam sint, commodi necessitatibus eveniet
//                   cupiditate quaerat repellat!ram ram
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

/*
<img src="./components/rippleEffect.gif" alt="" />
<img src="./components/zoom-parallax1.gif" alt="" />
<img src="./components/rippleEffect.gif" alt="" />
<img src="./components/zoom-parallax1.gif" alt="" />
<img src="./components/rippleEffect.gif" alt="" />
<img src="./components/zoom-parallax1.gif" alt="" />
<img src="./components/rippleEffect.gif" alt="" />
<img src="./components/zoom-parallax1.gif" alt="" /> 
*/
