import Link from "next/link";

import { getHome } from "lib/api";
import ProjectList from "components/Project/ProjectList";

export default async function Page() {
  const data = await getHome();

  return (
    <div>
      <h1>Hello!</h1>
      <ProjectList data={data} />

      <pre className="pt-48">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
