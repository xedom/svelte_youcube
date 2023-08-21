import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';
import Log from '$lib/utils/logger';

export const load: PageServerLoad = async ({ params }) => {
  try {
    Log.serverInfo("/subs fetching: http://127.0.0.1:5173/api/videos?count=25");
    const res = await fetch('http://127.0.0.1:5173/api/videos?count=25');
    const data = await res.json();

    const videos: Video[] = data.videos;

    return { videos };

    // throw error(404, 'Not found');
  } catch (error) {
    Log.serverError("subs");
  }
};
