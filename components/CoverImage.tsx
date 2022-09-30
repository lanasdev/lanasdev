/* eslint-disable jsx-a11y/alt-text */
import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, path }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("mt-16 w-full rounded-md object-cover", {
        "hover:shadow-medium transition-shadow duration-200": path,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {path ? (
        <Link href={`/${path}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}