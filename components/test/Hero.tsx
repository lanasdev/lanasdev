import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden bg-pattern-white bg-center">
            {/* <div className="bg-tarnsparent"> */}
            {/* </div> */}
            <div className="py-20 md:py-28">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap xl:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-yellow-500 uppercase rounded-9xl">We are building websites</span>
                            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                                digital craftsmenship
                                that accels businesses.
                            </h1>
                            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                                We help startups to get found online and crush their competitors.
                            </p>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                                    <Link href="/contact">
                                        <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-yellow-50 font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-yellow-500 rounded-md shadow-sm" >
                                            Get your website
                                        </a>
                                    </Link>

                                </div>
                                <div className="w-full md:w-auto py-1 md:py-0">
                                    <Link href="/about">
                                        <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm">
                                            About
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <img className="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="/img/circle3-red.svg" alt="" />
                                <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="/img/dots3-green.svg" alt="" />
                                {/* <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-yellow-500 hover:text-yellow-600" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="currentColor"> </circle> <path className="text-white" d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z" fill="currentColor"> </path>
                                </svg> */}
                                <div className="relative overflow-hidden rounded-7xl mx-auto">
                                    {/* <img src="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" /> */}
                                    {/* <Image src="/img/christin-hume-mfB1B1s4sMc-unsplash.jpg" alt="Hero Image - We work fast" width={600} height={340} /> */}
                                    <Image src="/heroimg.png" alt="Hero Image - We work fast" width={500} height={500} />
                                    {/* <video className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" muted={true}>
                                        <source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4" />
                                    </video> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero;