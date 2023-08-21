import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Log from '$lib/utils/logger';

export const GET: RequestHandler = ({ url }) => {
  Log.serverInfo("/api/videos", url.searchParams);

  const min = Number(url.searchParams.get('min') ?? '0');
  const max = Number(url.searchParams.get('max') ?? '1');

  const d = max - min;

  if (isNaN(d) || d < 0) {
    throw error(400, 'min and max must be numbers, and min must be less than max');
  }

  const random = min + Math.random() * d;

  return new Response(String(random));
};

export const POST: RequestHandler = async ({ request }) => {
  const { a, b } = await request.json();
  return json(a + b);
};
