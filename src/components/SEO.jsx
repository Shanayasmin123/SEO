
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://seo-two-ruby.vercel.app";
const SITE_NAME = "Glow Beauty Salon";

function SEO({ title, description, path = "/" }) {
  const canonicalUrl = new URL(path, `${SITE_URL}/`).href;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}

export default SEO;
