import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Log from '$lib/utils/logger';

import type { Video } from '$lib/db/types';
import { getVideosCount, getVideosCountFrom } from '$lib/db/videos';
import { getPhotos } from '$lib/db/photos';

export const GET: RequestHandler = async ({ url }) => {
  try {
    Log.serverInfo("/api/videos", url.searchParams);
    const countParam = url.searchParams.get("count");
    const skipParam = url.searchParams.get("skip");
    let count = countParam ? parseInt(countParam) : 1;
    let skip = skipParam ? parseInt(skipParam) : 0;
    count = Math.max(count, 1);
    count = Math.min(count, 150);
    let videos: Video[] = [];

    if (skip) {
      skip = Math.max(skip, 0);
      videos = await getVideosCountFrom(count, skip);
    } else {
      videos = await getVideosCount(count);
    }

    // return new Response(String(random));
    return json({ videos, });
  } catch(err) {
    Log.serverError("/api/videos", err);
    return json({
      videos: [],
    });
  }
};
