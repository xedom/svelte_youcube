
const photosCache: string[] = [];

export function addPhoto(photo: string): void {
  photosCache.push(photo);
}

export function addPhotos(photos: string[]): void {
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    if (photosCache.includes(photo)) continue;
    photosCache.push(photo);
  }
  // photosCache.push(...photos);
}

export function getPhotos(): string[] {
  return photosCache;
}

export function getPhoto(index: number): string|undefined {
  return photosCache[index];
}

export function lengthPhotos(): number {
  return photosCache.length;
}
