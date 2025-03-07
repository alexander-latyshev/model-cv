import { useLanguage } from "../components/LanguageContext";
import TypewriterEffect from "../components/TypewriterEffect/typewriterEffect";
import "./About.scss";
import langData from "../data/lang.json";
import PhotoCard from "../components/photoCard/photoCard";

const About = () => {
  const { language } = useLanguage();
  const content = langData.content[language];

  return (
    <section className="container about-page">
      <div className="about-page__text">
        <PhotoCard
          imageUrl={
            "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740075557/IMG_20250208_004208_8701_dosxxa.webp"
          }
          altText="img"
          classname="about-img"
          draggable={false}
        />
        <span>
          <TypewriterEffect text={content.personalInfoTitle} />
          {content.personalInfo.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </span>
        <span>
          <TypewriterEffect text={content.bodyMeasurementsTitle} />
          {content.bodyMeasurements.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </span>
        <span>
          <TypewriterEffect text={content.physicalCharacteristicsTitle} />
          {content.physicalCharacteristics.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </span>
        <span>
          <TypewriterEffect text={content.bodyProportionsTitle} />
          {content.bodyProportions.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </span>
        <span>
          <TypewriterEffect text={content.languagesTitle} />
          {content.languages.map((lang, idx) => (
            <p key={idx}>
              {lang.name}: {lang.level}
            </p>
          ))}
        </span>
      </div>
    </section>
  );
};

export default About;
