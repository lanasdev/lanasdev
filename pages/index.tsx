import Link from "next/link";
import Image from "next/image";
import Features from "../components/test/Features";
import Steps from "../components/test/Steps";
import Testimonials from "../components/test/Testimonials";
import CTA from "../components/test/CTA";
import Hero from "../components/test/Hero";
import Layout from "../components/Layout";

const TestPage = () => {
    return (
        <>
            <Layout
                customMeta={{
                    title: 'Lanas - digital craftsmenship',
                    description:
                        'Lanas - digital craftsmenship',
                    image: `/images/site-preview.png`,

                }}
            >
                <Hero />
                <Features />
                <Steps />
                {/* <Testimonials /> */}
                <CTA />
            </Layout>
        </>
    )
}

export default TestPage;

