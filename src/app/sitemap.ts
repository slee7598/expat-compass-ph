import { MetadataRoute } from "next";
import LAST_UPDATED from "@/lib/lastUpdated";

const base = "https://expatcompassph.com";
const d = (route: string) => LAST_UPDATED[route]?.iso ?? "2026-10-04";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                              lastModified: d("/"),                       changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/visas`,                   lastModified: d("/visas"),                  changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/marriage`,                lastModified: d("/marriage"),               changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/divorce-philippines`,     lastModified: d("/divorce-philippines"),    changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/cost-of-living`,          lastModified: d("/cost-of-living"),         changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/housing`,                 lastModified: d("/housing"),                changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/healthcare`,              lastModified: d("/healthcare"),             changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/banking`,                 lastModified: d("/banking"),                changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/transportation`,          lastModified: d("/transportation"),         changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/city-guides`,             lastModified: d("/city-guides"),            changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/dating-philippines`,      lastModified: d("/dating-philippines"),     changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/retirement-benefits`,     lastModified: d("/retirement-benefits"),    changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/moving-to-philippines`,   lastModified: d("/moving-to-philippines"),  changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/arrival-guide`,           lastModified: d("/arrival-guide"),          changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/income-abroad`,           lastModified: d("/income-abroad"),          changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/expat-toolkit`,           lastModified: d("/expat-toolkit"),          changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/red-flag-checklist`,      lastModified: d("/red-flag-checklist"),     changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`,                   lastModified: d("/about"),                  changeFrequency: "weekly", priority: 0.8 },
  ];
}
