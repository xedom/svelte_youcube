import type { User } from './types';
import { fetchUser, getRandomDuration } from '$lib/utils/fetch';

let usersCache: User[] = [];

export function getUsers(): User[] {
  return usersCache;
}

export async function getUser(id: number): Promise<User|undefined> {
  const user = usersCache.find((u) => u.id === id);
  if (user) return user;

  // fetching user
  const fetchedUser = await fetchUser(id);
  if (!fetchedUser) return undefined;

  const newUser: User = {
    id: fetchedUser.id,
    username: fetchedUser.username,
    password: fetchedUser.password,
    name: fetchedUser.maidenName,
    email: fetchedUser.email,
    avatar: fetchedUser.image,
    subs: getRandomDuration(),
    videos: 0, // add some logic
  }

  addUser(newUser);
  return newUser;
}

export function addUser(user: User): void {
  usersCache.push(user);
}

export function removeUser(id: number): void {
  usersCache = usersCache.filter((u) => u.id !== id);
}

export function updateUser(id: number, user: User): void {
  usersCache = usersCache.map((u) => u.id === id ? user : u);
}

export function clearUsers(): void {
  usersCache = [];
}

export function getUserByUsername(username: string): User|undefined {
  return usersCache.find((u) => u.username === username);
}

export function getUserByEmail(email: string): User|undefined {
  return usersCache.find((u) => u.email === email);
}
