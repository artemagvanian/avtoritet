import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title }) {
  const defaultDescription =
    "AVTOРИТЕТ – комиссионная авто площадка, специализирующаяся на продаже автомобилей с пробегом ВСЕХ марок и оказании смежных услуг.";
  const defaultTitle = "AVTOРИТЕТ – комиссионная автоплощадка";
  const author = "Denis Fesenko";
  const metaDescription = description || defaultDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
};

export default SEO;
