import Image from "next/image";
import ImageStrategic from "public/images/desktop/image-strategic.jpg";
import BgPatternWaveRed from "public/images/desktop/bg-pattern-wave-red.svg";

export const Strategic = () => {
  return (
    <section className="strategic">
      <div className="strategic-left">
        <Image className="strategic-img" src={ImageStrategic} alt="" />
        <Image
          className="strategic-divider-img"
          src={BgPatternWaveRed}
          alt=""
        />
      </div>

      <div className="strategic-right">
        <h1 className="strategic-heading">
          <em className="strategic-emphasis">Design</em> is strategic.
        </h1>
        <p className="strategic-description">
          A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.
        </p>

        <button className="strategic-button">Schedule a call</button>
      </div>
    </section>
  );
};
