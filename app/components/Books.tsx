"use client";
import { useEffect, useRef, useState } from "react";

interface Book {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tags: string[];
  accent: string;
  accentSecondary: string;
  amazonUs: string;
  amazonIn: string;
  publisher: string;
  year: string;
  pages: string;
  category: string;
  quote: string;
}

const books: Book[] = [
  {
    id: "millionaires-mindset",
    number: "01",
    title: "Millionaire's Mindset",
    subtitle: "Transforming Dreams into Reality",
    description:
      "A powerful guide to rewiring your thinking, building unstoppable momentum, and engineering the mindset required to create lasting wealth and extraordinary success.",
    longDesc:
      "This book distills the core psychological frameworks that separate high-achievers from the rest — covering belief systems, decision-making under pressure, financial intelligence, and the discipline required to turn ambitious visions into tangible results.",
    tags: ["Mindset", "Wealth", "Entrepreneurship", "Self-Mastery", "Success"],
    accent: "#ffb700",
    accentSecondary: "#ff9500",
    amazonUs: "https://www.amazon.com/dp/B0DXZZJYHM",
    amazonIn: "https://www.amazon.in/Millionaires-Mindset-Transforming-Dreams-Reality-ebook/dp/B0DY96N314",
    publisher: "Kindle Direct Publishing",
    year: "2025",
    pages: "Kindle Edition",
    category: "Business & Personal Development",
    quote: "Your mindset is either your greatest asset or your greatest liability.",
  },
];

function AmazonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={color} opacity="0.25">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );
}

function BookCard({ book, index, visible }: { book: Book; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      id={book.id}
      itemScope
      itemType="https://schema.org/Book"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        background: hovered
          ? `linear-gradient(135deg, rgba(20,16,8,0.98) 0%, rgba(30,20,5,0.99) 100%)`
          : `linear-gradient(135deg, rgba(14,12,6,0.95) 0%, rgba(20,16,5,0.97) 100%)`,
        border: `1px solid ${hovered ? book.accent + "55" : book.accent + "22"}`,
        borderTop: `1px solid ${hovered ? book.accent + "44" : "rgba(255,255,255,0.08)"}`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        padding: "clamp(2.5rem, 5vw, 4rem)",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        boxShadow: hovered
          ? `0 40px 100px rgba(0,0,0,0.7), 0 0 80px ${book.accent}18, inset 0 1px 0 ${book.accent}25`
          : `0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)`,
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {/* Luxury glow orb top-right */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 300, height: 300,
        background: `radial-gradient(circle, ${book.accent}10 0%, transparent 65%)`,
        transform: "translate(30%, -30%)",
        pointerEvents: "none",
        transition: "opacity 0.4s",
        opacity: hovered ? 1.5 : 0.6,
      }} />

      {/* Top row: number + category + year */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Book number */}
          <span style={{
            fontFamily: "var(--font-code)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.4em",
            color: book.accent,
            opacity: 0.6,
          }}>
            NO. {book.number}
          </span>
          <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
          <span style={{
            fontFamily: "var(--font-code)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--t3)",
          }}>
            {book.category}
          </span>
        </div>
        <span style={{
          fontFamily: "var(--font-code)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.25em",
          color: book.accent,
          background: `${book.accent}12`,
          border: `1px solid ${book.accent}30`,
          padding: "4px 14px",
          borderRadius: 100,
        }}>
          {book.year}
        </span>
      </div>

      {/* Quote block */}
      <div style={{ marginBottom: 28, position: "relative", paddingLeft: 0 }}>
        <QuoteIcon color={book.accent} />
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
          fontStyle: "italic",
          color: book.accent,
          opacity: 0.75,
          marginTop: 8,
          letterSpacing: "0.01em",
          lineHeight: 1.7,
        }}>
          {book.quote}
        </p>
      </div>

      {/* Title block */}
      <div style={{ marginBottom: 28 }}>
        <h3
          itemProp="name"
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: 10,
            background: `linear-gradient(130deg, #fff 0%, ${book.accent} 60%, ${book.accentSecondary} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {book.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1rem, 2vw, 1.35rem)",
          fontWeight: 600,
          color: "var(--t2)",
          letterSpacing: "0.01em",
          opacity: 0.7,
        }}>
          {book.subtitle}
        </p>
      </div>

      {/* Decorative rule */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${book.accent}50, ${book.accentSecondary}30, transparent)`,
        marginBottom: 28,
        borderRadius: 1,
      }} />

      {/* Description */}
      <p
        itemProp="description"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--t2)",
          lineHeight: 1.9,
          maxWidth: "68ch",
          marginBottom: 16,
        }}
      >
        {book.description}
      </p>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--t3)",
        lineHeight: 1.85,
        maxWidth: "64ch",
        marginBottom: 36,
        opacity: 0.8,
      }}>
        {book.longDesc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {book.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-code)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 6,
              background: `${book.accent}10`,
              color: book.accent,
              border: `1px solid ${book.accent}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Meta row */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 36,
        padding: "16px 20px",
        background: "rgba(255,255,255,0.025)",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.05)",
      }}>
        {[
          { label: "Publisher", value: book.publisher },
          { label: "Format", value: book.pages },
          { label: "Author", value: "Ridham Pokiya" },
        ].map(item => (
          <div key={item.label}>
            <span style={{ fontFamily: "var(--font-code)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--t3)", opacity: 0.6, display: "block", marginBottom: 4 }}>
              {item.label}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--t1)" }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <a
          href={book.amazonUs}
          target="_blank"
          rel="noopener noreferrer"
          itemProp="url"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 28px",
            borderRadius: 100,
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: `linear-gradient(135deg, ${book.accent}dd, ${book.accentSecondary}aa)`,
            color: "#0a0800",
            textDecoration: "none",
            boxShadow: `0 8px 32px ${book.accent}30`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 18px 52px ${book.accent}50`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${book.accent}30`;
          }}
        >
          Read on Amazon US <AmazonIcon />
        </a>
        <a
          href={book.amazonIn}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 28px",
            borderRadius: 100,
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: `${book.accent}12`,
            color: book.accent,
            border: `1.5px solid ${book.accent}40`,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = `${book.accent}22`;
            (e.currentTarget as HTMLElement).style.borderColor = book.accent;
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = `${book.accent}12`;
            (e.currentTarget as HTMLElement).style.borderColor = `${book.accent}40`;
            (e.currentTarget as HTMLElement).style.transform = "";
          }}
        >
          Read on Amazon India <AmazonIcon />
        </a>
      </div>

      {/* Hidden SEO microdata */}
      <span itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
        <span itemProp="name">Ridham Pokiya</span>
      </span>
      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: "none" }}>
        <span itemProp="name">{book.publisher}</span>
      </span>
    </article>
  );
}

export default function Books() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="books" ref={ref} className="section" aria-labelledby="books-heading">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="s-eyebrow">Authored Works</p>
          <h2
            id="books-heading"
            className="s-title font-display g-gold"
            style={{ letterSpacing: "-0.03em" }}
          >
            Books I've Written
          </h2>
          <p className="s-sub" style={{ maxWidth: "60ch", margin: "1rem auto 0", fontSize: "1rem" }}>
            Beyond code and companies — distilling years of learning, failure, and breakthrough into words that shape minds and unlock potential.
          </p>
        </div>

        {/* Books Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom tagline */}
        <div style={{ textAlign: "center", marginTop: "4rem", opacity: 0.5 }}>
          <p style={{
            fontFamily: "var(--font-code)",
            fontSize: 11,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--t3)",
          }}>
            Available on Amazon Kindle Worldwide
          </p>
        </div>

      </div>
    </section>
  );
}
