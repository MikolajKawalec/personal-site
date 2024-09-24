import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, label, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "group relative h-2 w-full overflow-hidden rounded-full bg-primary/20 transition-all",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="absolute inset-0 flex h-full w-full flex-1 bg-stripes opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <b className="absolute inset-0 flex w-full items-center justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      {label}
    </b>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
