import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a className='text-yellow-400 hover:text-yellow-600' {...otherProps} />
      </Link>

    </>
  )
}
