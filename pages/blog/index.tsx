import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";


const BlogIndex = () => {
    return (

        <Layout title="Home">
            <main className="flex flex-col justify-center items-center p-16">
                <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">Blog</h1>
                <p>This is the Blog page</p>
            </main>
        </Layout>

    )
}


export default BlogIndex;