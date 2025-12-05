// src/components/TvSlideshow.tsx
import { useEffect, useState, useMemo } from "react";
import { usePhotoPolling } from "../hook/usePhotoPolling";

import RawQRCode from "react-qr-code";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QRCode = (RawQRCode as any).default || RawQRCode;

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
  const url = `${apiUrl}?eventId=${eventId}`;
  const { photos } = usePhotoPolling({ url });

  const [current, setCurrent] = useState(0);

  const safeIndex = useMemo(() => {
    if (photos.length === 0) return 0;
    return Math.min(current, photos.length - 1);
  }, [current, photos.length]);

  const currentPhoto = photos[safeIndex];
  const qrValue = driveLink || currentPhoto?.link || "";

  // Auto-advance slideshow
  useEffect(() => {
    if (photos.length === 0) return;
    const id = setInterval(
      () => setCurrent((c) => (photos.length ? (c + 1) % photos.length : 0)),
      cycleMs
    );
    return () => clearInterval(id);
  }, [photos.length, cycleMs]);

  return (
    <div className="w-full h-screen bg-black text-white relative overflow-hidden">

      {/* -------------------------
         IMAGE SLIDESHOW
       ------------------------- */}
      {photos.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
          Aguardando fotos...
        </div>
      ) : (
        photos.map((p, i) => {
          const isActive = i === safeIndex;

          return (
            <img
              key={p.hash}
              src={`https://lh3.googleusercontent.com/d/${p.id}=s2000`}
              onError={(e) => {
                e.currentTarget.src = p.link;
              }}
              alt={p.name}
              className={`
                absolute inset-0 w-full h-full object-contain
                transition-opacity duration-1000
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
              draggable={false}
            />
          );
        })
      )}
      <div className="
          absolute bottom-6 right-6
          bg-white p-3 rounded-lg shadow-xl
          flex flex-col items-center gap-3
          z-10
        "
      >
        <QRCode
          size={150}
          style={{ width: "100%", height: "auto" }}
          value={qrValue}
        />
        <div className="text-black text-xs leading-tight">
          Aponte a câmera para abrir o álbum
        </div>
      </div>
    </div>
  );
}
