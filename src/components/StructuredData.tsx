import Script from "next/script";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BuildnWeb",
    url: "https://buildnweb.in",
    logo: "https://buildnweb.in/logo.png",
    description:
      "ROI-driven development agency that launches high-converting websites in 7 days for SaaS, e-commerce, and service businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "sales",
      email: "hello@buildnweb.in",
      availableLanguage: ["English"],
    },
    priceRange: "₹₹₹",
    sameAs: [
      "https://twitter.com/Buildnwebagency",
      "https://facebook.com/Buildnwebagency",
      "https://linkedin.com/company/Buildnwebagency",
      "https://github.com/Buildnwebagency",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BuildnWeb - ROI-Driven Development Agency",
    url: "https://buildnweb.in",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://buildnweb.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: {
      "@type": "ProfessionalService",
      name: "BuildnWeb",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "7-Day SaaS Website Launch",
            description:
              "High-converting SaaS website with demo booking optimization. Guaranteed 7-day delivery.",
          },
          price: "75000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Conversion Engine",
            description: "Revenue-optimized e-commerce site with AOV and conversion rate improvements.",
          },
          price: "200000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Service Business Lead Generator",
            description: "Lead generation website that drives qualified inbound calls and form submissions.",
          },
          price: "50000",
          priceCurrency: "INR",
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://buildnweb.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://buildnweb.in/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: "https://buildnweb.in/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://buildnweb.in/#contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
};

export default StructuredData;
