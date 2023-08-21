import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Log from '$lib/utils/logger';

import type { Video } from '$lib/db/types';
import { getVideoWithComments } from '$lib/db/videos';

export const GET: RequestHandler = async ({ url, params }) => {
  try {
    Log.serverInfo("/api/videos", url.searchParams);
    const videoId = parseInt(params.id);
    const video = await getVideoWithComments(videoId);

    // return new Response(String(random));
    return json({
      video,
    });
  } catch(err) {
    Log.serverError("/api/videos[id]", err);
    return json({
      videos: [],
    });
  }
};
