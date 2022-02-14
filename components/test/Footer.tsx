import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Footer = () => {
    // const [active, setActive] = useState(false);

    // const handleClick = () => {
    //     setActive(!active);
    // };

    const aClass = "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 "

    return (
        // a cool footer
        <footer className="py-24 bg-white overflow-hidden bg-pattern-white bg-center " >
            <div className="px-4 flex flex-col justify-center items-center">
                <img className="h-8" src="https://shuffle.dev/flex-ui-assets/logos/flex-ui-yellow-light.svg" alt="Lanas Logo" />

                <nav className="flex sm:justify-center space-x-4 py-2 pt-6">
                    {[
                        ["Lanas", "/"],
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
                </nav>
                {/* <div className="flex">
                <Link href="#"><a className="p-16 rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 text-coolGray-500 hover:text-coolGray-900 font-medium">Hu </a></Link>
                <Link href="#"><a className="p-16 rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 text-coolGray-500 hover:text-coolGray-900 font-medium">Hu </a></Link>
                <Link href="#"><a className="p-16 rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 text-coolGray-500 hover:text-coolGray-900 font-medium">Hu </a></Link>
                <Link href="#"><a className="p-16 rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 text-coolGray-500 hover:text-coolGray-900 font-medium">Hu </a></Link>
                <Link href="#"><a className="p-16 rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 text-coolGray-500 hover:text-coolGray-900 font-medium">Hu </a></Link>
            </div> */}
            <span className="text-center pt-6 text-gray-400"> &copy; {new Date().getFullYear() || '2022'} Lanas.dev </span>

            </div>
            {/* <button
                className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button> */}
        </footer>

    );
}

export default Footer;