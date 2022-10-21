import { Image } from "react-datocms";

const BlogAuthor = ({ author }) => {
  return (
    <div className="flex flex-row items-center gap-3 pt-6 md:gap-0 lg:gap-3">
      <Image
        data={author.picture.responsiveImage}
        className="mr-2 aspect-1 w-2 rounded-full border-2"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{author.name}</span>
        <span className="text-xs text-slate-500">{author.role}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
