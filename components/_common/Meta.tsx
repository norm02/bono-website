import Head from "next/head";

const Meta = ({
  pageTitle,
  pageUrl,
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
  const domain = "https://bono-website.vercel.app/";
  const url = pageUrl ? `https://${domain}/${pageUrl}/` : `https://${domain}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="title" content={title} />
      <meta property="type" content="website" />
      <meta property="url" content={url} />
      <meta property="description" content={description} />
      <meta property="site_name" content={siteName} />
      <meta property="locale" content="ja_JP" />
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="format-detection" content="telephone=no" />
      {/* noIndex === true の場合のみ noindex 有効化 */}
      {noIndex && <meta name="robots" content="noindex" />}
      <link rel="shortcut icon" href="/miso-icon.ico" />
    </Head>
  );
};

export default Meta;
