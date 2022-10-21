import Link from "next/link";
import cn from "classnames";
import i18n from "lib/i18n";
// import { withRouter, NextRouter } from "next/router";

const TopBar = ({ locale = "en" }) => {
  return (
    <div className="flex w-full flex-col items-baseline justify-between py-16 md:flex-row">
      <h1 className="text-bold text-6xl font-semibold decoration-midnight hover:underline dark:text-white/80 dark:decoration-white dark:hover:text-white ">
        <Link href="/">
          <a>{"Lanas."}</a>
        </Link>
      </h1>
      <h2 className="pt-8 text-2xl md:pt-0">
        {/* {"Web craftsmenship for thriving businesses."} */}
        {i18n.home.subtitle[locale]}
      </h2>
    </div>
  );
};
export default TopBar;
