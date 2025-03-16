import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <Helmet>
      <title>{title} | VetCare</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={`${title} | VetCare`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | VetCare`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;