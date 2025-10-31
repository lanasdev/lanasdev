import React from "react";
import { SanityImage } from "@/lib/sanity-image";
import type { SanityImageObject } from "@/lib/sanity";
import clsx from "clsx";

interface CustomImageProps {
  image: SanityImageObject;
  alt?: string;
  className?: string;
  otherProps?: React.HTMLAttributes<HTMLImageElement>;
}

const CustomImage: React.FC<CustomImageProps> = ({
  image,
  alt,
  className,
  ...otherProps
}) => {
  return (
    <SanityImage
      image={image}
      alt={alt || "Image"}
      width={1200}
      height={800}
      className={clsx(className, "aspect-auto rounded-md")}
    />
  );
};

export default CustomImage;
