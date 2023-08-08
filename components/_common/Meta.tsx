import Head from "next/head";

const Meta = ({
  pageTitle,
  pageUrl,
  pageOgImage,
  noIndex = false,
}: {
  pageTitle: string;
  pageUrl: string;
  pageOgImage: string;
  noIndex?: boolean;
}) => {
  const defaultTitle = "bono website";
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description =
    "bonoのポートフォリオサイトです。身につけたスキルをまとめています。";
  const siteName = "bono website";
  const domain = "";
  const url = pageUrl ? `https://${domain}/${pageUrl}/` : `https://${domain}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="viewport" content="width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#65a30d" />
      {/* noIndex === true の場合のみ noindex 有効化 */}
      {noIndex && <meta name="robots" content="noindex" />}
      <link rel="shortcut icon" href="/miso-icon.ico" />
    </Head>
  );
};

export default Meta;