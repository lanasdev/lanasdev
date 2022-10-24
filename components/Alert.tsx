import cn from "classnames";
import i18n from "../lib/i18n";
// import { useRouter } from "next/router";

export default function Alert({ preview, locale = "en" }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <section>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              {i18n.alert.draftContent[locale]}{" "}
              <a
                href="/api/exit-preview"
                className="hover:text-cyan underline transition-colors duration-200"
              >
                {i18n.alert.clickCta[locale]}
              </a>{" "}
              {i18n.alert.exitPreview[locale]}
            </>
          ) : (
            <>
              {i18n.alert.publishedContent[locale]}{" "}
              <a
                href="/api/preview?secret=777"
                className="hover:text-cyan underline transition-colors duration-200"
              >
                {i18n.alert.clickCta[locale]}
              </a>{" "}
              {i18n.alert.enterPreview[locale]}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
