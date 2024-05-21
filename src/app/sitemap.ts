import { MetadataRoute } from "next/types";

import { getHotelsIds } from "@/clientApi/hotelsIds";

const BASE_URL = "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      priority: 1,
      url: BASE_URL,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/about`,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/blog`,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/hotels`,
    },
    {
      priority: 0.7,
      url: `${BASE_URL}/map`,
    },
    {
      priority: 0.7,
      url: `${BASE_URL}/travelers`,
    },

    {
      priority: 0.7,
      url: `${BASE_URL}/profile`,
    },
    {
      priority: 0.6,
      url: `${BASE_URL}/privacy-policy`,
    },
    {
      priority: 0.6,
      url: `${BASE_URL}/terms`,
    },
    ...(await getHotelsIds()).hotels.map((hotel) => ({
      lastModified: new Date().toISOString(),
      priority: 0.7,
      url: `${BASE_URL}/hotels/${hotel.id}`,
    })),
  ];
}
