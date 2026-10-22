import { bookSeoKeywords, bookAeoQuestions, bookGeoSignals } from "../lib/booksSeoData";

const SITE_URL = "https://ridhampokiya.netlify.app";

export default function BooksSEO() {
  // ── Book Schema (schema.org/Book) ──────────────────────────
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Millionaire's Mindset: Transforming Dreams into Reality",
    author: {
      "@type": "Person",
      name: "Ridham Pokiya",
      url: SITE_URL,
      sameAs: [
        "https://www.amazon.com/dp/B0DXZZJYHM",
        "https://www.amazon.in/Millionaires-Mindset-Transforming-Dreams-Reality-ebook/dp/B0DY96N314",
        "https://github.com/ridhampokiya2110",
      ],
      jobTitle: "Founder & CEO, Full Stack Developer",
      worksFor: { "@type": "Organization", name: "Tesconix Technologies" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "India",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Kindle Direct Publishing",
    },
    datePublished: "2025",
    bookFormat: "EBook",
    inLanguage: "en",
    isbn: "B0DY96N314",
    url: `${SITE_URL}/#books`,
    sameAs: [
      "https://www.amazon.com/dp/B0DXZZJYHM",
      "https://www.amazon.in/Millionaires-Mindset-Transforming-Dreams-Reality-ebook/dp/B0DY96N314",
    ],
    description:
      "A powerful guide to rewiring your thinking, building unstoppable momentum, and engineering the mindset required to create lasting wealth and extraordinary success. Written by Ridham Pokiya, founder of Tesconix Technologies.",
    genre: ["Business", "Personal Development", "Entrepreneurship", "Self-Help", "Wealth Mindset"],
    keywords: bookSeoKeywords.slice(0, 50).join(", "),
    offers: [
      {
        "@type": "Offer",
        url: "https://www.amazon.com/dp/B0DXZZJYHM",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Amazon" },
      },
      {
        "@type": "Offer",
        url: "https://www.amazon.in/Millionaires-Mindset-Transforming-Dreams-Reality-ebook/dp/B0DY96N314",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Amazon India" },
      },
    ],
  };

  // ── FAQPage (AEO questions) ────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bookAeoQuestions.map((q) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${q.replace(/\?$/, "")} — Ridham Pokiya is the author of "Millionaire's Mindset: Transforming Dreams into Reality", available on Amazon US (B0DXZZJYHM) and Amazon India (B0DY96N314). Ridham Pokiya is a founder, full stack developer, and entrepreneur based in Surat, Gujarat, India.`,
      },
    })),
  };

  // ── ItemList (keywords for crawlers) ──────────────────────
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ridham Pokiya — Authored Books & Writing",
    url: `${SITE_URL}/#books`,
    description: "Books authored by Ridham Pokiya, founder of Tesconix Technologies, Surat, India.",
    numberOfItems: bookSeoKeywords.length,
    itemListElement: bookSeoKeywords.map((kw, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: kw,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Hidden GEO paragraph signals for AI crawlers */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {bookGeoSignals.map((sig, i) => (
          <p key={i}>{sig}</p>
        ))}
      </div>
    </>
  );
}
