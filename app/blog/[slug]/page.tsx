import Link from "next/link";

import BlogHeader from "components/Blog/BlogHeader";

import CoverImage from "components/CoverImage";
import CustomStructuredText from "components/CustomStructuredText";
//
import { DEFAULT_LANG, getPostBySlug } from "lib/apiV2";

const BlogPost = async ({ params }) => {
  const datoData = await getPostBySlug(params.slug, false, "en");
  // // const { data, error, status } = useQuerySubscription(subscription);
  // // const statusMessage = {
  // //   connecting: "Connecting to DatoCMS...",
  // //   connected: "Connected to DatoCMS, receiving live updates!",
  // //   closed: "Connection closed",
  // // };
  const data = datoData.subscription.initialData;
  const post = data.post;

  return (
    <>
      {/* {status != "closed" && (
          <div className="pb-8">
            <p>Connection status: {statusMessage[status]}</p>
            {error && (
              <div>
                <h1>Error: {error.code}</h1>
                <div>{error.message}</div>
                {error.response && (
                  <pre>{JSON.stringify(error.response, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        )}*/}
      <section className="pb-16 pt-16">
        <BlogHeader
          title={post.title}
          date={post.date}
          author={post.author}
          locale={DEFAULT_LANG}
        />
        <CoverImage
          title={post.title}
          responsiveImage={post.coverImage.responsiveImage}
        />
        <main className="flex flex-row items-stretch justify-between py-16">
          <div className="prose dark:prose-invert dark:text-white dark:prose-headings:text-white dark:prose-a:text-white">
            <CustomStructuredText data={post} />
          </div>
        </main>
      </section>
      <pre className="mt-16 bg-purple-700 pt-16">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default BlogPost;
