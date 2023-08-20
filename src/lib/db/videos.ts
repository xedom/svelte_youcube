import type { Video, Comment } from './types';
import { fetchPosts, fetchRandomPhotos, fetchComments,
  getRandomDate, getRandomDuration,
  getRandomViews,
} from '$lib/utils/fetch';
import { getUser } from './users';
import { getCommentsByVideoId, handleFetchComments } from './comments';

let videosCache: Video[] = [];

export function getVideos(): Video[] {
  return videosCache;
}

export async function getVideosCount(count: number): Promise<Video[]> {
  if (count <= 0) return [];
  if (count >= videosCache.length) {
    const photos = await fetchRandomPhotos(count);
    const posts = await fetchPosts(count);
    
    for(let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const thumbnail = photos[i];
      const userId = post.userId;

      let video: Video = {
        id: post.id,
        userid: post.userId,
        title: post.title,
        description: post.body,
        duration: getRandomDuration(),
        thumbnail: thumbnail,
        likes: getRandomDuration(),
        dislikes: getRandomDuration(),
        views: getRandomViews(),
        timestamp: getRandomDate(),
      }

      const user = await getUser(userId);
      if (!user) continue; // add function to provide a dummy user
      video.user = user;

      handleFetchComments(post.id);

      addVideo(video);
    }
  }

  return videosCache.slice(0, count);
}

export function getVideo(id: number): Video|undefined {
  return videosCache.find((v) => v.id === id);
}

export function getVideoWithComments(id: number): Video&{comments: Comment[]}|undefined {
  const video: Video|undefined = getVideo(id);
  if (!video) return undefined;

  const comments = getCommentsByVideoId(id);

  return {
    ...video,
    comments,
  };
}

export function addVideo(video: Video): void {
  videosCache.push(video);
}

export function removeVideo(id: number): void {
  videosCache = videosCache.filter((v) => v.id !== id);
}

export function updateVideo(id: number, video: Video): void {
  videosCache = videosCache.map((v) => v.id === id ? video : v);
}

export function clearVideos(): void {
  videosCache = [];
}

export function getVideosByUser(userid: number): Video[] {
  return videosCache.filter((v) => v.userid === userid);
}
