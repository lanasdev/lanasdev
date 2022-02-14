import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";
import HeroThree from "../components/three/HeroThree";

const IndexPage = () => (
  <Layout title="Lanas Portfolio">
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-h-screen overflow-hidden">
      <Head>
        <title>Lanas Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-around flex-1 pt-10 px-20 md:flex-row">
        <div className="flex flex-col z-10" >
          <div className="mt-24 -mr-32">
            <h3 className="text-xl uppercase">Web design & development</h3>
            <h1 className="text-6xl font-bold py-8 max-w-xl ">
              digital craftsmenship
              <br />
              that accels
              <a className="text-yellow-400 hover:underline"> businesses</a>.
            </h1>

            <p className="mt-3 text-2xl">
              Get to know how a good website is really benefitial your sales.
            </p>
          </div>

          
        </div>
        <div className="relative w-full min-h-full flex-1 top-0 right-0 ">
            <Image src="/heroimg.png" alt="Image" width={550} height={550} className="p-8" />
            {/* <HeroThree /> */}
          </div>

      </main>
    </div >
  </Layout >
);

export default IndexPage;
