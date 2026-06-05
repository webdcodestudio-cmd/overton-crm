export default function SchemaMarkup() {
  const schemas = [
    // ── ORGANIZATION ──
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Overton CRM",
      url: "https://overton.in",
      logo: "https://overton.in/images/logo-white.png",
      description:
        "AI-powered real estate CRM software for Indian developers, brokers, and mandate firms.",
      foundingDate: "2025",
      email: "[info@overton.in](mailto:info@overton.in)",
      telephone: "+91-9023016487",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/115114255",
        "https://www.facebook.com/profile.php?id=61570960408144",
        "https://www.instagram.com/overton.crm",
        "https://www.youtube.com/@OvertonCRM",
      ],
    },

    // ── WEBSITE ──
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Overton CRM",
      url: "https://overton.in",
      description:
        "AI-powered real estate CRM for Indian developers, brokers, and mandate firms.",
      publisher: {
        "@type": "Organization",
        name: "Overton CRM",
      },
    },

    // ── SOFTWARE APPLICATION ──
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Overton CRM",
      description:
        "AI-powered real estate CRM software with lead management, inventory management, WhatsApp CRM, RERA document workflows, payment tracking, and property portal integrations.",
      url: "https://overton.in",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "CRM Software",
      operatingSystem: "Web, Android, iOS",
      inLanguage: "en-IN",

      offers: {
        "@type": "Offer",
        price: "999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },

      featureList: [
        "AI Lead Qualification",
        "AI Priority List",
        "AI Sales Reporting",
        "Lead Management",
        "Inventory Management",
        "RERA Document Generation",
        "WhatsApp CRM",
        "99acres Integration",
        "MagicBricks Integration",
        "Housing.com Integration",
        "Stage-wise Payment Tracking",
        "Site Visit Scheduling",
        "Call Recording",
        "Mobile Application",
        "Role-Based Access Control",
      ],

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      provider: {
        "@type": "Organization",
        name: "Overton CRM",
      },
    },

    // ── FAQ PAGE ──
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a real estate CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A real estate CRM helps developers and brokers manage leads, follow-ups, site visits, inventory, customer communication, and sales pipelines from a single platform.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use Overton CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Overton CRM is designed for real estate developers, brokers, mandate firms, agencies, and builder sales teams across India.",
          },
        },
        {
          "@type": "Question",
          name: "Can I import existing leads into Overton CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Leads can be imported from Excel files, CSV files, and other CRM systems, making migration simple and fast.",
          },
        },
        {
          "@type": "Question",
          name: "Can Overton CRM capture leads from Meta Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Leads generated from Facebook and Instagram lead forms can be automatically captured and assigned within the CRM.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage multiple projects in one account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Overton CRM supports multi-project management, allowing teams to manage inventory, leads, and sales activities across multiple developments.",
          },
        },
        {
          "@type": "Question",
          name: "Does Overton CRM include inventory management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Teams can manage projects, towers, floors, units, availability status, and inventory allocation from a centralized dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track customer payments and dues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Overton CRM supports stage-wise payment tracking, customer payment schedules, and outstanding balance monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "How long does implementation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most teams can get started quickly with account setup, project configuration, and lead import assistance provided during onboarding.",
          },
        },
        {
          "@type": "Question",
          name: "Is training provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Product onboarding and training assistance are available to help teams adopt the platform effectively.",
          },
        },
        {
          "@type": "Question",
          name: "Does Overton CRM support mobile access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sales teams can access leads, tasks, follow-ups, and project information while working remotely or on-site.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
