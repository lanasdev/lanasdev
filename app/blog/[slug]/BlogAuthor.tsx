import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import Image from "next/image";

export interface Author {
  name: string;
  role: string;
  picture: {
    responsiveImage: ResponsiveImageType;
  };
}

const BlogAuthor = ({ author }: { author: Author }) => {
  // Explicitly define the type of the 'author' parameter
  return (
    <div className="flex flex-row items-center gap-3 pt-6 md:gap-0 lg:gap-3">
      <DatoImage
        data={author.picture.responsiveImage}
        className="dark:boder-white mr-2 aspect-square !w-16 !max-w-16 rounded-full border-2 border-midnight"
        // style={{ width: "50px", height: "50px" }}
        pictureClassName="object-cover"
        // placeholderClassName="w-1 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{author.name}</span>
        <span className="text-xs text-slate-500">{author.role}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
