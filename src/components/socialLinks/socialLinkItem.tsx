import { motion } from "framer-motion";
import "./socialLinkItem.scss";

type Props = {
  url: string;
  icon: React.ReactNode | null;
};

const SocialLinkItem = ({ url, icon }: Props) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link-item"
    >
      {icon && <div className="social-link-icon">{icon}</div>}
    </motion.a>
  );
};

export default SocialLinkItem;
