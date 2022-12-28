import Link from "next/link";
import Marquee from "./Marquee";

export default async function Page() {
  // Fetch data directly in a Server Component
  // Forward fetched data to your Client Component
  return (
    <>
      <header className="px-8 pb-4">
        <Marquee text="web design • web development • ecommerce • web design • web development • ecommerce • web design • web development • ecommerce • web design • web development • ecommerce" />
        <h1 className=" pt-4 text-justify text-9xl after:inline-block after:w-full after:content-none	">
          Lanas.
        </h1>
      </header>
      <main>
        <Link
          href={"/project/volker-voltaik"}
          className="block h-[50vh] w-full rounded-lg bg-white "
        ></Link>
      </main>
    </>
  );
}
