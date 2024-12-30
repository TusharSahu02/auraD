import { motion } from "framer-motion";

const Items = [
  {
    id: 1,
    title: "'Atomic Habits' by James Clear",
    description: "Small habits lead to significant life changes.",
  },
  {
    id: 2,
    title: "'Deep Work' by Cal Newport",
    description: "Focused work drives peak productivity and success.",
  },
  {
    id: 3,
    title: "'Sapiens' by Yuval Noah Harari",
    description: "Human history shaped by cognitive and social evolution.",
  },
  {
    id: 4,
    title: "'The Lean Startup' by Eric Ries",
    description: "Test, learn, and iterate for business growth.",
  },
];

const Bento = () => {
  return (
    <>
      <motion.div
        className="mx-auto mt-4 grid w-full max-w-[1024px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {Items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group w-full cursor-pointer border border-black/[0.2] dark:border-white/10 ${
              item.id === 2 ? "col-span-2 md:col-span-1" : "col-span-2"
            } ${
              item.id === 3 ? "md:col-span-1 lg:col-span-1" : ""
            } flex flex-col items-center justify-start space-y-2 rounded-lg p-3`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 + index * 0.2 },
              },
            }}
          >
            {/* <div className=" overflow-hidden h-[200px] w-full rounded-lg bg-gray-600/10"></div> */}
            <div className="to-stone-90 h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-tl from-sky-900 via-zinc-800" />
            <div className="w-full px-1 transition-all duration-300 group-hover:ml-3">
              <h1 className="text-white">{item.title}</h1>
              <p className="text-white/60">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Bento;
