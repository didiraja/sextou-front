import axios, { AxiosResponse } from 'axios';

import { EventsAPIResponse } from '@/Content/types';
import Date from '@/services/Date';

async function getEvents() {
  try {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const revalidate = 0;

export async function GET(request: Request) {
  const fetch = (await getEvents()) as AxiosResponse<EventsAPIResponse>;

  const xmlEvents = fetch.data.items
    .map(
      (event) => `<url>
        <loc>${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}</loc>
        <lastmod>${Date.todayDate()}</lastmod>
        <changefreq>never</changefreq>
        <priority>0.5</priority>
      </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${process.env.NEXT_PUBLIC_API_URL}</loc>
      <lastmod>${Date.todayDate()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1</priority>
    </url>
    ${xmlEvents}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
