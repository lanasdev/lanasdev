import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter();
  const aClass = "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 "

  return (
    <nav className="flex sm:justify-center space-x-4 py-2 pt-6">
      {[
        ["Lanas", "/"],
        ["About", "/about"],
        ["Contact", "/contact"],
      ].map(([title, url]) => (
        <Link href={url} key={title}>
          <a className={router.pathname == url ? aClass + "underline decoration-wavy decoration-yellow-300 " : aClass} >
            {title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
