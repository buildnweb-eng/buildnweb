import Script from "next/script";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Buildnweb",
    url: "https://Buildnweb",
    logo: "https://Buildnweb/logo.png",
    description:
      "Professional web development agency specializing in web applications, Android apps, desktop applications, and college projects.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "customer service",
      email: "buildnweb@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
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
    name: "Buildnweb",
    url: "https://Buildnweb",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://Buildnweb/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: {
      "@type": "Organization",
      name: "Buildnweb",
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
            name: "Web Application Development",
            description:
              "Full-stack web applications with React, Next.js, Node.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Android App Development",
            description: "Native and cross-platform mobile apps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desktop Application Development",
            description: "Cross-platform desktop software solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "College Project Assistance",
            description: "Academic project development and guidance",
          },
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
        item: "https://Buildnweb",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://Buildnweb/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: "https://Buildnweb/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://Buildnweb/#contact",
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
