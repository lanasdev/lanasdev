import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
// import CustomLink from '../../components/CustomLink'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

import Image from "next/image";
import Layout from "../components/Layout";
import CustomLink from '../components/CustomLink'
import CustomImage from '../components/CustomImage'
import CallToAction from '../components/CallToAction'
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink,
    img: CustomImage,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    Contactform: dynamic(() => import('../components/Contactform')),
    CustomImage: dynamic(() => import('../components/CustomImage')),
    // CustomLink: dynamic(() => import('../../components/CustomLink')),
    Head,
}

const ProjectPage = ({ source, frontMatter }) => {
    return (
        <Layout title="Project Page">
            <article className="prose dark:prose-dark dark:prose-headings:text-white dark:text-white py-16">
                {/* <h1>Project Page</h1> */}
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis commodi voluptates similique at aspernatur maiores odio dignissimos unde natus impedit, vero deleniti possimus debitis, fugiat tempore eveniet! Animi, nesciunt recusandae.</p> */}
                <div className="post-header">
                    <h1>{frontMatter.title}</h1>
                    {frontMatter.description && (
                        <p className="description">{frontMatter.description}</p>
                    )}
                </div>
                <main>
                    <MDXRemote {...source} components={components} />
                </main>
            </article>
            <CallToAction />
        </Layout>
    )
}

export default ProjectPage;


export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
