import Link from "next/link";
import {
  Image as DatoImage,
  Metadata,
  ResponsiveImageType,
} from "react-datocms";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

export function MiniProjectCard({ project }: { project: any }) {
  return (
    <Link
      href={`/projekt/${project.slug}`}
      key={project.slug}
      className="group max-w-xs shrink-0 snap-center"
    >
      <DatoImage
        data={project.image.responsiveImage}
        className="aspect-golden max-h-[400px] w-full rounded-xl transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:opacity-80"
        pictureClassName="object-cover "
      />
      <p className="line-clamp-1 max-w-xs pt-4">{project.description}</p>
      <h4 className="text-xl font-semibold">{project.title}</h4>
    </Link>
  );
}

export default function ProjectCards({
  projects,
  currentProjectSlug,
}: {
  projects: any[];
  currentProjectSlug: string;
}) {
  return (
    <div className=" flex flex-col  pt-12 md:mr-8">
      <h3 className="pb-8 text-3xl font-semibold">Weitere Projekte</h3>
      <div className="flex flex-shrink-0 snap-x space-x-4 overflow-x-auto py-4">
        {projects.map((p: any) => (
          <MiniProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </div>
  );
}
