import type { User } from './types';
import { fetchUser, getRandomDuration } from '$lib/utils/fetch';

let usersCache: User[] = [{
  id: 1001,
  username: 'Pingu',
  avatar: '/src/lib/icons/profile.gif',
  subs: 420,
  password: 'nootnoot',
  name: 'pingu de bro',
  email: 'pingu@noot.com',
  videos: 69,
}];

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

  return addUser(newUser);
}

export function addUser(user: User): User {
  user = {
    ...user,
    avatar: `https://i.pravatar.cc/120?u=${user.id}`
  }
  usersCache.push(user);
  return user;
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
