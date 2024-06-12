import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return <h2 className="text-3xl font-bold text-center mb-10">{children}</h2>;
}
