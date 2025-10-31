import {PortableText, PortableTextComponents} from '@portabletext/react'
import Link from 'next/link'
import {SanityImage} from '@/lib/sanity-image'
import type {SanityImageObject} from '@/lib/sanity'

/**
 * PortableTextRenderer - replaces DatoCMS StructuredText component
 * Handles rendering of Sanity's Portable Text with custom components
 */

interface PortableTextRendererProps {
  value: any
  className?: string
}

const components: PortableTextComponents = {
  types: {
    image: ({value}: {value: SanityImageObject & {_type: 'image'}}) => {
      return (
        <div className="my-8">
          <SanityImage
            image={value}
            alt={value.alt}
            width={1200}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )
    },
  },
  marks: {
    link: ({children, value}: {children: React.ReactNode; value?: {href?: string}}) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </Link>
      )
    },
    internalProjectLink: ({
      children,
      value,
    }: {
      children: React.ReactNode
      value?: {slug?: {current: string}; title?: string}
    }) => {
      if (!value?.slug?.current) return <>{children}</>

      return (
        <Link
          href={`/projekt/${value.slug.current}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </Link>
      )
    },
    internalPostLink: ({
      children,
      value,
    }: {
      children: React.ReactNode
      value?: {slug?: {current: string}; title?: string}
    }) => {
      if (!value?.slug?.current) return <>{children}</>

      return (
        <Link
          href={`/blog/${value.slug.current}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </Link>
      )
    },
    internalTestimonialLink: ({
      children,
      value,
    }: {
      children: React.ReactNode
      value?: {slug?: string; name?: string}
    }) => {
      if (!value?.slug) return <>{children}</>

      // You can adjust this link destination based on your needs
      return (
        <span className="text-blue-600 font-semibold" title={value.name}>
          {children}
        </span>
      )
    },
  },
  block: {
    h1: ({children}: {children?: React.ReactNode}) => (
      <h1 className="text-4xl md:text-5xl font-bold my-8">{children}</h1>
    ),
    h2: ({children}: {children?: React.ReactNode}) => (
      <h2 className="text-3xl md:text-4xl font-bold my-6">{children}</h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 className="text-2xl md:text-3xl font-bold my-4">{children}</h3>
    ),
    h4: ({children}: {children?: React.ReactNode}) => (
      <h4 className="text-xl md:text-2xl font-bold my-4">{children}</h4>
    ),
    normal: ({children}: {children?: React.ReactNode}) => (
      <p className="my-4 text-lg leading-relaxed">{children}</p>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
  },
}

export function PortableTextRenderer({value, className}: PortableTextRendererProps) {
  if (!value) return null

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  )
}

/**
 * Simplified renderer for smaller content blocks (e.g., about section text)
 */
export function SimplePortableText({value, className}: PortableTextRendererProps) {
  if (!value) return null

  const simpleComponents: PortableTextComponents = {
    block: {
      normal: ({children}: {children?: React.ReactNode}) => (
        <p className="my-2 leading-relaxed">{children}</p>
      ),
    },
    marks: {
      link: ({children, value}: {children: React.ReactNode; value?: {href?: string}}) => {
        const href = value?.href || '#'
        const isExternal = href.startsWith('http')

        if (isExternal) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {children}
            </a>
          )
        }

        return (
          <Link href={href} className="text-blue-600 hover:text-blue-800 underline">
            {children}
          </Link>
        )
      },
    },
  }

  return (
    <div className={className}>
      <PortableText value={value} components={simpleComponents} />
    </div>
  )
}
