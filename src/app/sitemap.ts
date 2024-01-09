import { EventsAPIResponse } from '@/Content/types';
import { API_URL } from '@/services/enums';

async function getEvents() {
  const res = await fetch(
    `${API_URL}/sextou/v1/events/?page=1&after=2023-08-01&before=2023-08-31`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function sitemap() {
  const data: EventsAPIResponse = await getEvents();

  const posts = data.posts?.map((post) => {
    return {
      url: `https://sextou.rio/event/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    };
  });

  return [
    {
      url: 'https://sextou.rio/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    //   <url>
    //   <loc>https://sextou.rio/category/zona-norte</loc>
    //   <lastmod>2024-01-09</lastmod>
    //   <changefreq>weekly</changefreq>
    //   <priority>0.8</priority>
    // </url>
    // {
    //   url: 'https://acme.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    ...posts,
  ];
}
