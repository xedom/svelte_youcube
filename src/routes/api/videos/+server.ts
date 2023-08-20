import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import type { Video } from '$lib/db/types';
import { getVideosCount } from '$lib/db/videos';
import { getPhotos } from '$lib/db/photos';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const countParam = url.searchParams.get("count");
    let count = countParam ? parseInt(countParam) : 1;
    count = Math.min(count, 150);
    
    const videos: Video[] = await getVideosCount(count);

    console.log(getPhotos());

    // return new Response(String(random));
    return json({
      videos,
    });
  } catch(err) {
    console.log("SERVER ERROR > /api/videos");
    console.log(err);
    return json({
      videos: [],
    });
  }
};