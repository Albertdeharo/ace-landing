import { Helmet } from "react-helmet-async";

/* eslint-disable react/prop-types */
export default function SEO({ title, description, name, type }) {
  const defaultTitle = "ACE PRO GRIP";
  const defaultDescription =
    "Descubre Ace Pro Grip, el mejor spray antideslizante que mejora tu agarre y reduce las vibraciones.";
  const defaultName = "Ace Pro Grip";
  const defaultType = "website";

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoName = name || defaultName;
  const seoType = type || defaultType;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      {/* End standard metadata tags */}
      <meta property="og:type" content={seoType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:site_name" content={seoName} />

      {/* Twitter card */}
      <meta name="twitter:creator" content={seoName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
}
