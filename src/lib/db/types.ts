
export type User = {
  id: number,
  username: string,
  password: string,
  name: string,
  email: string,
  avatar: string,
  subs: number,
  videos: number,
}

export type Video = {
  id: number,
  user?: User,
  userid: number,
  title: string,
  description: string,
  duration: number,
  thumbnail: string,
  likes: number,
  dislikes: number,
  views: number,
  timestamp: number,
}

// export type VideoWithUser = Video & {
//   user: User,
// }

export type Comment = {
  id: number,
  user?: User,
  userid: number,
  videoid: number,
  body: string,
}