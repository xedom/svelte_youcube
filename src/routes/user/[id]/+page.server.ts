import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video, User, Comment } from '$lib/db/types';
import Log from '$lib/utils/logger';

export const load: PageServerLoad = async ({ params }) => {
  try {
    Log.serverInfo("/user[id] fetching: http://127.0.0.1:5173/api/users/"+params.id);
    const res = await fetch('http://127.0.0.1:5173/api/users/'+params.id);
    const data = await res.json();

    const user: User = data.user;
    const comments: Comment[] = data.comments;
    const videos: Video[] = data.videos;

    if (user) return { user, comments, videos, };

    throw error(404, 'Not found');
  } catch (error) {
    Log.serverError("subs", error);
  }
};
