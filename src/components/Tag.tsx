import { twMerge } from "tailwind-merge";
import { getPostColorFromCategory } from "../utils/postUtils";
import type { ComponentPropsWithoutRef } from "react";

const Tag = (props: ComponentPropsWithoutRef<"div"> & { color?: string }) => {
  const { children, color } = props;

  return (
    <div
      className={twMerge(
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs inline-flex rounded-full bg-fuchsia-500/15 text-fuchsia-500",
        color === "lime" && "bg-lime-500/15 text-lime-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500"
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
