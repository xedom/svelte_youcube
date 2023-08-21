import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';
import Log from '$lib/utils/logger';

export const load: PageServerLoad = async ({ params }) => {
  try {
    Log.serverInfo("/video[id] fetching: http://127.0.0.1:5173/api/videos/"+params.id);
    const res = await fetch('http://127.0.0.1:5173/api/videos/'+params.id);
    const data = await res.json();

    const video: Video&{comments: Comment[]}|undefined = data.video;

    if (video) return { video };

    throw error(404, 'Not found');
  } catch (error) {
    Log.serverError("subs")
  }
};
