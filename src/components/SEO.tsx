import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  name = "Natural Dental & Bio in Dent", 
  type = "website", 
  keywords = "dentista, odontología, clínica dental, Natural Dental, Bio in Dent, ortodoncia, odontología biológica"
}: SEOProps) {
  const fullTitle = `${title} | Natural Dental & Bio in Dent`;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
