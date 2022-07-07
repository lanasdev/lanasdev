import Link from "next/link";


const TopBar = () => {
    return (
        <div className="flex w-full flex-col md:flex-row items-baseline justify-between py-16">
            <h1 className="text-bold text-6xl dark:text-white/80 dark:hover:text-white font-semibold ">
                <Link href="/"><a>Lanas.</a></Link>
            </h1>
            <h2 className="text-2xl pt-8 md:pt-0">
                Web craftsmenship for <span className="hover:underline decoration-amber-500 ">thriving</span> ecommerce shops
            </h2>
        </div>
    );
}
export default TopBar