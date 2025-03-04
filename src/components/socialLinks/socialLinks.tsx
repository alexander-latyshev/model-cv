import { motion } from "framer-motion";
import SocialLinkItem from "./socialLinkItem";
import "./socialLinks.scss";

type Props = {
  items: { name: string; url: string }[];
  icons: Array<Record<string, React.ReactNode>>;
};

const SocialLinks = (props: Props) => {
  const { items, icons } = props;

  return (
    <motion.div
      className="social-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {items.map((el, idx) => {
        const icon = icons.find((icon) => icon[el.name]);
        return (
          <SocialLinkItem
            key={idx}
            url={el.url}
            icon={icon ? icon[el.name] : null}
          />
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
