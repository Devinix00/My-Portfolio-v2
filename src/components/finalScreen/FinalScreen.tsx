import { Dispatch, SetStateAction, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiVelog } from "react-icons/si";

interface FinalScreenProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i + 55) * 0.025,
      duration: 0.1,
    },
  }),
};

export default function FinalScreen({ setActiveIndex }: FinalScreenProps) {
  const { ref } = useSidebarAnimation({ activeIndex: 3, setActiveIndex });
  const contentsRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(contentsRef, { once: true });

  const subMessage =
    "항상 최신 기술과 개발 트렌드를 학습하고, 사용자 경험을 관점으로 좋은 서비스를 개발할 수 있도록 노력하겠습니다! :)";

  return (
    <div
      ref={ref}
      id="final-screen"
      className="min-h-[100vh] flex justify-center items-center"
    >
      <div ref={contentsRef} className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          감사합니다.
        </motion.p>

        {[...subMessage].map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial={{ opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-xl"
          >
            {char}
          </motion.span>
        ))}

        <section className="mt-12 flex gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 3.35, duration: 0.5 }}
          >
            <Link to="https://github.com/Devinix00">
              <FaGithub className="w-12 h-12 p-[1px]" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 3.95, duration: 0.5 }}
          >
            <Link to="https://velog.io/@dpldpl/posts">
              <SiVelog className="w-12 h-12 p-[1px]" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
