import type { Photo } from "../types";

export function getSafeIndex({ photos, current }: { photos: Photo[], current: number }) {
  if (photos.length === 0) return 0;
  return Math.min(current, photos.length - 1);
}

export function getQrValue({ driveLink, currentPhoto }: { driveLink?: string, currentPhoto: Photo }) {
  return driveLink || currentPhoto?.link || "";
}