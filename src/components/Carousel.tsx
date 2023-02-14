import Image from "next/image";
import BgPatternWavyWhite from "public/images/desktop/bg-pattern-wavy-white.svg";
import IconArrowPrevious from "public/images/desktop/icon-arrow-previous.svg";
import IconArrowNext from "public/images/desktop/icon-arrow-next.svg";
import ImageSlide1 from "public/images/desktop/image-slide-1.jpg";
import ImageSlide2 from "public/images/desktop/image-slide-2.jpg";
import ImageSlide3 from "public/images/desktop/image-slide-3.jpg";
import { useState } from "react";

const carouselItems = [
  {
    title: "Brand naming & guidelines",
    image: {
      src: ImageSlide1,
      title: "Lean Product Roadmap",
      subtitle: "2019 project",
    },
  },
  {
    title: "Brand identity & merchandise",
    image: {
      src: ImageSlide2,
      title: "New Majestic Hotel",
      subtitle: "2018 project",
    },
  },
  {
    title: "Brand identity & web design",
    image: {
      src: ImageSlide3,
      title: "Crypto Dashboard",
      subtitle: "2016 project",
    },
  },
];

export const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectImage = (offset: number) => {
    let newIndex = selectedIndex + offset;
    if (newIndex < 0) {
      newIndex = carouselItems.length - 1;
    } else if (newIndex >= carouselItems.length) {
      newIndex = 0;
    }

    setSelectedIndex(newIndex);
  };

  return (
    <section className="carousel">
      <div className="carousel-left">
        <div className="carousel-controls-wrapper">
          <Image
            src={BgPatternWavyWhite}
            alt=""
            className="carousel-controls-wave"
          />
          <div className="carousel-heading" id="carousel-heading">
            {carouselItems[selectedIndex].title}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => selectImage(-1)}
            >
              <Image
                src={IconArrowPrevious}
                alt="Go to previous item in the carousel"
              />
            </button>
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => selectImage(1)}
            >
              <Image
                src={IconArrowNext}
                alt="Go to next item in the carousel"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-content">
        <Image
          src={carouselItems[selectedIndex].image.src}
          alt=""
          className="carousel-content-img"
          id="carousel-content-img"
        />

        <article className="carousel-content-wrapper">
          <h1 className="carousel-content-heading" id="carousel-content-title">
            {carouselItems[selectedIndex].image.title}
          </h1>
          <p
            className="carousel-content-description"
            id="carousel-content-subtitle"
          >
            {carouselItems[selectedIndex].image.subtitle}
          </p>
        </article>
      </div>
    </section>
  );
};
