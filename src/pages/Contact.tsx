import PhotoCard from "../components/photoCard/photoCard";
import SocialLinks from "../components/socialLinks/socialLinks";
import "./Contact.scss";
import { SiInstagram, SiLinkedin, SiTelegram, SiGmail } from "react-icons/si";
import socialData from "../data/social.json";

const icons = [
  { instagram: <SiInstagram color="#E4405F" /> },
  { linkedIn: <SiLinkedin color="#0077B5" /> },
  { telegram: <SiTelegram color="#0088cc" /> },
  { email: <SiGmail color="#D44638" /> },
];

const Contact = () => {
  return (
    <section className="contact container">
      <SocialLinks items={socialData.links} icons={icons} />
      <PhotoCard
        imageUrl="https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067256/IMG_4508_g04rjy.webp"
        altText="main-img"
        classname="contact__img"
      />
    </section>
  );
};

export default Contact;
