import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import type { Video, User, Comment } from '$lib/db/types';
import { getUser } from '$lib/db/users';
import { getCommentsByUserId } from '$lib/db/comments';
import { getVideosByUser } from '$lib/db/videos';

export const GET: RequestHandler = async ({ url, params }) => {
  try {
    const userId = parseInt(params.id);
    const user: User|undefined = await getUser(userId);
    const videos: Video[] = getVideosByUser(userId);
    const comments: Comment[] = getCommentsByUserId(userId);
  
    // return new Response(String(random));
    return json({
      user,
      comments,
      videos,
    });
  } catch(err) {
    console.log("SERVER ERROR > /api/videos[id]");
    console.log(err);
    return json({});
  }
};
