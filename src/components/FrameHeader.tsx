import { LightSweep } from "./LightSweep";

export function FrameHeader({ eventName }: { eventName: string }) {
  return (
    <header
      className="
        w-full py-6 px-6
        bg-linear-to-r from-indigo-900/80 via-indigo-950/70 to-black/80
        text-white text-center
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        border-b border-white/10
        backdrop-blur-md
      "
    >
      <h1
        className="
        text-5xl font-extrabold uppercase tracking-[0.2em]
        drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
        relative overflow-hidden
      "
      >
        <span className="relative z-10">{eventName}</span>

        {/* animação isolada → sem poluir o H1 */}
        <LightSweep />
      </h1>

      <p className="mt-2 text-sm md:text-base tracking-widest font-light opacity-80">
        Fotos em tempo real • Compartilhe o momento
      </p>
    </header>
  );
}
