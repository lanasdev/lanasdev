import Link from "next/link";
import cn from "classnames";
import i18n from "lib/i18n";
// import { withRouter, NextRouter } from "next/router";

const TopBar = ({ locale = "en" }) => {
  return (
    <div className="flex w-full flex-col items-baseline justify-between py-16 md:flex-row">
      <Link href="/">
        <a>
          <h1 className="text-6xl font-bold decoration-midnight hover:underline dark:text-white dark:decoration-white  ">
            {"Lanas."}
          </h1>
        </a>
      </Link>

      <h2 className="pt-6 text-2xl font-semibold md:pt-0">
        {/* {"Web craftsmenship for thriving businesses."} */}
        {i18n.home.subtitle[locale]}
      </h2>
    </div>
  );
};
export default TopBar;
