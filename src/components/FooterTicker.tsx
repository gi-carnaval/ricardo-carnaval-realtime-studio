export function FooterTicker({ companyHandle }: { companyHandle: string }) {
  const message = (
    <>
      🔵 Ao vivo — 📸 Poste no Instagram e marque{" "}
      <span className="text-cyan-300">{companyHandle}</span> — 💍 Aproveite o
      álbum — ⭐ Compartilhe suas memórias —
    </>
  );

  return (
    <footer
      className="
        w-full h-14
        bg-linear-to-r from-black/80 to-indigo-900/70
        border-t border-white/10
        backdrop-blur-md overflow-hidden
        shadow-[0_-4px_20px_rgba(0,0,0,0.5)]
      "
    >
      <div
        className="
          h-full flex whitespace-nowrap items-center text-white
          text-lg font-semibold tracking-wide
          animate-scrollTicker
        "
      >
        <span className="px-10">{message}</span>
        <span className="px-10">{message}</span> {/* duplicação automática */}
      </div>
    </footer>
  );
}
