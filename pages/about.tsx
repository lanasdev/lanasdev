import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About">
    <main className="flex flex-col justify-center items-center p-16">
      <h1 className='text-2xl md:text-4xl lg:text-6xl py-10'>About</h1>
      <p className='text-slate-500 border-amber-400 border-2 w-1/3  my-8 mx-12 p-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus quae cumque sunt sit, animi perspiciatis alias eius harum! Soluta officiis omnis commodi aut accusamus quaerat itaque natus animi harum.</p>
    </main>
  </Layout >
)

export default AboutPage
