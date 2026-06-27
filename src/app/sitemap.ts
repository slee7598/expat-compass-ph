import { MetadataRoute } from "next";

const base = "https://expatcompassph.com";
const lastmod = "2026-06-27";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                           lastModified: lastmod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/visas`,                lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/marriage`,             lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/cost-of-living`,       lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/housing`,              lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/healthcare`,           lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/banking`,              lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/transportation`,       lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/city-guides`,          lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/steve-recommends`,     lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`,                lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
  ];
}
