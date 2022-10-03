import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import CallToAction from "components/CallToAction";

import request from "lib/datocms";
import { getHome } from "lib/api";

const ProjectItem = ({ project, index, numProjects }) => {
    const gridclassnames =
        "h-96 md:h-[600px] w-full md:last:h-[300px] transition-all group rounded-lg flex flex-row justify-between  hover:scale-102 transform delay-75 duration-150 ease-in-out backdrop-blur-2xl text-white dark:text-midnight";

    const numProjectsIsOdd = numProjects % 2 === 1

    return (
        <Link href={`/project/${project.slug}`} key={project.slug}>
            <a
                // className={cn(
                //     {
                //         "bg-gradient-to-tr from-[#DB758F] to-[#39B0EF]": project.position === 1,
                //         "bg-gradient-to-tr from-[#F46634] to-[#FABFD5]": project.position === 2,
                //         "bg-gradient-to-tr from-[#8100ED] to-[#FF3903]": project.position === 3,
                //         "bg-gradient-to-tl from-[#B671FF] to-[#FFDC7C]": project.position === 4,
                //     },
                //     gridclassnames
                //)}
                className={cn(gridclassnames, "h-80", {
                    "md:col-span-2": index === numProjects - 1 && numProjectsIsOdd,
                })}
                style={{
                    backgroundImage: `linear-gradient(${project.direction}deg, ${project.color1.hex} 0%, ${project.color2.hex} 100%)`,
                }}
            >
                <div className="flex flex-1 flex-col items-start justify-end p-8 text-white">
                    <h3 className="text-2xl  font-semibold">{project.title}</h3>
                    <p className="text-md hidden md:group-hover:block md:group-hover:line-clamp-2 ">
                        {project.description}
                        {/* {project.color1.hex}{" "} {project.color2.hex} */}
                    </p>
                </div>
                {/* {project.data.image && (
          <Image
            src={project.data.image}
            alt={project.data.title}
            width={500}
            height={500}
            className="flex-1 rounded-lg object-cover hidden group-hover:block"
          />
        )} */}
            </a>
        </Link>
    );
};

export default ProjectItem;