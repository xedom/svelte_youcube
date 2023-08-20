import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';
 
export const load: PageServerLoad = async ({ params }) => {
  try {
    const res = await fetch('http://127.0.0.1:5173/api/videos?count=18');
    const data = await res.json();
   
    const videos: Video[] = data.videos;
  
    return { videos };
  } catch (error) {
    console.log("SERVER ERROR > subs")
  }
};