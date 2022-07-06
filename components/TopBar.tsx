import Link from "next/link";


const TopBar = () => {
    return (
        <div className="flex w-full items-baseline justify-between py-16">
            <h1 className="text-bold text-6xl dark:text-white/80 dark:hover:text-white font-semibold">
                <Link href="/"><a>Lanas.</a></Link>
            </h1>
            <h2 className="text-2xl">
                Web craftsmenship for thriving ecommerce shops
            </h2>
        </div>
    );
}
export default TopBar