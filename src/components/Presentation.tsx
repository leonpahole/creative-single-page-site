import Image from "next/image";
import Hero from "public/images/mobile/image-hero.jpg";

export const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation-hero-mobile-container">
        <Image
          src={Hero}
          alt=""
          className="presentation-hero-mobile"
          sizes="(min-width: 800px) 0wv, 100vw"
          fill
        />
      </div>
      <div className="presentation-content">
        <h1 className="presentation-heading">
          Branding & website design agency
        </h1>
        <p className="presentation-description">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="presentation-button">Learn more</button>
      </div>
    </section>
  );
};
