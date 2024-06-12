import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
