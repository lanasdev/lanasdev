import Link from "next/link";

import { getHome } from "lib/api";
import ProjectList from "components/Project/ProjectList";
import CallToAction from "./CallToAction";
import BlogList from "ui/Blog/BlogList";

export default async function Page() {
  const data = await getHome();

  return (
    <div>
      <h1>Hello!</h1>
      <ProjectList data={data} />
      <BlogList posts={data.allPosts} />
      <CallToAction />

      <pre className="pt-48">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}