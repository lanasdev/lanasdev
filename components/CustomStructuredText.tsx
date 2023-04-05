/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { StructuredText, Image, ResponsiveImageType } from "react-datocms";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

type RecordTextProps = {
  record: any;
};

const renderLinkToRecord = ({ record, children, transformedMeta }) => {
  switch (record.__typename) {
    case "ItemRecord":
      return <Link href={`/items/${record.slug}`}>{children[0]}</Link>;
    case "TeamMemberRecord":
      return (
        <a {...transformedMeta} href={`/team/${record.slug}`}>
          {children}
        </a>
      );
    case "PostRecord":
      return <Link href={`/blog/${record.slug}`}>{record.title}</Link>;
    case "ProjectRecord":
      return (
        <Link href={`/project/${record.slug}`}>
          {record.slug || "Project Name"}
        </Link>
      );
    case "TestimonialRecord":
      return (
        <div className="flex flex-col items-center justify-around pt-16 ">
          <div className="h-32 w-32">
            <Image
              data={record.image.responsiveImage}
              className="h-32 w-32"
              pictureClassName="rounded-full object-cover max-w-md max-h-md"
            />
          </div>
          <p className="max-w-xs pt-8 sm:min-w-0">{record.content}</p>
          <h3 className="pt-4 ">{record.name}</h3>
          <p className="pb-16 text-gray-500 ">{record.company}</p>
        </div>
      );

    default:
      <p className="text-red-500">Error</p>;
  }
};

const renderInlineRecord = ({ record }) => {
  switch (record.__typename) {
    case "ItemRecord":
      return <Link href={`/items/${record.slug}`}>Link</Link>;
    case "PostRecord":
      return (
        <Link href={`/blog/${record.slug}`}>
          {record.title || "Link to Post"}
        </Link>
      );
    case "ProjectRecord":
      return (
        <Link href={`/project/${record.slug}`}>
          {record.slug || "Project Name"}
        </Link>
      );
    default:
      <p className="text-red-500">Error</p>;
  }
};
const renderBlock = ({ record }) => {
  switch (record.__typename) {
    case "PostRecord":
      return <Link href={`/blog/${record.slug}`}>{record.title}</Link>;
    case "ImageRecord":
      return (
        // https://stackoverflow.com/questions/67244166/how-to-read-value-from-unknown-type
        <Image data={(record.image as RecordImageType).responsiveImage} />
      );
    default:
      return "renderBlock";
  }
};

const CustomStructuredText = ({ data }) => {
  const { content } = data;

  return (
    <div>
      <StructuredText
        data={content}
        renderInlineRecord={({ record }) => {
          switch (record.__typename) {
            case "PostRecord":
              return (
                <Link href={`/blog/${record.slug}`}>
                  {(record as any).title || "Link to Post"}
                </Link>
              );
            case "ProjectRecord":
              return (
                <Link href={`/project/${record.slug}`}>
                  {(record.name as string) || "Project Name"}
                </Link>
              );
            default:
              return null;
          }
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          switch (record.__typename) {
            case "ItemRecord":
              return (
                <Link href={`/items/${record.slug}`} className="hello">
                  {children && children[0]}
                </Link>
              );
            case "PostRecord":
              return (
                <Link href={`/blog/${record.slug}`}>
                  {(record as any).title}
                </Link>
              );
            case "ProjectRecord":
              return (
                <Link href={`/project/${record.slug}`}>
                  {(record as any).slug || "Project Name"}
                </Link>
              );
            case "TestimonialRecord":
              return (
                <div className="flex flex-col items-center justify-around pt-16 ">
                  <div className="h-32 w-32">
                    <Image
                      data={(record.image as RecordImageType).responsiveImage}
                      className="h-32 w-32"
                      pictureClassName="rounded-full object-cover max-w-md max-h-md"
                    />
                  </div>
                  <p className="max-w-xs pt-8 sm:min-w-0">
                    {(record as any).content}
                  </p>
                  <h3 className="pt-4 ">{(record as any).name}</h3>
                  <p className="pb-16 text-gray-500 ">
                    {(record as any).company}
                  </p>
                </div>
              );
            default:
              return null;
          }
        }}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "ImageRecord":
              return (
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

export default CustomStructuredText;
