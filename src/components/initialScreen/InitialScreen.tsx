import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MyPhoto } from "../../assets/images";
import { useState } from "react";
import useSmoothScroll from "../../hooks/useSmoothScroll";

export default function InitialScreen() {
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const { smoothScroll } = useSmoothScroll();

  return (
    <div className="relative w-full overflow-y-hidden overflow-x-hidden min-h-[100vh] bg-white flex items-center justify-center">
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ delay: 0.5, duration: 2 }}
        style={{ transformOrigin: "center" }}
        className="absolute top-0 left-0 w-full h-full bg-black"
      />
      /
      <section className="flex-col justify-between 2xl:flex-row items-center w-[calc(100%-80px)] md:w-[calc(100%-160px)] flex 2xl:top-auto absolute gap-4 2xl:left-20 2xl:bottom-20 z-10 rounded-2xl">
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          src={MyPhoto}
          alt="나"
          className="min-w-[320px] w-[320px] h-[320px] min-h-[320px] lg:w-[480px] lg:h-[480px] md:min-w-[400px] md:min-h-[400px] 2xl:min-w-[540px] 2xl:min-h-[540px]"
        />
        <section className="mt-auto flex w-full flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.5 }}
            className="pb-2 text-center 2xl:text-left border-b-2 2xl:text-3xl text-2xl w-full"
          >
            Front-End Developer 김범수
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.5 }}
            className="w-full text-md text-center 2xl:text-left"
          >
            안녕하세요! 저는 모던 프레임워크와 라이브러리를 활용한 웹 개발에
            열정을 가지고 있는 프론트엔드 개발자입니다. 주로 React와 Next.js를
            사용하며, Typescript와 SCSS, TailwindCSS를 통해 반응형 디자인을
            구현합니다. 클린 코드를 작성하는 것과 컴포넌트 및 커스텀 훅의
            재사용성과 확장성을 높이는 것을 중요하게 생각합니다.
          </motion.p>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.75, duration: 0.5 }}
        >
          <FaArrowDown
            size={36}
            fill={isHoveredIcon ? "#1b1b1e" : "white"}
            onMouseEnter={() => setIsHoveredIcon(true)}
            onMouseLeave={() => setIsHoveredIcon(false)}
            onClick={() => smoothScroll("tech-stacks")}
            className="absolute -bottom-[20px] left-1/2 hover:bg-silver cursor-pointer -translate-x-1/2 p-2 translate-y-[100%] border-2 rounded-full"
          />
        </motion.div>
      </section>
    </div>
  );
}

// import { motion } from "framer-motion";

// export default function InitialScreen() {
//   return (
//     <div className="relative w-full min-h-[100vh]">
//       <motion.div
//         initial={{ clipPath: "circle(0% at 50% 50%)" }}
//         animate={{ clipPath: "circle(150% at 50% 50%)" }}
//         transition={{ delay: 0.5, duration: 2 }}
//         className="absolute top-0 left-0 w-full h-full bg-black"
//       />
//     </div>
//   );
// }
