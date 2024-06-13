import { motion } from "framer-motion";
import { useState } from "react";

interface TechStackProps {
  inView: boolean;
  animationEnd: boolean;
  i: number;
  techStack: TechStack;
}

export default function IndividualTechStack({
  inView,
  animationEnd,
  i,
  techStack,
}: TechStackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);

  return (
    <div
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative h-[212px] perspective-1000"
    >
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20, rotateY: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
          rotateY: hoveredIndex === i ? 180 : 0,
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: !animationEnd ? (i + 1) * 0.1 : 0,
        }}
        className="absolute inset-0 w-full h-full backface-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="bg-gray p-6 h-full rounded-3xl shadow-lg absolute w-full flex items-center justify-center">
          <img src={techStack.imgSrc} alt="" className="w-40 pt-[auto]" />
        </div>
        <div
          className="bg-gray text-white p-6 h-full rounded-3xl shadow-lg absolute inset-0 flex items-center justify-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <section className="absolute top-6 left-6 w-[calc(100%-48px)]">
            <h3 className="text-xl font-semibold mb-4">{techStack.title}</h3>
            <p>{techStack.description}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
