import Contactform from "./Contactform";
import i18n from "lib/i18n";

const CallToAction = ({ locale = "en" }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 md:flex-row md:items-start md:justify-between">
      <h3 className="pb-8 text-2xl md:pb-0">{i18n.contact.title[locale]}</h3>
      <Contactform locale={locale} />
    </div>
  );
};

export default CallToAction;
