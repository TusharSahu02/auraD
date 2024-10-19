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
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mt-4"
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
            className={`border border-black/[0.2] dark:border-white/10  group cursor-pointer ${
              item.id === 2 ? "col-span-2 lg:col-span-1" : "col-span-2"
            } ${
              item.id === 3 ? "md:col-span-1" : ""
            } flex items-center justify-start flex-col rounded-lg p-3 space-y-2`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 + index * 0.2 },
              },
            }}
          >
            <div className=" overflow-hidden h-[200px] w-full rounded-lg bg-gray-600/10"></div>
            <div className="px-1 group-hover:ml-3  w-full 0 transition-all duration-300">
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
