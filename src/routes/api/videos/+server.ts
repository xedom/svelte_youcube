import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import type { Video } from '$lib/db/types';
import { getVideosCount, getVideosCountFrom } from '$lib/db/videos';
import { getPhotos } from '$lib/db/photos';

export const GET: RequestHandler = async ({ url }) => {
  try {
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

    // console.log(getPhotos());
    // return new Response(String(random));
    return json({ videos, });
  } catch(err) {
    console.log("SERVER ERROR > /api/videos");
    console.log(err);
    return json({
      videos: [],
    });
  }
};