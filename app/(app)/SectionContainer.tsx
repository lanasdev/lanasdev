import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const SectionContainer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("px-6 md:px-16", className)} {...props}>{children}</div>;

export default SectionContainer;
