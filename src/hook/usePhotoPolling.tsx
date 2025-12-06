// src/hooks/usePhotoPolling.ts
import { useEffect, useRef, useState } from "react";
import type { Photo } from "../types";

export function usePhotoPolling(opts?: {
  url?: string;
  intervalMs?: number;
}) {
  const url = opts?.url || (import.meta.env.VITE_TV_API_URL+'?eventId='+import.meta.env.VITE_EVENT_ID || "http://localhost:4000/api/photos");
  const intervalMs = opts?.intervalMs ?? 12000;

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [recentHash, setRecentHash] = useState<string | null>(null);

  const lastLenRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    let timer = null;

    async function fetchOnce() {
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return;
        const data: Photo[] = await res.json();
        if (!mounted) return;

        // if array length increased -> latest photo arrived
        if (data.length > (lastLenRef.current || 0)) {
          const newest = data[data.length - 1];
          setRecentHash(newest.hash);
          // clear recent flag after some time (effect highlight)
          setTimeout(() => setRecentHash(null), 4000);
        }

        lastLenRef.current = data.length;
        // simple dedupe / replace to keep ref stable
        setPhotos(prev => {
          // quick equality by length + last item
          if (prev.length === data.length && prev[data.length - 1]?.hash === data[data.length - 1]?.hash) {
            return prev;
          }
          return data;
        });
      } catch (err) {
        console.warn("poll error", err);
      }
    }

    fetchOnce();
    timer = setInterval(fetchOnce, intervalMs);

    return () => { mounted = false; if (timer) clearInterval(timer); };
  }, [url, intervalMs]);

  return { photos, recentHash };
}
