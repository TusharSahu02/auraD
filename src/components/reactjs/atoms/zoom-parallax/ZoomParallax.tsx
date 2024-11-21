import { FC, useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
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
      src: "https://wallpapercave.com/wp/3i6dLrF.jpg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1561905199-e7adfe8aa7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
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
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <img
                  src={src}
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="h-[100vh] leading-[0]"></div>

      <div className="">
        <p className="mt-10 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          architecto explicabo fuga quas possimus animi, ducimus dicta facilis
          consequatur omnis dolore accusamus corrupti laudantium in excepturi
          iure nam natus nisi provident maxime fugiat deleniti ullam, rem
          tenetur! Minus molestias cum iusto, rem eius quos ratione
          perspiciatis! Nesciunt expedita accusantium doloremque sint cupiditate
          pariatur itaque tempora cum quibusdam dignissimos, perspiciatis
          numquam maiores optio facere vitae ea quod fugiat accusamus?
          Perspiciatis quibusdam vitae aperiam esse aspernatur fuga itaque
          laboriosam illum obcaecati. Eum numquam illo soluta, reiciendis
          voluptate, facilis fugit modi quos voluptas, corrupti maxime deleniti
          animi qui ullam repellendus eligendi eius. Quam nobis aliquam
          distinctio pariatur maiores modi reiciendis consequatur esse tempore
          reprehenderit, deleniti amet velit optio a aut molestiae! Quo
          perferendis non doloremque suscipit ab? Labore doloribus et explicabo
          dolor minima soluta repellendus blanditiis placeat? Soluta doloribus
          consequatur temporibus earum. Labore dolor possimus, veritatis facere
          facilis, eveniet quos impedit illo ad quibusdam aliquid? Dicta,
          aperiam nobis minus pariatur nisi dolore illum dignissimos fugit est,
          magnam saepe facere inventore esse ad! Maiores saepe ducimus
          praesentium nulla, vel numquam magnam cum pariatur nobis asperiores,
          aliquam error inventore quos mollitia accusamus ratione laborum odio
          laudantium delectus quisquam rem assumenda neque libero ab! Voluptatum
          accusamus dicta neque similique eum error. Doloremque quas
          necessitatibus dolore odio vitae laboriosam aut hic, perferendis,
          harum nemo, placeat officia minus quam ipsa veritatis non labore
          molestias corporis dolor. Eos nulla porro eligendi suscipit officia
          perspiciatis culpa eveniet labore itaque laborum dolores sed quis
          temporibus placeat fugiat, cumque reiciendis debitis deleniti harum!
          Nobis praesentium nulla quos consequuntur eum. Cupiditate expedita non
          provident, iste inventore nesciunt sequi numquam deleniti odio est
          dolores aperiam unde molestiae debitis. Iusto necessitatibus, deserunt
          accusantium dolorum reprehenderit aliquam id illum nemo porro nostrum!
          Provident minus enim voluptatem, perferendis dolorem eveniet nisi
          fuga, quos molestiae ut nulla iste. Odit, similique labore veritatis
          molestias quidem necessitatibus. Dolorem aspernatur doloribus
          inventore atque nemo repellat alias in modi ipsa numquam deserunt
          debitis expedita incidunt quas quaerat dolor, voluptate accusantium
          vero ab distinctio! Tempora labore dolores iure dolor quis cupiditate
          consequatur accusamus, saepe sunt reprehenderit voluptatum quasi
          minima nesciunt. Provident doloribus delectus optio nemo quae velit
          error voluptas maxime mollitia quod, aliquam beatae recusandae, unde
          perferendis dicta, nostrum excepturi nisi non. Possimus quos
          exercitationem a repellendus, cumque quae dolore praesentium, facere
          dolorum voluptatum ad sit hic accusantium, eaque veniam sapiente!
          Nostrum et, incidunt facere labore, eos officia a atque maiores odit
          repudiandae odio placeat ex magnam alias? Quos voluptatibus ex
          veritatis odit accusantium optio tempore quis. Animi, harum quos
          quidem eum veniam, ad magnam culpa, veritatis a adipisci dolores nihil
          voluptatem esse pariatur? Repellat, laborum assumenda? Dolor nostrum
          aperiam saepe ducimus exercitationem ipsam amet necessitatibus
          voluptatibus! Porro officia similique asperiores odit maiores dolores.
          Qui, modi eos similique nobis accusantium ab quis. Autem corporis
          repellat rerum numquam voluptates! Pariatur eos officiis recusandae
          asperiores sapiente dolorem quam. Voluptate aspernatur aliquid nobis
          cumque possimus ab quod a est itaque commodi recusandae eius nostrum,
          temporibus quasi quis harum sapiente corporis ratione pariatur enim?
          Saepe, totam sapiente!
        </p>
      </div>
      <div className=" h-dvh"></div>
    </section>
  );
};

export default ZoomParallax;

export const ZoomParallaxPreviewModal = () => {
  return (
    <div className=" w-full h-full overflow-hidden">
      {/* <ZoomParallax /> */}
      <img
        src="/components/zoom-parallax1.gif"
        alt=""
        className=" h-full w-full rounded-md"
      />
    </div>
  );
};
