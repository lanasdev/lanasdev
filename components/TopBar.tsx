import Link from "next/link";
import cn from "classnames";

const TopBar = ({ isBig }) => {
  return (
    <div className="flex w-full flex-col items-baseline justify-between py-16 md:flex-row">
      <h1 className="text-bold text-6xl font-semibold decoration-midnight hover:underline dark:text-white/80 dark:decoration-white dark:hover:text-white ">
        <Link href="/">
          <a>Lanas.</a>
        </Link>
      </h1>
      <h2 className="pt-8 text-2xl md:pt-0">
        Web craftsmenship for{" "}
        <span className="decoration-amber-500 hover:underline ">thriving</span>{" "}
        businesses.
      </h2>
    </div>
  );
};
export default TopBar;
