import { useEffect, useState, useMemo } from "react";
import { usePhotoPolling } from "../hook/usePhotoPolling";
import { getQrValue, getSafeIndex } from "../utils";
import { NotificationBadge } from "./NotificationBadge";
import { QRCodePanel } from "./QrCodePanel";
import { SlideshowImage } from "./SlideshowImage";

type Props = {
  apiUrl?: string;
  driveLink?: string;
  cycleMs?: number;
  qrCycleMs?: number;
  eventId: string;
};

export function TvSlideshow({
  apiUrl,
  driveLink,
  cycleMs = 5000,
  // qrCycleMs = 15000,
  eventId,
}: Props) {
  const url = useMemo(() => `${apiUrl}?eventId=${eventId}`, [apiUrl, eventId]);
  const { photos, recentHash } = usePhotoPolling({ url });

  const [current, setCurrent] = useState(0);

  const safeIndex = getSafeIndex({ photos, current });

  const currentPhoto = photos[safeIndex];
  const qrValue = getQrValue({ driveLink, currentPhoto });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = currentPhoto?.link ?? "";
  };

  useEffect(() => {
    if (!photos.length) return;

    const nextSlide = () =>
      setCurrent((c) => (photos.length ? (c + 1) % photos.length : 0));

    const id = setInterval(nextSlide, cycleMs);
    return () => clearInterval(id);
  }, [photos.length, cycleMs]);

  return (
    <div className="w-full h-full bg-linear-to-r from-indigo-950/30 via-blue-950 to-indigo/10 text-white relative overflow-hidden">
      {recentHash && <NotificationBadge />}
      {photos.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
          Aguardando fotos...
        </div>
      ) : (
        photos.map((photo, index) => (
          <SlideshowImage
            key={photo.hash}
            photo={photo}
            active={index === safeIndex}
            onError={handleImageError}
          />
        ))
      )}
      <QRCodePanel value={qrValue} />
    </div>
  );
}
