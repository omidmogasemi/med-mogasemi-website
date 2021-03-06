/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({lang, meta}) {
  const { site, file } = useStaticQuery(
    graphql`
    {
      site {
        siteMetadata {
          title
          domain
          image
          author
          description
          keywords
          og_description
        }
      }
    }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:image`,
          content: `/src/images/IMG_0026.jpg`,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.og_description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property:`og:url`,
          content: `mogasemi.com`
        },
        {
          name: `twitter:card`,
          content: `Hi, I'm Med.`,
        },
        {
          name: `twitter:image`,
          content: `/src/images/IMG_0026.jpg`,
        },
        {
          name:  `twitter:site`,
          content: `@hack_davis`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: `Hi, I'm Med.`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title:``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
