import { useEffect } from 'react';

export function SEOSchemaMarkup() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Dr. Kalyan Ayurveda',
      url: 'https://drkalyanayu rveda.com',
      telephone: '+91-92813-32544',
      email: 'contact@drkalyanayurveda.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Flat No.102, Plot No.309, Near Volkswagen Service Centre',
        addressLocality: 'Prashanth Hills Colony',
        addressRegion: 'Raidurg',
        postalCode: '500081',
        addressCountry: 'IN'
      },
      sameAs: [
        'https://www.facebook.com/drkalyanayu rveda',
        'https://www.instagram.com/drkalyanayu rveda',
        'https://www.linkedin.com/company/drkalyanayu rveda'
      ],
      medicalSpecialty: [
        'Ayurvedic Medicine',
        'Fertility Treatment',
        'Chronic Disease Management',
        'Panchakarma Therapy'
      ],
      description: 'Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation',
      image: 'https://drkalyanayu rveda.com/logo.png',
      priceRange: '₹35,000 - ₹95,000'
    };

    // Local Business Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Dr. Kalyan Ayurveda',
      image: 'https://drkalyanayu rveda.com/logo.png',
      description: 'Premier Ayurvedic wellness clinic in Hyderabad offering Panchakarma, fertility treatment, and chronic disease management',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Flat No.102, Plot No.309',
        addressLocality: 'Raidurg',
        addressRegion: 'Telangana',
        postalCode: '500081',
        addressCountry: 'IN'
      },
      telephone: '+91-92813-32544',
      url: 'https://drkalyanayu rveda.com',
      priceRange: '₹35,000 - ₹95,000',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '13:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '17:00',
          closes: '21:00'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1'
      }
    };

    // FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long is each treatment program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer three programs: 7-day intensive, 14-day therapeutic, and 21-day deep healing.'
          }
        },
        {
          '@type': 'Question',
          name: 'What conditions do you treat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We treat chronic diseases, digestive issues, respiratory conditions, skin problems, mental health issues, and fertility problems.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are your success rates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Success rates vary by condition: 70-80% for musculoskeletal, 65-75% for metabolic, 60-70% for skin, and 65-70% for fertility.'
          }
        }
      ]
    };

    // Aggregate Rating Schema
    const aggregateRatingSchema = {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127'
    };

    // Person Schema (Dr. Kalyan)
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dr. Kalyan',
      jobTitle: 'Ayurvedic Physician',
      url: 'https://drkalyanayu rveda.com',
      sameAs: [
        'https://www.linkedin.com/in/drkalyan',
        'https://www.instagram.com/drkalyan'
      ],
      knowsAbout: [
        'Ayurvedic Medicine',
        'Panchakarma Therapy',
        'Fertility Treatment',
        'Chronic Disease Management'
      ],
      description: 'Experienced Ayurvedic physician specializing in Panchakarma detoxification and fertility treatment'
    };

    // Add all schemas to head
    const addSchema = (schema: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(organizationSchema);
    addSchema(localBusinessSchema);
    addSchema(faqSchema);
    addSchema(aggregateRatingSchema);
    addSchema(personSchema);

    return () => {
      // Cleanup is handled by React
    };
  }, []);

  return null; // This component doesn't render anything
}
