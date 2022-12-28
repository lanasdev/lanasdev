import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="px-8 pt-4 pb-12">
      <ul className="flex justify-between">
        <li className="h-8 w-8 bg-slate-400"></li>
        <div className="flex gap-8 text-xl">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/about">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
