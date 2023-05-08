"use client";
/* eslint-disable jsx-a11y/alt-text */

import { Image, ResponsiveImageType } from "react-datocms";
import clsx from "clsx";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

const CustomImage = ({ responsiveImage, className = "", ...otherProps }) => {
  return (
    <Image
      data={responsiveImage}
      className={clsx(className, "aspect-auto rounded-md")}
      {...otherProps}
    />
  );
};

export default CustomImage;
