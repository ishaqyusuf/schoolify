import Image from "next/image";
import type ImageProps from "next/image";
import { cn } from "@repo/utils";

type Props = {
  lightSrc: any;
  darkSrc: any;
  className: string;
} & typeof ImageProps;

export function AdaptiveImage({ lightSrc, darkSrc, className, ...rest }: Props) {
  return (
    <>
      <Image
        alt=""
        src={darkSrc}
        className={cn("hidden dark:block", className)}
        {...rest}
      />

      <Image
        alt=""
        src={lightSrc}
        className={cn("block dark:hidden", className)}
        {...rest}
      />
    </>
  );
}
