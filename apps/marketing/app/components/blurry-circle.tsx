import { cn } from "@repo/utils";

export function BlurryCircle({ className }) {
  return <div className={cn("h-[216px] w-[216px] rounded-full blur-2xl", className)} />;
}
