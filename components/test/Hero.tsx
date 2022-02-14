import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden bg-[url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg')] bg-center"> <div className="bg-tarnsparent">
            
            <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
                <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                    <nav className="relative p-6 h-full overflow-y-auto"> <div className="flex flex-col justify-between h-full">
                        <a className="inline-block" href="#">
                            <img className="h-8" src="https://shuffle.dev/flex-ui-assets/logos/flex-ui-yellow-light.svg" alt="" /> </a>
                        <ul className="py-6"> <li> <a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Product</a> </li>
                            <li> <a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Features</a> </li>
                            <li> <a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Pricing</a> </li>
                            <li> <a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Resources</a> </li>
                        </ul> <div className="flex flex-wrap">
                            <div className="w-full mb-2"> <a className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md" href="#">Log In</a> </div>
                            <div className="w-full"> <a className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-yellow-500 hover:bg-yellow-600 font-medium text-center focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md" href="#">Sign Up</a> </div>
                        </div>
                    </div>
                    </nav> <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"> </path> </svg> </a>
                </div>
            </div>
        </div>
            <div className="py-20 md:py-28">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap xl:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-yellow-500 uppercase rounded-9xl">Header</span>
                            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">digital craftsmenship
                                that accels businesses.</h1>
                            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-yellow-50 font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-yellow-500 rounded-md shadow-sm" href="#">Request a Demo</a> </div>
                                <div className="w-full md:w-auto py-1 md:py-0"> <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">Sign Up</a> </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <img className="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="https://shuffle.dev/flex-ui-assets/elements/circle3-red.svg" alt="" />
                                <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="https://shuffle.dev/flex-ui-assets/elements/dots3-green.svg" alt="" />
                                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-yellow-500 hover:text-yellow-600" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="currentColor"> </circle> <path className="text-white" d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z" fill="currentColor"> </path> </svg>
                                <div className="relative overflow-hidden rounded-7xl">
                                    <img src="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" />
                                    <video className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" muted="">
                                        <source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;