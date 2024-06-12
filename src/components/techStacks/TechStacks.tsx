import { motion, useInView } from "framer-motion";
import { techStacks } from "../../constants/techStacks";
import { Dispatch, SetStateAction, useRef } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";

interface TechStacksProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function TechStacks({ setActiveIndex }: TechStacksProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { ref: divRef } = useSidebarAnimation({
    activeIndex: 1,
    setActiveIndex,
  });

  return (
    <div ref={divRef} id="tech-stacks" className="min-h-[100vh] mt-20">
      <Title>Tech Stacks</Title>
      <div
        ref={ref}
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {techStacks.map((stack, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView && { opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: (i + 1) * 0.1 }}
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
