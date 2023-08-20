import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import type { Video } from '$lib/db/types';
import { getVideoWithComments } from '$lib/db/videos';

export const GET: RequestHandler = async ({ url, params }) => {
  try {
    const videoId = parseInt(params.id);
    const video = await getVideoWithComments(videoId);
  
    // return new Response(String(random));
    return json({
      video,
    });
  } catch(err) {
    console.log("SERVER ERROR > /api/videos[id]");
    console.log(err);
    return json({
      videos: [],
    });
  }
};