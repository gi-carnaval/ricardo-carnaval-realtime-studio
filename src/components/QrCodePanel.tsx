import RawQRCode from "react-qr-code";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QRCode = (RawQRCode as any).default || RawQRCode;

export function QRCodePanel({ value }: { value: string }) {
  return (
    <div
      className="
        absolute bottom-10 right-10
        backdrop-blur-xl bg-white/10
        border border-white/40
        p-4 pb-6 rounded-2xl
        shadow-[0_0_30px_rgba(0,0,0,0.6)]
        flex flex-col items-center gap-2
      "
    >
      <div className="bg-white p-2">
        <QRCode size={200} style={{ width: "100%", height: "auto" }} value={value} />
      </div>

      <div className="text-white/80 text-xs">
        Aponte a câmera para abrir o álbum
      </div>
    </div>
  );
}