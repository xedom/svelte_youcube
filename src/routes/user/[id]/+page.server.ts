import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video, User, Comment } from '$lib/db/types';
 
export const load: PageServerLoad = async ({ params }) => {
  try {
    const res = await fetch('http://127.0.0.1:5173/api/users/'+params.id);
    const data = await res.json();
   
    const user: User = data.user;
    const comments: Comment[] = data.comments;
    const videos: Video[] = data.videos;
  
    if (user) return { user, comments, videos, };
    
    throw error(404, 'Not found');
  } catch (error) {
    console.log("SERVER ERROR > subs")
  }
};