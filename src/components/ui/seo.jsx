import { Helmet } from "react-helmet-async";

export const SEO = ({ 
  title = "Zerthos - Modern Technology Solutions",
  description = "Leading provider of innovative technology solutions, digital transformation, and cutting-edge software development services.",
  keywords = "Zerthos, technology solutions, digital transformation, software development, innovation, tech company",
  image = "/logo.svg",
  url = "https://zerthos.com",
  type = "website",
  structuredData = null,
  canonical = null,
  noindex = false,
  nofollow = false
}) => {
  const fullUrl = canonical || `${url}${window.location.pathname}`;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zerthos",
    "url": "https://zerthos.com",
    "logo": "https://zerthos.com/logo.svg",
    "description": "Leading provider of innovative technology solutions and digital transformation services.",
    "sameAs": [
      "https://linkedin.com/company/zerthos",
      "https://twitter.com/zerthos"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "info@zerthos.com"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zerthos.com"
      }
    ]
  };

  // Add current page to breadcrumbs
  const currentPath = window.location.pathname;
  if (currentPath !== "/") {
    const pathSegments = currentPath.split("/").filter(segment => segment);
    pathSegments.forEach((segment, index) => {
      const pageName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      const pageUrl = `https://zerthos.com/${pathSegments.slice(0, index + 1).join("/")}`;
      
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": pageName,
        "item": pageUrl
      });
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zerthos" />
      <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="Zerthos" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      <meta property="twitter:site" content="@zerthos" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Zerthos" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
}; 