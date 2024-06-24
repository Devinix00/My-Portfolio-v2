import { PropsWithChildren } from "react";

export default function AboutMeTitle({ children }: PropsWithChildren) {
  return (
    <p className="text-xl font-semibold w-fit px-4 py-1 bg-black rounded-md">
      {children}
    </p>
  );
}
