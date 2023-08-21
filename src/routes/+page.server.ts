import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Video } from '$lib/db/types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const res = await Promise.all([
      fetch('http://127.0.0.1:5173/api/videos?count=6'),
      fetch('http://127.0.0.1:5173/api/videos?count=8'),
      fetch('http://127.0.0.1:5173/api/videos?count=9'),
      fetch('http://127.0.0.1:5173/api/videos?count=8'),
      fetch('http://127.0.0.1:5173/api/videos?count=3'),
    ]);
    const data = await Promise.all(res.map((f:any) => f.json()));
    const fetched_videos: Video[][] = data.map((d:any) => d.videos);

    return { videos: {
      sponsored_videos: fetched_videos[0],
      shorts_videos: fetched_videos[1],
      new_videos: fetched_videos[2],
      films_videos: fetched_videos[3],
      random_videos: fetched_videos[4],
    }};
  } catch (error) {
    // throw error(404, 'Not found');
    console.log("SERVER ERROR > PageServerLoad /");
  }
};