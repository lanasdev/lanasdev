import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const LanguageBar = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <ul className="flex flex-row justify-center sm:justify-start">
      {locales.map((locale, index) => {
        const { pathname, query, asPath } = router;
        return (
          <li key={locale} className="">
            <span className="">{index == 1 ? "/" : ""}</span>
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
              className={cn(
                locale === activeLocale
                  ? "underline decoration-gray-500 "
                  : "hover:underline hover:decoration-amber-500 ",
                "hover:text-success px-2 decoration-2 transition-colors duration-200"
              )}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageBar;
