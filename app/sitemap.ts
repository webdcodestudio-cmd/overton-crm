import type { MetadataRoute } from "next";

const BASE_URL = "https://overton.in";
const today = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── MAIN PAGE ──
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── LEGAL PAGES (SEO ke liye zaroori) ──
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
