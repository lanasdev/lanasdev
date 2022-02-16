import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout
    customMeta={{
      title: 'About - Lanas',
    }}
  >
    <div className="flex flex-col justify-center items-center p-16 bg-pattern-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl py-10">About</h1>
      <h3>All about us</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus quae cumque sunt sit, animi perspiciatis alias eius harum! Soluta officiis omnis commodi aut accusamus quaerat itaque natus animi harum.</p>
    </div>
  </Layout>
)

export default AboutPage
