import Link from "next/link";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout
    customMeta={{
      title: 'Contact',
    }}
  >
    <div className="flex flex-col justify-center items-center p-16 bg-pattern-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">Contact</h1>
      <p>Contact me here: </p>
      <a href="https://t.me/lanasdev" className="text-blue-500 hover:text-blue-700 p-8">Telegram</a>
    </div>
  </Layout>
);

export default ContactPage;
