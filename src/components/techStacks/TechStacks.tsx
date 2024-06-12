import { motion, useInView } from "framer-motion";
import { techStacks } from "../../constants/techStacks";
import { useRef } from "react";

export default function TechStacks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div id="tech-stacks" className="min-h-[100vh] pt-10">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stacks</h2>
      <div
        ref={ref}
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {techStacks.map((stack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray p-6 rounded-3xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{stack.title}</h3>
            <p>{stack.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
