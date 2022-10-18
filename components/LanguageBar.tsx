import Link from "next/link";
import { useRouter } from "next/router";

const LanguageBar = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li
              key={locale}
              className="mr-0 mt-0 mb-0 flex flex-col items-center md:mb-0 md:flex-row md:justify-end"
            >
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a className="hover:text-success p-1 underline transition-colors duration-200">
                  {locale}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageBar;
