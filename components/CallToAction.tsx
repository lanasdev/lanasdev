import Contactform from "./Contactform";
import i18n, { Locale } from "@/lib/i18n";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

const CallToAction = ({ locale = "en" }: { locale: Locale }) => {
  return (
    <section className="px-8 -mx-8 md:-mx-16 md:px-16 from-amber-400 to-amber-500 bg-linear-to-b pb-24 relative flex flex-col pt-48 md:flex-row md:items-start md:justify-between">
      {/* px-8 md:px-16 pb-48 */}
      <div className="flex-1">
        <h4 className=" text-accent dark:text-gray-400">
          <Balancer>{i18n.contact.subtitle[locale]}</Balancer>
        </h4>

        <h3 className="pb-16 pt-2 text-3xl font-semibold md:pb-0 md:text-4xl">
          <Balancer>{i18n.contact.title[locale]}</Balancer>
        </h3>
      </div>
      <Contactform locale={locale} />
    </section>
  );
};

export default CallToAction;
