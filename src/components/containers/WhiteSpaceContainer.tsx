import { PropsWithChildren } from "react";

export default function WhiteSpaceContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-full">
      <div className="mx-10 xl:w-[1200px] px-4 xl:mx-auto">{children}</div>
    </div>
  );
}
