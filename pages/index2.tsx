import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import ProjectList from "components/Project/ProjectList";
import CallToAction from "components/CallToAction";

// import request from "lib/datocms";
import { getHome } from "lib/api";


const IndexPage = ({ data }) => {

    return (
        <Layout>

            <ProjectList data={data} />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <CallToAction />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getHome();

    return { props: { data } };
};

export default IndexPage;
