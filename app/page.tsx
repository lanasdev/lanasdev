import Link from "next/link";

import { getHome } from "lib/apiV2";
import ProjectList from "ui/Project/ProjectList";
import CallToAction from "./CallToAction";
import BlogList from "ui/Blog/BlogList";

export default async function Page() {
  const data = await getHome();

  return (
    <div className="">
      <ProjectList data={data} />
      <BlogList data={data} />
      <CallToAction />
    </div>
  );
}
