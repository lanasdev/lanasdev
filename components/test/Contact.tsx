import Image from "next/image"
import Link from "next/link"


const Contact = () => (
    <section className="py-24 bg-white overflow-hidden bg-pattern-white bg-center " >
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
                {/* <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                
            </div> */}
                <div className="md:max-w-4xl mb-12 mx-auto text-center">
                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">Contact</span>
                    <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">How we can improve your website</h1>
                    <p className="text-lg md:text-xl text-coolGray-500 font-medium">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
                    <span className="pt-8">
                        <Link href="/contact">
                            <a className="mt-16 inline-block py-2 px-4 text-sm leading-5 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 font-medium focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md">
                                Build me a Website
                            </a>
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    </section>
)

export default Contact