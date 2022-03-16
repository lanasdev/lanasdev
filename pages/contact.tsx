import Link from "next/link";
import Layout from "../components/Layout";
import Contactform from "../components/Contactform";


const ContactPage = () => (
  <Layout title="Contact">
    <main className="flex flex-col justify-center items-center p-16">
      <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">Contact</h1>
      <p>Contact me here: </p>
      <a href="https://t.me/lanasdev" className="text-blue-500 hover:text-blue-700 p-8">Telegram</a>
    </main>
    <Contactform />
  </Layout>
);

export default ContactPage;
