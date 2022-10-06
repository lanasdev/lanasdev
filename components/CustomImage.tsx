import Image from "next/future/image";

export default function CustomImage({
  src,
  alt,
  width = 1000,
  height = 600,
  ...otherProps
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...otherProps}
      />
    </>
  );
}
