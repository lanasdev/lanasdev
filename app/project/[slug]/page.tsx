import Link from "next/link";

// import datoFetcher from "lib/apiV2";
// import { ProjectBySlug } from "lib/apiV2";

import ProjectList from "ui/Project/ProjectList";
import CoverImage from "components/CoverImage";
import CustomStructuredText from "components/CustomStructuredText";
import OtherProjects from "components/Project/OtherProjects";
import ProjectFacts from "components/Project/ProjectFacts";
import ProjectHeader from "components/Project/ProjectHeader";
import { gql } from "graphql-request";
//
import request from "lib/datocms";
import { DEFAULT_LANG, getProjectBySlug } from "lib/apiV2";

const ProjectPage = async ({ params }) => {
  const locale = "en";
  // console.log(params.slug);
  // const subscription = await datoFetcher(`{query allProjects {slug}}`);
  const datoData = await getProjectBySlug(params.slug, false, "en");
  // const { data, error, status } = useQuerySubscription(subscription);
  // const statusMessage = {
  //   connecting: "Connecting to DatoCMS...",
  //   connected: "Connected to DatoCMS, receiving live updates!",
  //   closed: "Connection closed",
  // };
  const data = datoData.subscription.initialData;
  const project = data.project;

  return (
    <div className="">
      {/* DatoCMS Live updates */}
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
        )} */}

      <ProjectHeader
        title={project.title}
        excerpt={project.description}
        date={project.createdAt}
        locale={locale}
      />

      <CoverImage
        title={project.title}
        responsiveImage={project.image.responsiveImage}
        path={project.liveurl}
      />
      <article className="dark:prose-white prose flex-row items-stretch py-8 dark:prose-invert prose-a:[word-break:break-word] hover:prose-a:text-amber-500 prose-img:rounded-md dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-blockquote:text-white">
        {/* prose-a:break-words */}
        {/*   word-break: break-word; */}
        <div className="post-sidebar flex flex-col items-stretch justify-between pb-16 ">
          <ProjectFacts project={project} locale={DEFAULT_LANG} />
        </div>
        <div className="">
          <CustomStructuredText data={project} />
        </div>
      </article>

      <OtherProjects project={project} />
      {/* <pre className="mt-16 bg-purple-700 pt-16">
        {JSON.stringify(data, null, 2)}
      </pre> */}
    </div>
  );
};

export default ProjectPage;
