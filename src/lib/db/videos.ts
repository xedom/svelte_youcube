import type { Video, Comment } from './types';
import { fetchPosts, fetchRandomPhotos, fetchComments,
  getRandomDate, getRandomDuration,
  getRandomViews,
} from '$lib/utils/fetch';
import { getUser } from './users';
import { getCommentsByVideoId, handleFetchComments } from './comments';
import { addPhotos } from '$lib/db/photos';

let videosCache: Video[] = [];

export function getVideos(): Video[] {
  return videosCache;
}

export async function getVideosCountFrom(count: number, skip: number): Promise<Video[]> {
  if (count <= 0) return [];
  // checking if the skip is not out of bounds
  // if so, we fix the skip
  if (skip+count >= 150) skip = 150-count;

  const videos = await getVideosCount(count+skip);
  return videos.slice(skip, skip+count);
}

export async function getVideosCount(count: number): Promise<Video[]> {
  if (count <= 0) return [];
  if (count <= videosCache.length) return videosCache.slice(0, count);
  const photos = await fetchRandomPhotos(count);

  addPhotos(photos);
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

  if (posts.length == 0) return [];

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
  videosCache.find(v => video.id === v.id) || videosCache.push(video);

  // for (let cachedVideo of videosCache) {
  //   if (video.id === cachedVideo.id) continue;
  //   videosCache.push(video);
  // }
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
