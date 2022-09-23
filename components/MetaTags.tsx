const MetaTags = () => {
  return (
    <>
      {/* <!-- Primary Meta Tags --> */}
      <title>Lanas Web Design</title>
      <meta name="title" content="Lanas Web Design" />
      <meta
        name="description"
        content="Lanas designs & builds fast and responsible Websites for startups and businesses alike. "
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lanas.dev/" />
      <meta property="og:title" content="Lanas Web Design" />
      <meta
        property="og:description"
        content="Lanas designs & builds fast and responsible Websites for startups and businesses alike. "
      />
      <meta property="og:image" content="" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lanas.dev/" />
      <meta property="twitter:title" content="Lanas Web Design" />
      <meta
        property="twitter:description"
        content="Lanas designs & builds fast and responsible Websites for startups and businesses alike. "
      />
      <meta property="twitter:image" content="" />
    </>
  );
};

export default MetaTags;
