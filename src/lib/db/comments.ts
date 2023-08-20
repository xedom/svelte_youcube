import type { Comment } from './types';
import { fetchComments } from '$lib/utils/fetch';
import { getUser } from './users';

let commentsCache: Comment[] = [];

export function getComments(): Comment[] {
  return commentsCache;
}

export async function handleFetchComments(videoid: number) {
  const fetchedComments = await fetchComments(videoid);
  if (!fetchedComments) return;
  if (fetchedComments.length === 0) return [];

  for(let i = 0; i < fetchedComments.length; i++) {
    const fetched_comment: any = fetchedComments[i];
    const comment: Comment = {
      id: fetched_comment.id,
      user: undefined,
      userid: fetched_comment.user.id,
      videoid: fetched_comment.postId,
      body: fetched_comment.body,
    };

    const user = await getUser(comment.userid);
    if (!user) continue; // add function to provide a dummy user
    comment.user = user;

    addComment(comment);
  }
}

export function addComment(comment: Comment): void {
  commentsCache.push(comment);
}

export function deleteComment(id: number): void {
  commentsCache = commentsCache.filter((comment) => comment.id !== id);
}

export function getCommentsByVideoId(videoid: number): Comment[] {
  const comments: Comment[] = commentsCache.filter((comment) => comment.videoid === videoid);
  if (comments.length > 0) return comments;

  fetchComments(videoid);
  return commentsCache.filter((comment) => comment.videoid === videoid);
}
