import Link from "next/link";
import cn from "classnames";
// import { withRouter, NextRouter } from "next/router";

// const TopBar = ({ router }) => {
const TopBar = ({ isBig, DataTopBar }) => {
  // const currentPath = router.asPath

  return (
    <div className="flex w-full flex-col items-baseline justify-between py-16 md:flex-row">
      <h1 className="text-bold text-6xl font-semibold decoration-midnight hover:underline dark:text-white/80 dark:decoration-white dark:hover:text-white ">
        <Link href="/">
          <a>
            {DataTopBar.title || "Lanas."}
          </a>
        </Link>
      </h1>
      <h2 className="pt-8 text-2xl md:pt-0">
        {DataTopBar.subheading || "Web craftsmenship for thriving businesses."}
      </h2>
    </div>
  );
};
// export default withRouter(TopBar);
export default TopBar;
