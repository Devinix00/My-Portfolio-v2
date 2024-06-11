import { PropsWithChildren } from "react";

export default function WhiteSpaceContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-white mx-10 xl:w-[1200px] xl:mx-auto">{children}</div>
  );
}
