import type { Photo } from "../types";

export function SlideshowImage({
  photo,
  active,
  onError,
}: {
  photo: Photo;
  active: boolean;
  onError: React.ReactEventHandler<HTMLImageElement>;
}) {
  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        transition-opacity duration-1000
        ${active ? "opacity-100" : "opacity-0"}
      `}
    >
      <img
        src={`https://lh3.googleusercontent.com/d/${photo.id}=s2000`}
        onError={onError}
        alt={photo.name}
        className="w-full h-full object-contain"
      />
    </div>
  );
}