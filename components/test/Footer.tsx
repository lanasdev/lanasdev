import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Footer = () => {

    const aClass = "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 "

    return (
        // a cool footer
        <footer className="py-24 bg-white overflow-hidden bg-pattern-white bg-center " >
            <div className="px-4 flex flex-col justify-center items-center">
                <Image src="/img/LanasLogoYellow.svg" alt="Lanas Logo" width={108} height={32} />

                <div className="flex flex-col md:flex-row sm:justify-center md:ml-0 space-x-4 py-2 pt-6">
                    {[
                        ["About", "/about"],
                        ["Blog", "/blog"],
                        ["Contact", "/contact"],
                        ["Privacy Policy", "/privacy-policy"],
                    ].map(([title, url]) => (
                        <Link href={url} key={title}>
                            <a className={aClass} >
                                {title}
                            </a>
                        </Link>
                    ))}
                </div>
                {/* <div className="max-w-5xl px-8 mx-auto">
                    Built by{' '}
                    <a
                        className="text-gray-900 dark:text-white"
                        href="https://twitter.com/lanas_dev"
                    >
                        Lanas
                    </a>
                </div> */}
                <span className="text-center pt-6 text-gray-400"> &copy; {new Date().getFullYear() || '2022'} Lanas.dev </span>

            </div>
        </footer>

    );
}

export default Footer;