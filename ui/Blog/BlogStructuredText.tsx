/* eslint-disable jsx-a11y/alt-text */
import { StructuredText, Image, ResponsiveImageType } from "react-datocms";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

const BlogStructuredText = ({ post }) => {
  return (
    <div className="prose dark:prose-invert dark:text-white dark:prose-headings:text-white dark:prose-a:text-white">
      <StructuredText
        data={post.content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "ImageRecord":
              return (
                // https://stackoverflow.com/questions/67244166/how-to-read-value-from-unknown-type
                <Image
                  data={(record.image as RecordImageType).responsiveImage}
                />
              );
            default:
              return null;
          }
        }}
      />
    </div>
  );
};

export default BlogStructuredText;
