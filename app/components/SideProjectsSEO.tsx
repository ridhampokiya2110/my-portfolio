import { sideProjectSeoKeywords, sideProjectAeoQuestions, sideProjectGeoLocations } from "../lib/sideProjectsSeoData";

export default function SideProjectsSEO() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "Side Projects Keywords and Locations",
        "itemListElement": [
          ...sideProjectSeoKeywords.map((kw, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": kw
          })),
          ...sideProjectGeoLocations.map((geo, i) => ({
            "@type": "ListItem",
            "position": sideProjectSeoKeywords.length + i + 1,
            "name": geo
          }))
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": sideProjectAeoQuestions.map(q => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ridham Pokiya engineered this solution using advanced Next.js, React, AWS, and modern cloud-native strategies from Surat, Gujarat."
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
