export function NotificationBadge() {
  return (
    <div
      className="
        absolute top-10 right-10
        backdrop-blur-xl bg-white/10
        border border-white/40
        px-6 py-4 rounded-2xl
        shadow-[0_0_25px_rgba(0,0,0,0.6)]
        flex items-center gap-3
        animate-fadeInSlide
        z-9999
      "
    >
      <div className="relative">
        <span
          className="
            absolute inset-0 rounded-full
            bg-cyan-400/40 blur-xl
            animate-pulseGlow
          "
        />
        <span
          className="
            relative h-4 w-4 rounded-full
            bg-cyan-500
            animate-dotGlow
          "
        />
      </div>

      <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
        Novas fotos adicionadas
      </span>
    </div>
  );
}