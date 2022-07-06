import Image from 'next/image'

export default function CustomImage({ src, alt, width = 600, height = 600, ...otherProps }) {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} {...otherProps} />

    </>
  )
}
