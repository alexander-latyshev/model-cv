import { Parallax } from "react-parallax";
import PhotoCard from "../components/photoCard/photoCard";
import "./Portfolio.scss";
import bio from "../data/bio.json";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Parallax
        className="parallax-container"
        bgImage="https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067256/IMG_4793_r4fkcv.webp"
        strength={400}
      >
        <div
          style={{
            height: "120vh",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Parallax>
      <div className="portfolio__img-wrapper">
        <PhotoCard
          imageUrl="https://res.cloudinary.com/dw27jvt6i/image/upload/v1741346543/IMG_4964_cut_rq6kd2.webp"
          altText="img"
          classname="portfolio__image"
        />
        <h2 className="text-3d">{bio.lastName["en"]}</h2>
        <PhotoCard
          imageUrl="https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067257/IMG_4930_o4liip.webp"
          classname="portfolio__image"
          altText="img"
        />
      </div>
      <Parallax
        className="parallax-container parallax-last-image"
        bgImage="https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067256/IMG_4799_tif5pp.webp"
        strength={400}
      >
        <div
          style={{
            height: "130vh",
          }}
        />
      </Parallax>
    </section>
  );
};

export default Portfolio;
