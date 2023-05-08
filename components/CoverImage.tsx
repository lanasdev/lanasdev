/* eslint-disable jsx-a11y/alt-text */
// "use client";
import { Image as DatoImage } from "react-datocms";
import clsx from "clsx";
import Link from "next/link";

//TODO: Test this component with Next.js Image component
import Image from "next/image";

type Props = {
  title: string;
  responsiveImage: any;
  path?: string;
};

export default function CoverImage({ title, responsiveImage, path }: Props) {
  // const image = (
  //   <DatoImage
  //     data={{
  //       ...responsiveImage,
  //       alt: `Cover Image for ${title}`,
  //     }}
  //     className={clsx(
  //       "relative mb-8 w-full overflow-auto rounded-md object-cover",
  //       {
  //         "hover:shadow-medium transition-shadow duration-200": path,
  //       }
  //     )}
  //   />
  // );
  const image = (
    <Image
      src={responsiveImage.src}
      alt={title}
      width={responsiveImage.width}
      height={responsiveImage.height}
      placeholder="blur"
      blurDataURL={responsiveImage.base64}
      className={clsx(" mb-8 w-full overflow-auto rounded-md object-cover", {
        "hover:shadow-medium transition-shadow duration-200": path,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {path ? (
        <Link href={`${path}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
