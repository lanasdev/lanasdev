import Layout from "../components/Layout";


const FaqPage = () => (
    <Layout
        customMeta={{
            title: 'FAQ - Lanas',
        }}
    >
        <div className="flex flex-col justify-center items-center p-16 bg-pattern-white">
            <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">FAQ</h1>
            <h3>Frequently asked questions</h3>
        </div>
    </Layout>
);

export default FaqPage;