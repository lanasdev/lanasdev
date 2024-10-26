import React from "react";
import { Image, ResponsiveImageType } from "react-datocms";
import clsx from "clsx";

interface CustomImageProps {
  responsiveImage: ResponsiveImageType;
  className?: string;
  otherProps?: React.HTMLAttributes<HTMLImageElement>;
}

const CustomImage: React.FC<CustomImageProps> = ({
  responsiveImage,
  className,
  ...otherProps
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    (<Image
      data={responsiveImage}
      className={clsx(className, "aspect-auto rounded-md")}
      {...otherProps}
    />)
  );
};

export default CustomImage;
