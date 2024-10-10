import { motion } from "framer-motion";
const Bento = () => {
  return (
    <motion.div
      className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mt-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`border border-black/[0.2] group cursor-pointer ${index === 2 ? 'col-span-2 lg:col-span-1' : 'col-span-2'
            } ${index === 3 ? 'md:col-span-1' : ''
            } flex items-center justify-start flex-col rounded-lg p-3 space-y-2`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 + (index * 0.2) } }
          }}
        >
          <div className="border border-white/[0.1] bg-[#1e1e1e3e] overflow-hidden h-[200px] w-full rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover rounded-lg group-hover:scale-[102%] transition-all duration-300"
            />
          </div>
          <div className="px-1 group-hover:pl-3 transition-all duration-300">
            <h1 className="">Testing</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              animi in sunt illum quae deleniti omnis voluptatibus dolorum
              autem eligendi.
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Bento