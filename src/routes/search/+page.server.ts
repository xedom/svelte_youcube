import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';
import Log from '$lib/utils/logger';

export const load: PageServerLoad = async ({ params, url }) => {
  try {
    const query = url.searchParams.get("query");
    Log.serverInfo(`/search?query=${query} fetching: http://127.0.0.1:5173/api/videos?count=6&skip=0`);
    const res = await fetch('http://127.0.0.1:5173/api/videos?count=6&skip=0');
    const data = await res.json();

    const videos: Video[] = data.videos;

    if (videos) return { videos };

    throw error(404, 'Not found');
  } catch (error) {
    Log.serverError("subs")
  }
};
