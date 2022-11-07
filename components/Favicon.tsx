import i18n from "lib/i18n";
const fmLocale = "en";

const Favicon = (): JSX.Element => {
  return (
    <>
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      /> */}
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#f8f8ff" />

      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:image:height" content="1257" />
      <meta property="og:image:width" content="2400" />
      <meta
        property="og:description"
        content="Digital craftsmanship for the solar industry."
      />
      <meta property="og:title" content="Lanas - Web design" />
      <meta property="og:url" content="https://lanas.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={fmLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lanas_dev" />
      <meta name="twitter:creator" content="@lanas_dev" />
      <meta name="twitter:title" content="Lanas - Web design" />
      <meta name="twitter:description" content={i18n.home.subtitle[fmLocale]} />
      <meta name="twitter:image" content="/og-image.jpg" />
      <meta name="twitter:image:alt" content="Lanas - Web design" />
      <meta name="twitter:image:height" content="1257" />
      <meta name="twitter:image:width" content="2400" />
      <meta name="twitter:domain" content="lanas.dev" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Lanas" />
      <meta name="twitter:label2" content="Est. reading time" />
      <meta name="twitter:data2" content="3 minutes" />
      {/* <link rel="canonical" href="https://lanas.dev" />
        <link rel="alternate" href="https://lanas.dev" hrefLang="x-default" /> */}
      <link rel="alternate" href="https://lanas.dev" hrefLang="en" />
      <link rel="alternate" href="https://lanas.dev/de" hrefLang="de" />
    </>
  );
};

export default Favicon;
