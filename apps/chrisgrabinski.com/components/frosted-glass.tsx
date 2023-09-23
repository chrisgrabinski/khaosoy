import { cn } from "@/app/lib/utils";
import React from "react";

export const FrostedGlass = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white/20 bg-gradient-to-t from-white/70 backdrop-blur-md backdrop-saturate-200",
        className,
      )}
      ref={ref}
    />
  );
});
