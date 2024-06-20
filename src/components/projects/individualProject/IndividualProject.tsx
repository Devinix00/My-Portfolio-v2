import { motion } from "framer-motion";

interface IndividualProjectProps {
  project: Project;
  i: number;
  inView: boolean;
  animationEnd: boolean;
}

export default function IndividualProject({
  project,
  i,
  inView,
  animationEnd,
}: IndividualProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
      }}
      transition={{
        type: "spring",
        duration: 1,
        delay: !animationEnd ? (i + 1) * 0.2 : 0,
      }}
      className="rounded-3xl bg-gray p-8 flex flex-col gap-8"
    >
      <div className="flex justify-center">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-40 h-40 rounded-2xl bg-white"
        />
      </div>
      <section className="flex flex-col gap-2 items-center">
        <p className="text-2xl font-bold">{project.title}</p>
        <p className="text-center">{project.description}</p>
      </section>
    </motion.div>
  );
}
