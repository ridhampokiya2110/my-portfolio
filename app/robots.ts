import type { MetadataRoute } from "next";

const SITE_URL = "https://ridhampokiya.vercel.app";

/**
 * robots.ts — Next.js App Router robots
 *
 * Allows all major search crawlers and AI crawlers.
 * Blocks only internal API routes and private files.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard search engine crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
        ],
      },
      // Allow Google specifically with max crawl
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      // Allow Bingbot
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
      // Allow AI / LLM crawlers (GEO)
      {
        userAgent: "GPTBot",          // OpenAI ChatGPT
        allow: "/",
      },
      {
        userAgent: "Google-Extended",  // Google Gemini
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",    // Perplexity AI
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",        // Anthropic Claude
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "YouBot",           // You.com
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
