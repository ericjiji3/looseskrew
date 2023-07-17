import { topTracks } from '../lib/spotify.js'

export default async function handler(req, res) {
  const response = await topTracks();
  const { items } = await response.json();

  console.log('hi');

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(tracks);
}