import { MetadataRoute } from "next";

const base = "https://expatcompassph.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/visas`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/marriage`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/cost-of-living`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/housing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/healthcare`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/banking`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/transportation`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/city-guides`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/steve-recommends`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
