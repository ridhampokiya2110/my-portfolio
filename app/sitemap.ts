import type { MetadataRoute } from "next";

const SITE_URL = "https://ridhampokiya.vercel.app";
const NOW = new Date();

/**
 * sitemap.ts — Next.js App Router sitemap
 *
 * Covers all sections of the single-page portfolio.
 * Single-page apps use anchor URLs as separate sitemap entries
 * so crawlers can index each section's content separately.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/#about`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#skills`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#experience`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/#side-projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#blog`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // External sitemap entries for owned products
    {
      url: "https://www.heeratrack.com",
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://validexio.com",
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
