import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Educational Organization Schema
    const educationalOrgSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "School of Greek Language and Culture",
      "alternateName": "ΣΧΟΛΕΙΟ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ ΚΑΙ ΠΟΛΙΤΙΣΜΟΥ",
      "description": "Authentic Greek language and culture education for all ages in Tampa, Florida. Preserving Hellenic heritage through language, education and culture immersion since 2022.",
      "url": "https://yourschool.com",
      "logo": "https://yourschool.com/images/tampagreekschoollogo.png",
      "image": "https://yourschool.com/images/tampagreekschoollogo.png",
      "foundingDate": "2022",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2418 W Swann Ave",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33609",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.9506",
        "longitude": "-82.4572"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "admissions",
        "areaServed": "Tampa Bay Area",
        "availableLanguage": ["English", "Greek"]
      },
      "sameAs": [
        "https://www.facebook.com/yourschool",
        "https://www.instagram.com/yourschool"
      ],
      "hasOfferingCatalog": {
        "@type": "OfferingCatalog",
        "name": "Greek Language and Culture Programs",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Greek Language Classes",
            "description": "Comprehensive Greek language instruction for all skill levels",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "School of Greek Language and Culture"
            }
          },
          {
            "@type": "Course",
            "name": "Greek Cultural Education",
            "description": "Immersive Greek cultural education including traditions, history, and customs",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "School of Greek Language and Culture"
            }
          }
        ]
      }
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://yourschool.com/#organization",
      "name": "School of Greek Language and Culture",
      "description": "Premier Greek language and culture school in Tampa, Florida",
      "url": "https://yourschool.com",
      "telephone": "+1-813-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2418 W Swann Ave",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33609",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.9506",
        "longitude": "-82.4572"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "12:00",
          "closes": "15:00"
        }
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Check",
      "currenciesAccepted": "USD"
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "School of Greek Language and Culture",
      "url": "https://yourschool.com",
      "description": "Official website of the School of Greek Language and Culture in Tampa, Florida",
      "inLanguage": "en-US",
      "copyrightYear": "2024",
      "copyrightHolder": {
        "@type": "EducationalOrganization",
        "name": "School of Greek Language and Culture"
      }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourschool.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Programs",
          "item": "https://yourschool.com#programs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Registration",
          "item": "https://yourschool.com#registration"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://yourschool.com#contact"
        }
      ]
    };

    // Add all schemas to the page
    const schemas = [
      educationalOrgSchema,
      localBusinessSchema,
      websiteSchema,
      breadcrumbSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default StructuredData;

