import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const ScrollWindow = () => {
  const gsapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: "50% 50%",
          end: "300% 50%",
          pin: true,
          scrub: 1,
        },
      });

      timeline
        .to(
          ".our-work-txt-div",
          {
            height: "60vh",
          },
          "height",
        )
        .to(
          ".our-work-txt",
          {
            height: "60vh",
          },
          "height",
        )
        .to(
          ".our",
          {
            left: "0%",
          },
          "height",
        )
        .to(
          ".work",
          {
            right: "0%",
          },
          "height",
        )
        .to(".scroll-img", {
          marginTop: "-300%",
        });
    },
    {
      scope: gsapRef,
    },
  );
  return (
    <div ref={gsapRef}>
      <div className="part-7">
        <div className="our-work-txt">
          <div className="our">My</div>
          <div className="work">Works</div>
        </div>
        <div className="our-work-txt-div">
          <div className="scroll-work">
            <div className="scroll-img">
              <div className="flex h-[420vh] flex-col items-center justify-between bg-yellow-500 p-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum consequuntur dolore officiis distinctio explicabo
                  inventore omnis ab id nostrum, non dignissimos, labore
                  voluptates sit, officia deserunt odio facilis pariatur?
                  Similique, commodi. Quam blanditiis ratione itaque quo
                  cupiditate cum, ab incidunt, voluptatibus modi vitae ad.
                  Nesciunt, cupiditate laboriosam! Dolor atque harum amet ex
                  itaque veniam tempore magnam in facilis magni aliquid adipisci
                  alias natus porro rem dolorum laborum saepe quis
                  necessitatibus quisquam, consequuntur sed! At nemo suscipit
                  laudantium ipsam saepe fugit quasi. Porro, illum accusantium
                  in eos temporibus distinctio minima! Voluptatem nobis
                  voluptatum recusandae iste consequuntur incidunt, ipsa quasi
                  animi similique asperiores dolor vel ipsam beatae repellendus
                  mollitia amet veniam sint, commodi necessitatibus eveniet
                  cupiditate quaerat repellat! Est veritatis distinctio ipsum
                  accusantium, quasi voluptas quaerat assumenda itaque autem
                  nihil eveniet facilis perferendis vero ullam voluptatibus!
                  Molestias minima omnis illum ipsam dolores distinctio quo
                  deleniti facere repellat assumenda, itaque architecto cumque
                  dolorem maxime iusto libero ipsum eos, sint ut harum nesciunt.
                  Debitis maiores laboriosam dolorum adipisci architecto.
                  Perferendis corporis natus blanditiis ducimus neque quos
                  sapiente eum temporibus vitae quas dolorem molestias officia
                  maxime impedit voluptas totam eos, iste libero? Delectus
                  doloribus harum ipsum nisi quae! Iste voluptatum, ut tempora
                  magni autem pariatur quisquam nihil alias ea rerum, fugit
                  deserunt quos labore exercitationem, quibusdam deleniti
                  necessitatibus officia! Magnam, quae, laudantium laboriosam
                  labore iure earum sit cupiditate fugiat quis, beatae adipisci?
                  Quo a fuga repudiandae. Nihil atque saepe distinctio,
                  consectetur ratione enim assumenda ut quam animi ullam
                  reiciendis repellat incidunt fugit obcaecati quas! Excepturi,
                  iste. Porro ab reprehenderit dolores vero assumenda quam
                  veniam cum? Illum placeat earum saepe, dignissimos officiis
                  magni hic possimus deleniti consectetur error incidunt dolorum
                  molestiae sequi sit cupiditate accusamus quos, deserunt
                  repudiandae est rerum nam optio. Eligendi alias asperiores
                  laborum distinctio rem modi exercitationem debitis, nobis
                  veritatis beatae minus quidem?
                </p>
                <h1 className="text-7xl">Content goes here</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum consequuntur dolore officiis distinctio explicabo
                  inventore omnis ab id nostrum, non dignissimos, labore
                  voluptates sit, officia deserunt odio facilis pariatur?
                  Similique, commodi. Quam blanditiis ratione itaque quo
                  cupiditate cum, ab incidunt, voluptatibus modi vitae ad.
                  Nesciunt, cupiditate laboriosam! Dolor atque harum amet ex
                  itaque veniam tempore magnam in facilis magni aliquid adipisci
                  alias natus porro rem dolorum laborum saepe quis
                  necessitatibus quisquam, consequuntur sed! At nemo suscipit
                  laudantium ipsam saepe fugit quasi. Porro, illum accusantium
                  in eos temporibus distinctio minima! Voluptatem nobis
                  voluptatum recusandae iste consequuntur incidunt, ipsa quasi
                  animi similique asperiores dolor vel ipsam beatae repellendus
                  mollitia amet veniam sint, commodi necessitatibus eveniet
                  cupiditate quaerat repellat!ram ram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollWindow;
