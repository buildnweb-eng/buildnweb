import Script from "next/script";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: "BuildnWeb",
    url: "https://buildnweb.in",
    logo: "https://buildnweb.in/logo.png",
    description:
      "ROI-driven development agency that launches high-converting websites in 7 days for SaaS, e-commerce, and service businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
      addressLocality: "India",
      streetAddress: "India"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "sales",
      email: "hello@buildnweb.in",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "UK", "AU", "CA"],
      serviceArea: {
        "@type": "Country",
        name: "India"
      }
    },
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: ["Bank Transfer", "UPI", "Card Payment"],
    openingHours: "Mo-Fr 09:00-18:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "BuildnWeb delivered our SaaS website in exactly 7 days and our demo bookings increased by 285%. Amazing results!"
      },
      {
        "@type": "Review", 
        author: {
          "@type": "Person",
          name: "Michael Chen"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Our e-commerce revenue grew 40% within 2 months. Their conversion optimization really works."
      }
    ],
    sameAs: [
      "https://twitter.com/Buildnwebagency",
      "https://facebook.com/Buildnwebagency", 
      "https://linkedin.com/company/Buildnwebagency",
      "https://github.com/Buildnwebagency",
    ],
    founder: {
      "@type": "Person",
      name: "BuildnWeb Team",
      jobTitle: "Development Agency Founders"
    },
    numberOfEmployees: "5-10",
    foundingDate: "2020",
    slogan: "Launch Revenue-Driving Websites in 7 Days"
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
        name: "SaaS Website Development",
        item: "https://buildnweb.in/services/saas-website-development",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "E-commerce Development",
        item: "https://buildnweb.in/services/ecommerce-development",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Service Business Websites",
        item: "https://buildnweb.in/services/service-business-websites",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Portfolio",
        item: "https://buildnweb.in/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Contact",
        item: "https://buildnweb.in/#contact",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you launch a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We guarantee a 7-day launch for all our website development projects. This includes design, development, optimization, and deployment with conversion tracking."
        }
      },
      {
        "@type": "Question", 
        name: "Do you guarantee results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer ROI guarantees. For SaaS websites, we guarantee 3x more demo bookings. For e-commerce, we guarantee 40% higher AOV. For service businesses, we guarantee 5x more qualified leads within 30-60 days."
        }
      },
      {
        "@type": "Question",
        name: "What types of businesses do you work with?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "We specialize in SaaS companies, e-commerce businesses, and professional service providers. Our revenue-focused approach is designed for businesses that want measurable growth from their website investment."
        }
      },
      {
        "@type": "Question",
        name: "What's included in your development process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our process includes business audit, conversion strategy, custom design and development, analytics setup, CRM integration, mobile optimization, SEO optimization, and ongoing support with performance guarantees."
        }
      }
    ]
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
};

export default StructuredData;
