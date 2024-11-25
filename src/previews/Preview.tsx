import ZoomParallax from "@/components/reactjs/atoms/zoom-parallax/ZoomParallax";
import { useLocation } from "react-router-dom";
import SmoothScrolling from "../utils/SmoothScrool";
import PerspectiveGrid from "@/components/reactjs/atoms/perspective-grid/PerspectiveGrid";

interface PathComponents {
  [path: string]: () => JSX.Element;
}

const pathComponents: PathComponents = {
  "zoom-parallax": () => (
    <ZoomParallax>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        numquam quis consequatur quod! Enim sequi blanditiis atque aspernatur,
        quibusdam odit numquam dolor at velit, perferendis dignissimos optio.
        Assumenda, ipsam deleniti! Illo qui debitis pariatur! Officiis mollitia
        dolorem vero molestiae voluptas, voluptatibus repudiandae sunt, quis
        fuga veniam consequuntur suscipit vel et atque nisi rerum maiores
        adipisci non, temporibus nemo repellendus libero similique iusto?
        Laborum ex aspernatur labore quod qui ab saepe. Eligendi ipsam commodi
        voluptatibus dignissimos praesentium necessitatibus nihil recusandae
        provident nulla perferendis blanditiis, laudantium doloribus libero
        inventore culpa qui quia at non earum? Corrupti amet ea laborum beatae,
        esse ex nemo tenetur doloribus quaerat, praesentium omnis quod
        temporibus consectetur in ad vitae delectus ipsum ratione expedita?
        Quidem quis non asperiores quae ducimus fuga earum nulla cum, nesciunt,
        exercitationem dolor blanditiis vero deserunt molestias nemo nostrum eum
        distinctio est nisi modi magnam! Odit consectetur iure neque voluptatem
        animi in. Maxime voluptatum, in hic unde fuga perspiciatis numquam, cum,
        error rem saepe perferendis. Ducimus voluptatem laudantium tempore!
        Nesciunt ab repellendus rem doloremque laboriosam possimus odio.
        Molestiae deleniti ipsum maxime dolorem quaerat similique dolores
        laborum repellat iusto dolor velit blanditiis, fuga expedita natus rem
        omnis dignissimos consequuntur iste facere quae. Fuga repellendus
        voluptates temporibus a nihil perferendis velit molestiae non delectus
        sunt doloremque eveniet incidunt, dicta fugiat harum minus placeat quam
        adipisci architecto! Incidunt dignissimos neque ratione iure minus ea
        vero ipsam at. Dolor odit vel nulla! Voluptatum, facere asperiores! Ut
        natus dolore asperiores itaque sit id neque, possimus vitae assumenda
        minima expedita sint molestias sequi, atque doloremque velit culpa quod
        nesciunt at est excepturi autem eius aspernatur! Nostrum quia commodi
        iusto consequatur quae veniam quas corporis rem dolore ut sed inventore
        eveniet nisi labore magnam perferendis ipsa placeat perspiciatis at
        incidunt, velit tempora, quam asperiores! Molestiae fugit officia error
        necessitatibus sed quaerat culpa iste dolorum quod, obcaecati eum quia,
        odio officiis recusandae cupiditate minima, voluptates facilis voluptas!
        Aut iusto sequi ullam pariatur hic corrupti molestias enim aliquam
        maxime, placeat qui. Atque eaque voluptatibus, qui earum dicta deleniti
        doloribus consectetur quas corrupti temporibus iusto libero eius cum
        ipsa, dolorum at voluptate non facilis amet cumque iure enim soluta
        eveniet! Nemo nesciunt officiis tenetur perspiciatis magni praesentium
        iusto minima quod, aperiam voluptas consequuntur ipsam fugit aliquam
        nostrum cupiditate! Est, ipsam quis? Ad voluptatum velit officiis,
        expedita ipsum consequuntur deserunt animi vitae quia voluptates quae
        quibusdam accusantium? Atque vitae ipsa dolor nulla ratione veritatis
        fuga?
      </div>
    </ZoomParallax>
  ),
  "perspective-grid": () => (
    <>
      <PerspectiveGrid />
      <div className=" flex items-center justify-center">
        <h1 className=" text-center">Your Content Goes Here</h1>
      </div>
      <div className="h-dvh" />
    </>
  ),
};

const Preview = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const Component = pathComponents[path];

  return (
    <SmoothScrolling>
      <div className="bg-[#090716]">
        <Component />
      </div>
    </SmoothScrolling>
  );
};

export default Preview;
