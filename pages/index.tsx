import Link from "next/link";
import Image from "next/image";
import Features from "../components/test/Features";
import Steps from "../components/test/Steps";
import Testimonials from "../components/test/Testimonials";
import Contact from "../components/test/Contact";
import Hero from "../components/test/Hero";
import Layout from "../components/Layout";

const TestPage = () => {
    return (
        <>
            <Layout title="Home">
                <Hero />
                <Features />
                <Steps />
                {/* <Testimonials /> */}
                <Contact />
            </Layout>
        </>
    )
}

export default TestPage;