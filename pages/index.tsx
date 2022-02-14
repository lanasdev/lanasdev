import Link from "next/link";
import Image from "next/image";
import Features from "../components/test/Features";
import Steps from "../components/test/Steps";
import Testimonials from "../components/test/Testimonials";
import Contact from "../components/test/Contact";
import Hero from "../components/test/Hero";
import Footer from "../components/test/Footer";
import Navi from "../components/test/Navi";

const TestPage = () => {
    return (
        <>
            <Navi />
            <Hero />
            <Features />
            <Steps />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default TestPage;