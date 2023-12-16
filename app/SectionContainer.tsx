import { cn } from "@/lib/utils";

const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => <div className={cn("px-6 md:px-16", className)}>{children}</div>;

export default SectionContainer;
