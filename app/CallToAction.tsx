import Contactform from "./Contactform";
import i18n from "lib/i18n";
import Balancer from "react-wrap-balancer";

import cn from "classnames";

const CallToAction = ({ locale = "en" }) => {
  return (
    <section className="relative flex flex-col pt-48 md:flex-row md:items-start md:justify-between">
      <div>
        <h4 className=" text-gray-600 dark:text-gray-400">
          <Balancer>{i18n.contact.subtitle[locale]}</Balancer>
        </h4>

        <h3 className="pb-16 pt-2 text-2xl font-semibold md:pb-0 md:text-4xl">
          <Balancer>{i18n.contact.title[locale]}</Balancer>
        </h3>
      </div>
      <Contactform locale={locale} />
    </section>
  );
};

export default CallToAction;
