import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';
import Log from '$lib/utils/logger';

export const load: PageServerLoad = async ({ params }) => {
  try {
    Log.serverInfo("/watchlater fetching: http://127.0.0.1:5173/api/videos?count=18");
    const res = await fetch('http://127.0.0.1:5173/api/videos?count=18');
    const data = await res.json();

    const videos: Video[] = data.videos;

    return { videos };
  } catch (error) {
    Log.serverError("subs");
  }
};
