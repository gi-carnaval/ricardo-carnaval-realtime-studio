import { FooterTicker } from "./FooterTicker";
import { FrameHeader } from "./FrameHeader";

type FrameOverlayProps = {
  eventName: string;
  companyHandle?: string;
  children: React.ReactNode;
};

export function FrameOverlay({ eventName, companyHandle = "@ricardo_carnaval", children }: FrameOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col z-50 ">
      <FrameHeader eventName={eventName} />
      <div className="flex-1 relative bg-black">
        {children}
      </div>
      <FooterTicker companyHandle={companyHandle} />
    </div>
  );
}
