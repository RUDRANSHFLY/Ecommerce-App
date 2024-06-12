/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
    >
      <img
        className={"pointer-events-none z-50 select-none"}
        src={
          dark
            ? "/image/phone-template-dark-edges.png"
            : "/image/phone-template-white-edges.png"
        }
        alt={"dark edges"}
      />

      <div className={"absolute -z-10 inset-0"}>
        <img className={"object-cover"} src={imgSrc} alt={"src Image"} />
      </div>
    </div>
  );
};

export default Phone;
