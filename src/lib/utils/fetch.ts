import { UNSPLASH_KEY } from '$env/static/private';
import { lengthPhotos, getPhotos } from '$lib/db/photos';
import Log from '$lib/utils/logger';

const UNSPLASH_BASEURL = 'https://api.unsplash.com/photos/random/';

export const TOPICS = ["trucks", "cars", "mountains", "films", "cats", "cities"];

export async function fetchRandomPhotos(count: number, query: string = getRandomTopic()): Promise<string[]> {
  try {
    if (count <= lengthPhotos()) return Promise.resolve(getPhotos());

    const countRefetch = Math.ceil((count-lengthPhotos())/30);

    // const queryParam = `query=${query}`;
    const queryParam = ``;
    const clientid = `client_id=${UNSPLASH_KEY}`;
    const orientation = `orientation=landscape`;
    const countParam = `count=${count}`;
    const url = `${UNSPLASH_BASEURL}?${queryParam}&${clientid}&${orientation}&${countParam}&`;

    const requests = Array(countRefetch).fill(url);
    const responses = await Promise.all(requests.map((url) => fetch(url)));
    const datas = await Promise.all(responses.map((res) => res.json()));
    const photos = datas.map((data) => data.map((photo: any) => photo.urls.small)).flat();

    return photos;
  } catch (error) {
    Log.serverError("fetchRandomPhotos", error);
    return Promise.resolve([]);
  }
}

export async function fetchPosts(count: number): Promise<any[]> {
  try {
    const url = `https://dummyjson.com/posts?limit=${count}&skip=0&select=title,body,userId`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log("status", res.status, res.statusText);
    // console.log("data", data);
    return data.posts;
  } catch (error) {
    Log.serverError("getPosts");
    return Promise.resolve([]);
  }
}

export async function fetchComments(postId: number): Promise<any[]> {
  try {
    const url = `https://dummyjson.com/comment/post/${postId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.comments;
  } catch (error) {
    Log.serverError("getComments");
    return Promise.resolve([]);
  }
}

export async function fetchUser(userid: number): Promise<any|undefined> {
  try {
    const url = `https://dummyjson.com/users/${userid}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    Log.serverError("getUser");
    return Promise.resolve(undefined);
  }
}

export const getRandomDate = () => Date.now()+Math.round(Math.random()*999*1000);
export const getRandomViews = () => Math.round(Math.random()*999)*1000;
export const getRandomTopic = () => TOPICS[Math.round(Math.random()*(TOPICS.length-1))]
export const getRandomDuration = () => Math.round(Math.random()*999);
