import { Dispatch, SetStateAction } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";

interface FinalScreenProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function FinalScreen({ setActiveIndex }: FinalScreenProps) {
  const { ref } = useSidebarAnimation({ activeIndex: 3, setActiveIndex });
  return (
    <div ref={ref} id="final-screen" className="min-h-[100vh] pt-20"></div>
  );
}
