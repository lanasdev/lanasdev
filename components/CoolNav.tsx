import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const CoolNav = () => {
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    ["0%", "10%", "-100%"]
  );

  return (
    <motion.nav
      style={
        {
          // y: headerY,
        }
      }
      className="fixed bottom-16 left-1/2 z-50 flex items-center justify-center rounded-2xl border border-white bg-midnight/75 text-white "
    >
      <div className="relative  flex w-auto items-center justify-center">
        <Link
          href="#"
          className="flex-1 p-4 px-8 hover:bg-midnight/50 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="#"
          className="flex-1 p-4 px-8 hover:bg-midnight/50 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="#"
          className="flex-1 p-4 px-8 hover:bg-midnight/50 hover:text-white"
        >
          About
        </Link>
        <Link
          href="#"
          className="flex-1 p-4 px-8 hover:bg-midnight/50 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default CoolNav;
