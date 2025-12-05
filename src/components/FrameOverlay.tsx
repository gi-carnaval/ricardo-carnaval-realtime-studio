type FrameOverlayProps = {
  eventName: string;
  companyHandle?: string;
};

export function FrameOverlay({ eventName, companyHandle = "@ricardo_carnaval" }: FrameOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col z-50">

      {/* -------------------------------------------------
          TOPO – título cinematográfico / broadcast
      --------------------------------------------------- */}
      <header
        className="
          w-full py-5 px-4
          bg-linear-to-r from-violet-900 via-fuchsia-800 to-pink-700
          text-white text-center
          shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          border-b border-white/10
          backdrop-blur-md
        "
      >
        <h1 className="
          text-5xl font-extrabold tracking-[0.15em]
          drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]
          animate-[pulse_5s_ease-in-out_infinite]
        ">
          {eventName}
        </h1>

        <p className="mt-1 text-sm opacity-90 tracking-wide uppercase">
          Fotos em tempo real • Compartilhe o momento
        </p>
      </header>


      {/* -------------------------------------------------
          ÁREA CENTRAL – reservada para slideshow
      --------------------------------------------------- */}
      <div className="flex-1 relative"></div>


      {/* -------------------------------------------------
          RODAPÉ – ticker estilo TV com animação
      --------------------------------------------------- */}
      <footer
        className="
    w-full h-14
    bg-linear-to-r from-black/80 to-indigo-900/70
    border-t border-white/10
    backdrop-blur-md overflow-hidden
    shadow-[0_-4px_20px_rgba(0,0,0,0.5)]
  "
      >
        <div className="relative w-full h-full flex items-center overflow-hidden">

          {/* Faixa que se move */}
          <div
            className="
        flex whitespace-nowrap
        text-white text-lg font-semibold tracking-wide
        animate-scrollTicker
      "
          >
            {/* BLOCO 1 */}
            <span className="px-10">
              📸 Poste suas fotos no Instagram e marque <span className="text-orange-400">{companyHandle}</span> —
              Aproveite o álbum em tempo real —
              Compartilhe sua melhor lembrança —
              Fotos entrando automaticamente no telão —
            </span>

            {/* BLOCO 2 (duplicado para evitar o espaço vazio) */}
            <span className="px-10">
              📸 Poste suas fotos no Instagram e marque <span className="text-orange-400">{companyHandle}</span> —
              Aproveite o álbum em tempo real —
              Compartilhe sua melhor lembrança —
              Fotos entrando automaticamente no telão —
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
