import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechCraft Agency',
    url: 'https://techcraftagency.com',
    logo: 'https://techcraftagency.com/logo.png',
    description: 'Professional web development agency specializing in web applications, Android apps, desktop applications, and college projects.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'customer service',
      email: 'contact@techcraftagency.com',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://twitter.com/techcraftagency',
      'https://facebook.com/techcraftagency',
      'https://linkedin.com/company/techcraftagency',
      'https://github.com/techcraftagency'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TechCraft Agency',
    url: 'https://techcraftagency.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://techcraftagency.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'TechCraft Agency'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
            description: 'Full-stack web applications with React, Next.js, Node.js'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Android App Development',
            description: 'Native and cross-platform mobile apps'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desktop Application Development',
            description: 'Cross-platform desktop software solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'College Project Assistance',
            description: 'Academic project development and guidance'
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://techcraftagency.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://techcraftagency.com/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Portfolio',
        item: 'https://techcraftagency.com/#portfolio'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://techcraftagency.com/#contact'
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
    </>
  );
};

export default StructuredData;