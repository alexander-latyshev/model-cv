import { motion } from "framer-motion";
import "./typewriterEffect.scss";

interface TypewriterEffectProps {
  text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  return <motion.h2 className="text">{text}</motion.h2>;
};

export default TypewriterEffect;
