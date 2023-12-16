/* eslint-disable jsx-a11y/alt-text */
// "use client";
import Link from "next/link";
import {
  StructuredText,
  ResponsiveImageType,
  StructuredTextPropTypes,
} from "react-datocms";
import CustomImage from "@/components/CustomImage";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

type RecordTextProps = {
  record: any;
};

// const CustomStructuredText = ({ data }: { data: any }) => {
//   const { content } = data;

//   return (
//     <div>
//       <StructuredText
//         data={content}
//         renderInlineRecord={({ record }) => {
//           switch (record.__typename) {
//             case "PostRecord":
//               return (
//                 <Link href={`/blog/${record.slug}`}>
//                   {(record as any).title || "Link to Post"}
//                 </Link>
//               );
//             case "ProjectRecord":
//               return (
//                 <Link href={`/project/${record.slug}`}>
//                   {(record.name as string) || "Project Name"}
//                 </Link>
//               );
//             default:
//               return null;
//           }
//         }}
//         renderLinkToRecord={({ record, children, transformedMeta }) => {
//           switch (record.__typename) {
//             case "ItemRecord":
//               return (
//                 return (
//                   <Link href={`/items/${record.slug}`} className="hello">
//                     {children}
//                   </Link>
//                 );
//                 case "ProjectRecord":
//               );
//             case "ProjectRecord":
//               return (
//                 <Link href={`/project/${record.slug}`}>
//                   {(record as any).slug || "Project Name"}
//                 </Link>
//               );
//             case "TestimonialRecord":
//               return (
//                 <div className="flex flex-col items-center justify-around pt-16 ">
//                   <div className="h-32 w-32">
//                     <CustomImage
//                       responsiveImage={
//                         (record.image as RecordImageType).responsiveImage
//                       }
//                       className="h-32 w-32"
//                       pictureClassName="rounded-full object-cover max-w-md max-h-md"
//                     />
//                   </div>
//                   <p className="max-w-xs pt-8 sm:min-w-0">
//                     {(record as any).content}
//                   </p>
//                   <h3 className="pt-4 ">{(record as any).name}</h3>
//                   <p className="pb-16 text-gray-500 ">
//                     {(record as any).company}
//                   </p>
//                 </div>
//               );
//             default:
//               return null;
//           }
//         }}
//         renderBlock={({ record }) => {
//           switch (record.__typename) {
//             case "ImageRecord":
//               return (
//                 <CustomImage
//                   responsiveImage={
//                     (record.image as RecordImageType).responsiveImage
//                   }
//                 />
//               );
//             default:
//               return <p>BLOCK</p>;
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default CustomStructuredText;
