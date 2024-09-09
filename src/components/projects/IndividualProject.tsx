import { motion } from "framer-motion";
import useHoveredIndex from "../../hooks/useHoveredIndex";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IndividualProjectProps {
  project: Project;
  i: number;
  inView: boolean;
  animationEnd: boolean;
  setIsModalOpened: (modalState: boolean) => void;
  setModalIndex: Dispatch<SetStateAction<number | null>>;
}

export default function IndividualProject({
  project,
  i,
  inView,
  animationEnd,
  setIsModalOpened,
  setModalIndex,
}: IndividualProjectProps) {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave, handleClick } =
    useHoveredIndex(i);
  const location = useLocation();

  const navigate = useNavigate();

  const calculateY = () => {
    if (!inView) {
      return 20;
    } else if (animationEnd && hoveredIndex === i) {
      return -10;
    } else {
      return 0;
    }
  };

  const handleClickDetailButton = (i: number) => {
    setIsModalOpened(true);
    setModalIndex(i);
    navigate(`${location.pathname}#modal`);
  };

  useEffect(() => {
    const handlePopState = () => {
      if (!window.location.hash.includes("#modal")) {
        setIsModalOpened(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setIsModalOpened]);

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: calculateY(),
      }}
      transition={{
        type: "spring",
        duration: 1,
        delay: !animationEnd ? (i + 2.5) * 0.2 : 0,
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
        <p className="text-2xl select-none font-bold">{project.title}</p>
        <div className="h-12 flex items-center justify-center">
          {hoveredIndex === i ? (
            <button
              onClick={() => handleClickDetailButton(i)}
              className="transition-all select-none duration-300 border-[1px] hover:bg-silver hover:text-gray rounded-2xl px-4 py-2"
            >
              자세히 보기
            </button>
          ) : (
            <p className="text-center select-none">{project.description}</p>
          )}
        </div>
      </section>
    </motion.div>
  );
}
