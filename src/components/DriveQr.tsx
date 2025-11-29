import RawQRCode from "react-qr-code";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QRCode = (RawQRCode as any).default || RawQRCode;

export function DriveQr({ link }: { link: string }) {

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white p-4 rounded-xl shadow-xl border border-zinc-700">
        <QRCode
          size={400}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={link}
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-indigo-300 hover:text-indigo-200 underline"
      >
        Abrir no navegador
      </a>
    </div>
  );
}
