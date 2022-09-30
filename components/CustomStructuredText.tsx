import Link from "next/link";
import { StructuredText } from "react-datocms";

const renderLinkToRecord = (record, children) => {
  switch (record.__typename) {
    case "ItemRecord":
      return <Link href={`/items/${record.slug}`}>{children[0]}</Link>;
    case "PostRecord":
      return (
        <Link href={`/blog/${record.slug}`}>
          <a>{record.title}</a>
        </Link>
      );
    case "ProjectRecord":
      return (
        <Link href={`/${record.slug}`}>
          <a>{record.slug || "Project Name"}</a>
        </Link>
      );
    default:
      <p className="text-red-500">Error</p>;
  }
};

const renderInlineRecord = (record, children) => {
  switch (record.__typename) {
    case "ItemRecord":
      return <Link href={`/items/${record.slug}`}>{children[0]}</Link>;
    case "PostRecord":
      return (
        <Link href={`/blog/${record.slug}`}>
          <a className="">{record.title || "Link to Post"}</a>
        </Link>
      );
    case "ProjectRecord":
      return (
        <Link href={`/project/${record.slug}`}>
          <a className="">{record.slug || "Project Name"}</a>
        </Link>
      );
    default:
      <p className="text-red-500">Error</p>;
  }
};
// const renderBlock = ({ record }) => {
//   switch (record.__typename) {
//     case "PostRecord":
//       return (
//         <Link href={`/blog/${record.slug}`}>
//           <a>{record.title}</a>
//         </Link>
//       );
//     case "ImageBlockRecord":
//       return <img src={record.image.url} alt={record.image.alt} />;
//     default:
//       return "renderBlock";
//   }
// };

const CustomStructuredText = ({ data }) => {
  const { content } = data;

  return (
    <div>
      <StructuredText
        data={content}
        // renderInlineRecord={({ record, children }) =>
        //   renderInlineRecord(record, children)
        // }
        renderLinkToRecord={({ record, children }) =>
          renderLinkToRecord(record, children)
        }
        // renderBlock={renderBlock}
      />
    </div>
  );
};

export default CustomStructuredText;
