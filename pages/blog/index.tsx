import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';
import { getAllPosts } from '../../lib/api';
import { PostType } from '../../types/post';

type BlogProps = {
  posts: PostType[];
};

export const Index = ({ posts }: BlogProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Blog - Lanas',
      }}
    >
      <div className="flex flex-col justify-center items-center p-16">
        <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">Blog</h1>
        <p>This is the Blog</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-16">

      {posts.map((post) => (
        <article key={post.slug} className="mt-12 mx-8">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          { post.image && (
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <Image

                src={post.image}
                alt={post.title}
                width={400}
                height={400}
              />
            </a>
          </Link>
          
          )}
          
          <h1 className="mb-4 text-xl">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a className="text-gray-900 hover:underline hover:decoration-wavy hover:decoration-yellow-500">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
