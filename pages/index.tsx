/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";
import { Image } from "react-datocms";

import Layout from "components/Layout";
import ProjectList from "components/Project/ProjectList";
import CallToAction from "components/CallToAction";

// import request from "lib/datocms";
import { getHome } from "lib/api";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="pt-16">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={7000}
      >
        {testimonials.map((t) => (
          <div
            key={t.slug}
            className="flex flex-col items-center justify-around pt-16 "
          >
            <div className="h-32 w-32">
              <Image
                data={t.image.responsiveImage}
                className="h-32 w-32"
                pictureClassName="rounded-full object-cover max-w-md max-h-md"
              />
            </div>
            <p className="max-w-xs pt-8 sm:min-w-0">{t.content}</p>
            <h3 className="pt-4 ">{t.name}</h3>
            <p className="pb-16 text-gray-500 ">{t.company}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const IndexPage = ({ data }) => {
  return (
    // <Layout DataTopBar={data.home}>
    <Layout>
      <ProjectList data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <TestimonialCarousel testimonials={data.allTestimonials} />
      <CallToAction />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHome();

  return { props: { data } };
};

export default IndexPage;
