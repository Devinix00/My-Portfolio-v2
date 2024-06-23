import { Link } from "react-router-dom";
import TroubleshootingTitle from "./TroubleshootingTitle";
import { projectDetails } from "../../../../../constants/projectDetails";
import { SiVelog } from "react-icons/si";

interface TroubleShootingProps {
  modalIndex: number | null;
}

export default function Troubleshooting({ modalIndex }: TroubleShootingProps) {
  return (
    <div className="text-black px-6 md:px-0 md:w-[720px] md:mx-auto">
      <TroubleshootingTitle modalIndex={modalIndex} />

      <div className="flex flex-col gap-20">
        {modalIndex !== null &&
          projectDetails[modalIndex].troubleShootings?.map(
            (troubleShooting, i) => (
              <div key={i}>
                <p className="text-xl font-medium md:text-2xl pb-4 border-b-[1px] border-slate-300">
                  {i + 1}. {troubleShooting.title}
                </p>
                <section>
                  <p className="text-red md:text-lg font-medium mt-4">
                    [문제 상황]
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    {troubleShooting.problem}
                  </p>
                </section>
                <section>
                  <p className="text-green md:text-lg font-medium mt-8">
                    [원인]
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    {troubleShooting.cause}
                  </p>
                </section>
                <section>
                  <p className="text-blue md:text-lg font-medium mt-8">
                    [문제 해결 과정]
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    {troubleShooting.solution}
                  </p>
                </section>
                <section>
                  <p className="text-brown md:text-lg font-medium mt-8 mb-2">
                    [기술 블로그 링크]
                  </p>

                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
                    <Link
                      to={troubleShooting.link}
                      target="_BLANK"
                      className="text-sm md:text-base whitespace-normal text-blue_light hover:underline"
                    >
                      <SiVelog className="w-full h-full" fill="#21C998" />
                    </Link>
                  </div>
                </section>
              </div>
            )
          )}
      </div>
    </div>
  );
}
