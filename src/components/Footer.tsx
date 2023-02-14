import Image from "next/image";
import BgPatternWaveRed from "public/images/desktop/bg-pattern-wave-red.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Image src={BgPatternWaveRed} alt="" className="footer-wave" />
      <h1 className="footer-heading">
        Let&apos;s build something great together.
      </h1>
      <button type="button" className="footer-button">
        Schedule a Call
      </button>
    </footer>
  );
};
